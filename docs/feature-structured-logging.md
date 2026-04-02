# Feature: Structured logging with debug toggle

**Promotion topic**: [Libraries · Senior] Uses libraries for logging data

## What it does

Integrates the `consola` library for structured, tagged, timestamped
console logging throughout the app. A hidden keyboard shortcut
(**Ctrl+Shift+D**) toggles debug mode on and off, persisting the choice to
`localStorage`. When debug mode is off (the default), only warnings and
errors reach the console; when it's on, all `logger.debug(...)` calls
become visible.

## How it works

### 1. Logger module (`src/lib/logger.ts`)

Creates a `consola` instance (line 7-10) with:

- **Tag**: `"pr-atlas"` — every log line is prefixed with `[pr-atlas]`.
- **Timestamps**: `formatOptions: { date: true }` adds a date/time to
  each line.
- **Level**: Reads the `pr-atlas:debug` key from `localStorage` via the
  existing `storage` wrapper. If `true`, level is `4` (debug); otherwise
  `1` (warn/error only).

Exports three things:

| Export | Purpose |
| ------ | ------- |
| `logger` | The consola instance — call `logger.debug(...)`, `logger.info(...)`, etc. |
| `toggleDebug()` | Flips the debug flag in `localStorage` and updates `logger.level` at runtime. Returns the new value. |
| `isDebugEnabled()` | Reads the current flag from `localStorage`. |

### 2. Global keyboard shortcut (`src/app/Layout.tsx`, lines 12-22)

The `Layout` component (shared by all routes) registers a `keydown`
listener for `Ctrl+Shift+D`:

1. Calls `toggleDebug()` to flip persistence and logger level.
2. Updates a `debug` React state so the UI re-renders.
3. Logs `"Debug logging enabled"` or `"Debug logging disabled"` via
   `logger.info(...)` — this message always appears because `.info` is
   above the warn threshold.

### 3. Debug badge (`src/app/Layout.tsx`, lines 48-52)

When `debug` is `true`, a small amber "DEBUG" badge appears in the
navigation bar, giving the user visual confirmation that debug mode is
active. When turned off, the badge disappears.

### 4. Where debug logs are emitted

| Location | What it logs |
| -------- | ------------ |
| `src/lib/use-search-worker.ts`, line 32-34 | Worker ready time (ms) |
| `src/lib/use-search-worker.ts`, line 41-43 | Number of results returned by worker |
| `src/lib/use-search-worker.ts`, line 61 | Query posted to worker with request ID |
| `src/components/GhostInput.tsx`, line 42 | Autocomplete suggestion accepted |
| `src/pages/SearchPage.tsx`, line 34 | Active query and result count after debounce |

### 5. i18n keys

| Key | English | Spanish |
| --- | ------- | ------- |
| `debug.badge` | DEBUG | DEPURACIÓN |
| `debug.enabled` | Debug logging enabled | Registro de depuración activado |
| `debug.disabled` | Debug logging disabled | Registro de depuración desactivado |

## Files

| File | Purpose |
| ---- | ------- |
| `src/lib/logger.ts` | Logger creation, `toggleDebug`, `isDebugEnabled` |
| `src/app/Layout.tsx` (lines 10-27, 48-52) | Keyboard shortcut, debug state, badge UI |
| `src/pages/SearchPage.tsx` (line 34) | Debug log of search queries |
| `src/lib/use-search-worker.ts` (lines 32-34, 41-43, 61) | Debug logs for worker lifecycle |
| `src/components/GhostInput.tsx` (line 42) | Debug log for autocomplete acceptance |
| `src/i18n/locales/en.json` | English strings for badge and toggle messages |
| `src/i18n/locales/es.json` | Spanish translations |
| `src/test/App.test.tsx` | Integration test: "toggles debug mode with Ctrl+Shift+D" |
