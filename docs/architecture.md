# Architecture

## Folder structure

- `src/app`: top-level app composition
- `src/components`: focused UI building blocks
- `src/data`: local topic and PR seed data
- `src/lib`: pure utilities for search and highlighting
- `src/test`: Vitest and React Testing Library coverage split by responsibility
- `src/types`: shared TypeScript models
- `docs`: supporting project documentation

## Data model

The dataset is split across two files:

- [`src/data/sections.ts`](../src/data/sections.ts) — the **source of truth** for topics, grouped by category, technology, and seniority level. Each topic entry carries an explicit `TopicId` enum value, a human-readable name, and an optional `key` flag. This file rarely changes.
- [`src/data/topics.ts`](../src/data/topics.ts) — pull requests, PR↔topic mappings, and the `buildTopics` function that assembles the final `Topic[]` array. **This is the only file to update when adding a new PR.**

To add a new pull request:

1. Add a member to the `PullRequestId` enum in `src/types/topics.ts`.
2. Add an entry to the `pullRequests` array in `src/data/topics.ts`.
3. Add a mapping in `prTopicMappings` listing which `TopicId` values the PR demonstrates.

Type definitions live in [`src/types/topics.ts`](../src/types/topics.ts):

- `PullRequestId` enum — identifies each PR
- `TopicId` enum — identifies each topic (181 members, one per competency)
- `PullRequest` interface — `id`, `title`, `url`
- `Topic` interface — `id`, `name`, `tags`, `prs`

Each topic's `tags` array is derived at build time from the section's category, technology, level, and key metadata. PRs can be shared across multiple topics without duplicating metadata.

## Search strategy

Search logic lives in [`src/lib/search.ts`](../src/lib/search.ts).

- input is normalized to lowercase with collapsed whitespace
- queries are tokenized into space-separated terms
- each topic builds a search index from its name, tags, and PR titles
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

## Rendering strategy

The app stays as a single SPA screen with no routing.

- the main app owns the immediate search input state
- a debounced query drives filtering and URL sync through `?q=`
- filtered results are derived from pure data and utility functions
- the table renders one row per topic
- each topic row stacks multiple PR links inside the same cell for quick scanning
- empty state and result count update from the same filtered result set
- browser back/forward navigation rehydrates the search from the URL immediately
- clear and Escape return focus to the search input for keyboard-driven workflows

## Testing strategy

The suite intentionally layers confidence instead of pushing every assertion
through the top-level app screen.

- helper tests cover search-adjacent utilities such as highlighting and URL query state
- hook tests cover debounce timing and flush behavior in isolation
- app tests cover integration points such as hydration, debounced filtering,
  result rendering, clear behavior, and empty states

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

## Performance notes

The current UI is optimized for smooth typing without adding architectural
complexity.

- filtered results are memoized in the app layer
- the topic table is memoized so it does not rerender on every keystroke before
  the debounced query changes
- debounce behavior is isolated in a small hook in `src/lib`
- current optimizations are intentionally lightweight because the dataset is still local and relatively small
- the next likely optimization, if the dataset grows substantially, would be precomputing topic search text in the data layer rather than rebuilding it during every filter pass

## Why this supports later PR-data refinement

To add a new PR, add it to the `pullRequests` array and map it to topics in `prTopicMappings` — both in [`src/data/topics.ts`](../src/data/topics.ts). No changes to sections, rendering, or search architecture are needed.

- the section source of truth is stable and separate from PR assignment
- shared PR relationships are handled by `prTopicMappings`
- UI components stay data-agnostic
- search behavior continues to work as long as topics and PRs preserve the same typed shape
