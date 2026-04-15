# Architecture

## Folder structure

- `src/app`: top-level app composition (router, layout)
- `src/pages`: route-level page components
- `src/components`: focused UI building blocks
- `src/components/charts`: Recharts visualizations for the dashboard
- `src/data`: local topic and PR seed data
- `src/lib`: pure utilities for search, highlighting, coverage stats, autocomplete, logging, and Web Worker orchestration
- `src/test`: Vitest and React Testing Library coverage split by responsibility
- `e2e`: Playwright end-to-end tests (search, saved searches, dashboard, i18n)
- `src/types`: shared TypeScript models
- `docs`: supporting project documentation

## Data model

The dataset is split across two files:

- [`src/data/sections.ts`](../src/data/sections.ts) — the **source of truth** for topics, grouped by category, technology, and seniority level. Each topic entry carries an explicit `TopicId` enum value, a human-readable name, and an optional `key` flag. This file rarely changes.
- [`src/data/topics.ts`](../src/data/topics.ts) — pull requests, PR↔topic mappings, and the `buildTopics` function that assembles the final `Topic[]` array. **This is the only file to update when adding a new PR.**

To add a new pull request:

1. Add a member to the `PullRequestId` enum in `src/types/topics.ts`.
2. Add an entry to the `pullRequests` array in `src/data/topics.ts` with a `repoId`.
3. Optionally add the PR to a parent feature in `PARENT_FEATURE_PRS`.
4. Add a mapping in `prTopicMappings` listing which `TopicId` values the PR demonstrates, a `contribution` string, and a `score` (1-100) for each.

Type definitions live in [`src/types/topics.ts`](../src/types/topics.ts):

- `RepoId` enum — identifies each repository (11 members)
- `ParentFeature` enum — identifies each business initiative (9 members)
- `PullRequestId` enum — identifies each PR (75 members)
- `TopicId` enum — identifies each topic (181 members, one per competency)
- `Repo` interface — `id`, `name`, `url`
- `PullRequest` interface — `id`, `repoId`, `title`, `url`
- `PrTopicEntry` interface — `{ topicId, contribution, score }`
- `PrTopicMappings` type — mapped type constraining each PR's mapping entries to `PrTopicEntry[]`
- `TopicPr` interface — extends `PullRequest` with `contribution`, `score`, `repoName`, and optional `parentFeature` (denormalized by `buildTopics`)
- `Topic` interface — `id`, `name`, `tags`, `prs: TopicPr[]`

Each topic's `tags` array is derived at build time from the section's category, technology, level, and key metadata. Each PR-topic mapping carries a `contribution` label describing the technical problem solved and a `score` indicating relevance (see [Relevance scoring](#relevance-scoring) below). `repoName` and `parentFeature` are denormalized by `buildTopics` from the `repos` array and `PARENT_FEATURE_PRS` mapping respectively.

## Relevance scoring

Each PR-topic mapping entry has a `score` field (1-100) that ranks how directly the PR demonstrates the topic skill. `buildTopics` sorts each topic's PRs by score descending (with PR Atlas always last as a tiebreaker) and keeps only the top 3.

### Scoring rubric

| Range  | Label        | When to use |
|--------|--------------|-------------|
| 90-100 | **Primary**  | The topic IS what the PR is about. If asked "what does this PR do?", the answer directly maps to the topic. |
| 60-89  | **Strong**   | The topic is a major aspect of the PR, clearly visible in the diff, easy to explain in a presentation. |
| 30-59  | **Supporting** | The topic is present but secondary. The skill is used meaningfully but isn't the PR's focus. |
| 1-29   | **Incidental** | The skill is touched but not the focus. Would require explanation to connect the dots. |

### Scoring conventions

- **PR Atlas** entries: always **20** (personal project, lowest priority)
- **Process Evidence** entries: always **90** (direct evidence)
- **Corporate PRs — primary topic** (matching the section comment header): **90**
- **Corporate PRs — strong related**: **75-80**
- **Corporate PRs — supporting/secondary**: **40-55**

A PR can map to as many topics as applicable — the scoring system ensures only the 3 most relevant PRs surface for each topic. A unit test enforces that no topic in the built output exceeds 3 PRs.

## Search strategy

Search is powered by two layers:

1. **Trigram inverted index** ([`src/lib/search-index.ts`](../src/lib/search-index.ts)) — a `TrigramIndex` class that pre-computes a `Map<string, Set<number>>` mapping every 3-character substring to the topic indices that contain it. At query time, trigram sets for each token are intersected to narrow candidates, then a full substring verification eliminates false positives. Tokens shorter than 3 characters fall back to linear scan.

2. **Web Worker** ([`src/lib/search-worker.ts`](../src/lib/search-worker.ts)) — a module worker that imports the topics data, builds the trigram index on load, and handles search queries via `postMessage`. This moves indexing and querying off the main thread.

The [`useSearchWorker`](../src/lib/use-search-worker.ts) hook manages the worker lifecycle and falls back to synchronous search (via [`src/lib/search.ts`](../src/lib/search.ts)) when Workers are unavailable (e.g. in jsdom tests).

The original linear search in `src/lib/search.ts` is retained as a fallback and for unit testing.

## Autocomplete

Inline ghost-text autocomplete is implemented via:

- [`src/lib/autocomplete.ts`](../src/lib/autocomplete.ts) — builds a sorted, deduplicated dictionary from topic names, tags, PR titles, contribution names, repo names, and parent feature names. Uses binary search to find the first dictionary entry matching the user's typed prefix.
- [`src/components/GhostInput.tsx`](../src/components/GhostInput.tsx) — renders a transparent input over a mirror div showing the suggestion in muted text. Tab or Right Arrow (at end of input) accepts the suggestion.

## Structured logging

The app uses [consola](https://github.com/unjs/consola) for structured, level-based logging ([`src/lib/logger.ts`](../src/lib/logger.ts)).

- Log level defaults to `1` (warnings/errors only).
- An opt-in debug mode (Ctrl+Shift+D) raises the level to `4` (debug), persisted to localStorage via the `pr-atlas:debug` key.
- When debug mode is active, a "DEBUG" badge appears in the nav bar.
- Key events are logged: search queries, worker lifecycle, and autocomplete acceptance.

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
- search index tests verify trigram-based matching against known queries
- autocomplete tests verify dictionary building and prefix suggestion logic
- app tests cover integration points such as hydration, debounced filtering,
  result rendering, clear behavior, empty states, router navigation, autocomplete acceptance, and debug toggle
- Playwright E2E tests (`e2e/`) validate full-app workflows: search with ghost-text autocomplete, saved searches, dashboard navigation, and language switching

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

- search queries are offloaded to a Web Worker via a trigram inverted index, keeping the main thread free for UI rendering
- the worker is code-split by Vite into its own chunk, loaded only once on first render
- filtered results are memoized in the app layer
- the topic table is memoized so it does not rerender on every keystroke before
  the debounced query changes
- debounce behavior is isolated in a small hook in `src/lib`
- the dashboard page is code-split with `React.lazy()` + `Suspense` so the Recharts bundle only loads on demand
- the autocomplete dictionary is built once via `useMemo` and reused across renders

## Why this supports later PR-data refinement

To add a new PR, add its ID to the `PullRequestId` enum in [`src/types/topics.ts`](../src/types/topics.ts), then add it to the `pullRequests` array (with `repoId`), optionally to `PARENT_FEATURE_PRS`, and map it to topics (with `contribution` strings) in `prTopicMappings` — all in [`src/data/topics.ts`](../src/data/topics.ts). No changes to sections, rendering, or search architecture are needed.

- the section source of truth is stable and separate from PR assignment
- shared PR relationships are handled by `prTopicMappings`
- UI components stay data-agnostic
- search behavior continues to work as long as topics and PRs preserve the same typed shape
