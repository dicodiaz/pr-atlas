# Feature: Trigram inverted index

**Promotion topic**: [Language · Senior] Manages and implements complex data structures

## What it does

Replaces the previous linear scan search with a pre-computed inverted index
based on trigrams (3-character substrings). Instead of checking every topic
against the query on each search, the index lets us look up which topics
contain a given trigram in O(1) time, then intersect the candidate sets for
all query trigrams.

## Why trigrams

A trigram index supports **substring matching** — not just whole-word
matching. The word `"metaprogramming"` produces trigrams like `"met"`,
`"eta"`, `"tap"`, `"apr"`, ... and the query `"progr"` produces `"pro"`,
`"rog"`, `"ogr"`. Since all three query trigrams appear in the topic's
trigram set, it's flagged as a candidate. A final verification step
confirms the full substring match to eliminate false positives (trigrams can
match in wrong order).

## How it works

### 1. Building the index (`src/lib/search-index.ts`, lines 28-41)

The constructor receives all topics and, for each one:

1. Builds a search text string from the topic name, tags, PR titles,
   contribution names, repo names, and parent feature names (line 13-22, `buildSearchIndex`).
2. Extracts every 3-character substring from that text (line 5-11,
   `extractTrigrams`).
3. Stores a mapping from each trigram to the set of topic indices that
   contain it (line 32-41). The result is a `Map<string, Set<number>>`.

### 2. Searching the index (`src/lib/search-index.ts`, lines 44-90)

When `search(query)` is called:

1. The query is tokenized into space-separated terms (line 45).
2. For each token:
   - If the token is 3+ characters, its trigrams are extracted and the
     posting lists (the `Set<number>` for each trigram) are intersected to
     produce a candidate set (lines 61-75).
   - If the token is shorter than 3 characters (e.g. `"ai"`), a linear
     scan fallback is used for that token only (lines 53-60).
3. Candidate sets from all tokens are intersected together (lines 72-78).
4. A final pass verifies each candidate actually contains every token as a
   substring, eliminating false positives from trigram coincidences
   (lines 82-89).

### 3. Set intersection helper (`src/lib/search-index.ts`, lines 93-100)

A small `intersect` utility always iterates over the smaller set to keep
intersection efficient.

## Files

| File                            | Purpose                                                                                                                             |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `src/lib/search-index.ts`       | `TrigramIndex` class — index construction and search                                                                                |
| `src/lib/search.ts`             | Original linear search — kept as fallback for tests and jsdom                                                                       |
| `src/test/search-index.test.ts` | 8 unit tests: empty query, name/tag matching, multi-token intersection, short tokens, case insensitivity, parity with linear search |

## How the old search still works

The original `searchTopics` function in `src/lib/search.ts` is unchanged.
It acts as the synchronous fallback when Web Workers are unavailable (e.g.
in Vitest's jsdom environment). This means the trigram index is an
**additive optimisation** — removing it would revert to the old behavior
without breaking anything.
