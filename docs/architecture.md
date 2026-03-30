# Architecture

## Folder structure

- `src/app`: top-level app composition
- `src/components`: focused UI building blocks
- `src/data`: local topic and PR seed data
- `src/lib`: pure utilities for search and highlighting
- `src/test`: Vitest and React Testing Library coverage
- `src/types`: shared TypeScript models
- `docs`: supporting project documentation

## Data model

The local dataset lives in [`src/data/topics.ts`](../src/data/topics.ts). It uses:

- a shared pull request catalog keyed by PR id
- a topic seed array grouped by topic for maintainability
- small data helpers that resolve each topic's `prExampleIds` into full PR objects
- a final exported `topics` array built from those helpers

Each topic includes:

- `id`
- `name`
- `tags`
- `prExamples`

Each PR example includes:

- `id`
- `title`
- `url`

This keeps authoring topic-centric while still allowing the same PR to appear in multiple topics without duplicating the PR metadata everywhere.

## Search strategy

Search logic lives in [`src/lib/search.ts`](../src/lib/search.ts).

- input is normalized to lowercase with collapsed whitespace
- queries are tokenized into space-separated terms
- each topic builds a search index from its name, tags, and PR titles
- a topic matches when every query token appears somewhere in that topic index

That approach keeps the behavior simple, testable, and tolerant of casing, extra spaces, and partial phrase searches.

## Rendering strategy

The app stays as a single SPA screen with no routing.

- the main app owns only the search query state
- filtered results are derived from pure data and utility functions
- the table renders one row per topic
- each topic row stacks multiple PR links inside the same cell for quick scanning
- empty state and result count update from the same filtered result set

## Why this supports later PR-data refinement

Later, you can replace the placeholder PR catalog entries and topic seed data in
[`src/data/topics.ts`](../src/data/topics.ts) without changing the rendering or search architecture.

- topic-level authoring remains easy to maintain
- shared PR relationships already exist
- UI components stay data-agnostic
- search behavior continues to work as long as topics and PRs preserve the same typed shape
