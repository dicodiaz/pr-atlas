# Feature: Web Worker search

**Promotion topic**: [Language · Senior] Synchronises concurrent operations by using language capabilities

## What it does

Moves the trigram index construction and query execution off the main
thread into a dedicated Web Worker. The main thread stays free for UI
rendering while the worker handles search in parallel.

## How it works

There are three pieces working together:

### 1. Message protocol (`src/lib/search-worker-protocol.ts`)

A shared TypeScript file defines the exact shape of messages flowing in
each direction:

- **Main → Worker**: `{ type: 'search', query: string, id: number }` — the
  main thread sends a query with a monotonically increasing `id`.
- **Worker → Main**: either `{ type: 'ready' }` (worker finished building
  the index and is accepting queries) or
  `{ type: 'results', topicIds: string[], id: number }` (search results as
  an array of `TopicId` strings — not full objects — to minimise
  serialisation cost).

### 2. Worker script (`src/lib/search-worker.ts`)

This file runs in a separate thread. On load:

1. It imports the `topics` array from `src/data/topics` (line 1).
2. It creates a `TrigramIndex` from those topics (line 8).
3. It posts `{ type: 'ready' }` to signal it's accepting queries (line 20).

When a `'search'` message arrives (line 12-17), the worker runs
`index.search(query)`, maps the matches to their IDs, and posts back a
`'results'` message.

Vite bundles this file as a separate chunk
(`dist/assets/search-worker-*.js`) so it's loaded independently from the
main bundle.

### 3. React hook (`src/lib/use-search-worker.ts`)

The `useSearchWorker(topics, query)` hook manages the full lifecycle:

- **Worker creation** (lines 21-53): On mount, it creates the worker via
  `new Worker(new URL('./search-worker.ts', import.meta.url), { type: 'module' })`.
  When the worker posts `'ready'`, the hook sets `isReady = true`. When
  results arrive, they're resolved from `TopicId` strings back to full
  `Topic` objects using a pre-built `Map` and stored in state.

- **Query dispatch** (lines 55-63): An effect watches the `query` prop.
  When it changes (and the worker is ready), it posts a `'search'` message.
  Each message carries a monotonically increasing `id` so that stale
  responses from earlier queries are discarded (line 37).

- **Fallback** (lines 8, 56-58): If `Worker` is not available (e.g. in
  Vitest's jsdom environment), the hook calls the synchronous
  `searchTopics` function directly instead. This keeps all existing unit
  tests working without mocking.

- **Cleanup** (lines 49-52): On unmount, the worker is terminated.

### Integration in SearchPage (`src/pages/SearchPage.tsx`, line 29)

The page calls `useSearchWorker(topics, activeQuery)` and gets back a
`Topic[]` array. The hook handles everything internally — the page doesn't
know or care whether results came from the worker or from a sync fallback.

## Files

| File | Purpose |
| ---- | ------- |
| `src/lib/search-worker-protocol.ts` | Shared `WorkerRequest` / `WorkerResponse` types |
| `src/lib/search-worker.ts` | Worker script — builds index, handles queries |
| `src/lib/use-search-worker.ts` | React hook — lifecycle, message passing, fallback |
| `src/pages/SearchPage.tsx` (line 29) | Consumer — single-line integration |

## Why not just search on the main thread?

For 181 topics the performance gain is negligible. The real value is
demonstrating **concurrent programming in JavaScript**: two threads
communicating via structured messages, with stale-response handling and
graceful degradation. This directly maps to the Senior competency topic
"Synchronises concurrent operations by using language capabilities."
