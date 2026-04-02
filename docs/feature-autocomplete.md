# Feature: Inline ghost-text autocomplete

**Promotion topic**: [Libraries · Senior] Uses libraries for managing and implementing complex data structures

## What it does

As the user types in the search field, a translucent suggestion appears
inline (like a "ghost" of the completed text). Pressing **Tab** or
**ArrowRight** (when the cursor is at the end) accepts the suggestion and
fills the input.

## How it works

### 1. Dictionary construction (`src/lib/autocomplete.ts`, lines 4-15)

`buildDictionary(topics)` collects every searchable string — topic names,
tags, PR titles, and feature names — normalises them to lowercase, dedupes
via a `Set`, and returns a **sorted array**. The sorted order is critical
because it enables binary search.

### 2. Prefix lookup via binary search (`src/lib/autocomplete.ts`, lines 17-37)

`getSuggestion(typed, dictionary)` normalises the user's input and runs a
standard binary search (`lo`/`hi` bisection, line 26-30) to find the first
dictionary entry that is >= the normalised input. If that entry starts with
the normalised input, it's returned as the suggestion.

The function preserves the user's original casing by concatenating the
typed prefix with the remaining characters from the dictionary match
(line 36): if the user typed `"Deboun"`, the result is `"Debounced search"`
rather than `"debounced search"`.

### 3. Ghost input component (`src/components/GhostInput.tsx`)

The component renders two layers inside a `relative` container:

- **Mirror div** (lines 67-77, `aria-hidden="true"`): An absolutely
  positioned div that mirrors the input's padding and font size. It
  contains:
  - An `invisible` span with the current value (to push the suggestion
    text to the correct horizontal offset).
  - A `text-muted opacity-50` span with the remaining characters of the
    suggestion. `overflow-hidden text-nowrap` and `truncate` prevent the
    ghost text from wrapping outside the input.

- **Actual input** (lines 79-89, `z-10`): A transparent `<input
  type="search">` layered above the mirror. Because the input background is
  transparent, the ghost text shows through behind the typed characters.

### 4. Keyboard handling (`src/components/GhostInput.tsx`, lines 46-63)

- **Tab** (line 48-51): Prevents the default tab behaviour and calls
  `acceptSuggestion()`, which sets the input value to the full suggestion.
- **ArrowRight at end** (line 55-58): Only triggers when the cursor is at
  the end of the current value (`selectionStart === value.length`).
- Any other key falls through to the parent's `onKeyDown` handler (e.g.
  `Escape` to clear, handled in `SearchControls`).

### 5. Accessibility (`src/components/GhostInput.tsx`, lines 87, 91-95)

When a suggestion is visible, an `aria-describedby` attribute links the
input to a screen-reader-only span that reads: _"Press Tab to accept
suggestion: {suggestion}"_ (i18n key: `search.acceptSuggestion`).

### 6. Integration (`src/pages/SearchPage.tsx`, lines 9, 31, 130)

The dictionary is built once with `useMemo(() => buildDictionary(topics), [])`.
It's passed as a prop through `SearchControls` down to `GhostInput`.

## Files

| File | Purpose |
| ---- | ------- |
| `src/lib/autocomplete.ts` | `buildDictionary` and `getSuggestion` — pure functions, no React |
| `src/components/GhostInput.tsx` | Visual ghost-text layer, keyboard handling, a11y |
| `src/components/SearchControls.tsx` (lines 44-54) | Passes `dictionary` prop to `GhostInput` |
| `src/pages/SearchPage.tsx` (lines 9, 31, 130) | Builds dictionary, passes to `SearchControls` |
| `src/test/autocomplete.test.ts` | 10 unit tests: sorting, deduplication, prefix matching, case preservation, case insensitivity, edge cases |
| `e2e/search.spec.ts` (lines 19-36) | E2E tests: ghost text visibility and Tab acceptance |
| `src/i18n/locales/en.json` | `search.acceptSuggestion` — screen reader hint |
| `src/i18n/locales/es.json` | Spanish translation of the same key |
