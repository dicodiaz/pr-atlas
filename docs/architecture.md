# Architecture

## Folder structure

- `src/app`: top-level app composition (router, layout)
- `src/pages`: route-level page components
- `src/components`: focused UI building blocks
- `src/components/charts`: Recharts visualizations for the dashboard
- `src/data`: local topic and PR seed data
- `src/lib`: pure utilities for search, highlighting, and coverage stats
- `src/test`: Vitest and React Testing Library coverage split by responsibility
- `src/types`: shared TypeScript models
- `docs`: supporting project documentation

## Data model

The dataset is split across two files:

- [`src/data/sections.ts`](../src/data/sections.ts) — the **source of truth** for topics, grouped by category, technology, and seniority level. Each topic entry carries an explicit `TopicId` enum value, a human-readable name, and an optional `key` flag. This file rarely changes.
- [`src/data/topics.ts`](../src/data/topics.ts) — pull requests, PR↔topic mappings, and the `buildTopics` function that assembles the final `Topic[]` array. **This is the only file to update when adding a new PR.**

To add a new pull request:

1. Add a member to the `PullRequestId` enum in `src/types/topics.ts`.
2. Add the PR's allowed feature names to `PR_FEATURES` in `src/types/topics.ts`.
3. Add an entry to the `pullRequests` array in `src/data/topics.ts`.
4. Add a mapping in `prTopicMappings` listing which `TopicId` values the PR demonstrates and which feature covers each topic.

Type definitions live in [`src/types/topics.ts`](../src/types/topics.ts):

- `PullRequestId` enum — identifies each PR
- `TopicId` enum — identifies each topic (181 members, one per competency)
- `PullRequest` interface — `id`, `title`, `url`
- `PR_FEATURES` const — maps each `PullRequestId` to its allowed feature strings (single source of truth)
- `Feature` type — union of all feature strings across all PRs
- `PrTopicMappings` type — mapped type constraining each PR's mapping entries to its own features via `FeatureOf<K>`
- `TopicPr` interface — extends `PullRequest` with a `feature` field
- `Topic` interface — `id`, `name`, `tags`, `prs: TopicPr[]`

Each topic's `tags` array is derived at build time from the section's category, technology, level, and key metadata. Each PR-topic mapping carries a `feature` label indicating which feature of the PR demonstrates that topic. PRs can be shared across multiple topics without duplicating metadata.

## Search strategy

Search logic lives in [`src/lib/search.ts`](../src/lib/search.ts).

- input is normalized to lowercase with collapsed whitespace
- queries are tokenized into space-separated terms
- each topic builds a search index from its name, tags, PR titles, and PR feature names
- a topic matches when every query token appears somewhere in that topic index

That approach keeps the behavior simple, testable, and tolerant of casing, extra spaces, and partial phrase searches.

## Search limitations

The current search intentionally favors predictability over complexity.

- matching is token-based rather than fuzzy-ranked
- search is case-insensitive
- extra whitespace is collapsed before matching
- partial substring matches are allowed within the normalized topic index
- results are not typo-tolerant
- results are not ranked by relevance; matching topics keep their data order

This is a good fit for a small local interview-prep dataset. If the dataset
grows substantially or relevance becomes more important, the next iteration
could introduce a precomputed search index or fuzzy-ranking layer without
changing the table-oriented rendering model.

## Routing

The app uses [react-router](https://reactrouter.com/) v7 with `BrowserRouter` for client-side navigation. The router is set up in `src/main.tsx` and routes are defined in `src/app/App.tsx`:

- `/` — search page (topic search and results table)
- `/dashboard` — coverage analytics dashboard (lazy-loaded via `React.lazy` + `Suspense`)

A shared `Layout` component (`src/app/Layout.tsx`) provides the common shell: a nav bar with active-link styling and the language switcher. Each page renders inside the layout's `<Outlet>`.

The dashboard page and its Recharts dependency are code-split so they only download when the user navigates to `/dashboard`. A skeleton fallback is shown during the load.

## Rendering strategy

- the search page owns the immediate search input state
- a debounced query drives filtering and URL sync through `?q=`
- filtered results are derived from pure data and utility functions
- the table renders one row per topic
- each topic row stacks multiple PR links inside the same cell for quick scanning
- empty state and result count update from the same filtered result set
- browser back/forward navigation rehydrates the search from the URL immediately
- clear and Escape return focus to the search input for keyboard-driven workflows

## Coverage dashboard

The `/dashboard` route displays coverage analytics computed from the topic data:

- **Bar chart** — coverage by category (covered vs total per category, via Recharts)
- **Donut chart** — coverage by seniority level (Trainee / Junior / Middle / Senior)
- **Progress bars** — threshold progress toward each promotion requirement

Stats are computed by pure functions in [`src/lib/coverage.ts`](../src/lib/coverage.ts) and passed to chart components in `src/components/charts/`.

## Testing strategy

The suite intentionally layers confidence instead of pushing every assertion
through the top-level app screen.

- helper tests cover search-adjacent utilities such as highlighting and URL query state
- hook tests cover debounce timing and flush behavior in isolation
- coverage utility tests verify category/level grouping and threshold math
- app tests cover integration points such as hydration, debounced filtering,
  result rendering, clear behavior, empty states, and router navigation

That split keeps the app-level suite meaningful while still covering smaller
branches where they naturally belong.

## State flow

The search interaction has two layers of state:

- `inputQuery`: the immediate controlled input value shown in the search field
- `activeQuery`: the debounced query derived from `inputQuery` and used for filtering and URL sync

The flow is:

1. The user types into the search field and `inputQuery` updates immediately.
2. A debounce hook waits 250ms before promoting that value to `activeQuery`.
3. `activeQuery` drives both filtered results and the `?q=` URL parameter.
4. Clear and `Escape` bypass the delay, reset both the visible input and active search immediately, and return focus to the search field.
5. Browser `popstate` events read from the URL and immediately rehydrate both the visible input and the applied search.

## Saved searches

Users can save the current search query as a chip for quick reuse. Saved
searches are persisted to `localStorage` via a typed wrapper in
[`src/lib/storage.ts`](../src/lib/storage.ts) and managed through a
[`useSavedSearches`](../src/lib/use-saved-searches.ts) hook.

- Saved queries appear as always-visible chips between the search bar and results.
- Clicking a chip applies the search immediately (bypasses debounce).
- Each chip has a remove button.
- Duplicates are prevented (case-insensitive).
- The list is capped at 20 entries.

## Internationalization

The app supports English and Spanish via [react-i18next](https://react.i18next.com/).

- Translation files live in `src/i18n/locales/en.json` and `src/i18n/locales/es.json`.
- `src/i18n/index.ts` initializes i18next with bundled translations (no lazy loading), browser language detection on first visit, and fallback to English.
- The chosen language is persisted to localStorage via the existing `storage` wrapper (`pr-atlas:language` key).
- A `<LanguageSwitcher>` component in the shared nav bar provides a `<select>` dropdown to switch between EN and ES.
- All UI strings use `t()` from `useTranslation()`. Pluralization uses i18next's `_one`/`_other` suffix convention. The `<Trans>` component handles inline markup in translated strings (e.g. the empty state suggestion text).
- Topic names, tags, and PR titles remain untranslated — they are proper competency names from the data layer.

To add a new language, create a new JSON file in `src/i18n/locales/`, add it to the `resources` object in `src/i18n/index.ts`, and add an option to the `LANGUAGES` array in `LanguageSwitcher.tsx`.

## Performance notes

The current UI is optimized for smooth typing without adding architectural
complexity.

- filtered results are memoized in the app layer
- the topic table is memoized so it does not rerender on every keystroke before
  the debounced query changes
- debounce behavior is isolated in a small hook in `src/lib`
- the dashboard page is code-split with `React.lazy()` + `Suspense` so the Recharts bundle only loads on demand
- current optimizations are intentionally lightweight because the dataset is still local and relatively small
- the next likely optimization, if the dataset grows substantially, would be precomputing topic search text in the data layer rather than rebuilding it during every filter pass

## Why this supports later PR-data refinement

To add a new PR, add its ID and feature list to [`src/types/topics.ts`](../src/types/topics.ts), then add it to the `pullRequests` array and map it to topics (with feature labels) in `prTopicMappings` — both in [`src/data/topics.ts`](../src/data/topics.ts). No changes to sections, rendering, or search architecture are needed.

- the section source of truth is stable and separate from PR assignment
- shared PR relationships are handled by `prTopicMappings`
- UI components stay data-agnostic
- search behavior continues to work as long as topics and PRs preserve the same typed shape
