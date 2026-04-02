# Feature: Playwright E2E test suite

**Promotion topic**: [Code-Based Testing · Senior] Creates and organises end-to-end tests

## What it does

Adds a full end-to-end test suite using Playwright that exercises the
application through a real browser (Chromium). The suite covers four
functional areas: search, saved searches, dashboard navigation, and
internationalisation.

## Configuration (`playwright.config.ts`)

| Setting | Value | Reason |
| ------- | ----- | ------ |
| `testDir` | `./e2e` | Keeps E2E specs separate from unit tests in `src/test/` |
| `fullyParallel` | `true` | Each test file runs in its own worker for speed |
| `retries` | `1` | One retry to reduce flakiness in CI |
| `webServer.command` | `pnpm preview` | Starts a production build preview server before tests |
| `webServer.port` | `4173` | Vite's default preview port |
| `reuseExistingServer` | `!process.env.CI` | Reuses a running server locally, starts fresh in CI |
| `projects` | Chromium only | Single browser target to keep the suite fast |

## Test files

### 1. `e2e/search.spec.ts` — 5 tests

| Test | What it verifies |
| ---- | ---------------- |
| filters topics by query and shows result count | Type `"metaprogramming"` → 1 result visible |
| shows ghost-text autocomplete suggestion | Type `"deboun"` → ghost text `"ced search"` appears |
| accepts ghost suggestion with Tab | Tab key fills input with `"debounced search"` |
| clears search and restores all topics | Clear button empties input, count resets |
| shows empty state for no results | Non-matching query → "No matching topics" message |

### 2. `e2e/saved-searches.spec.ts` — 3 tests

Each test clears `localStorage` in `beforeEach` (line 7) to start with no
saved data.

| Test | What it verifies |
| ---- | ---------------- |
| saves a search and shows it as a chip | Save button creates a visible chip |
| applies a saved search by clicking its chip | Clicking the chip fills the input |
| removes a saved search chip | Remove button deletes the chip |

### 3. `e2e/dashboard.spec.ts` — 2 tests

| Test | What it verifies |
| ---- | ---------------- |
| navigates to dashboard and shows chart headings | Dashboard link → URL changes, headings visible |
| navigates back to search from dashboard | Search link → returns to `/`, searchbox visible |

### 4. `e2e/i18n.spec.ts` — 2 tests

| Test | What it verifies |
| ---- | ---------------- |
| switches to Spanish and back to English | Language combobox changes visible text; re-queries the combobox by its new accessible name (`/idioma/i`) after switching to Spanish (line 19) |
| persists language choice across page reloads | Selects Spanish, reloads, Spanish is still active |

## npm scripts (`package.json`)

| Script | Command | Purpose |
| ------ | ------- | ------- |
| `test:e2e` | `playwright test` | Run all E2E tests headless |
| `test:e2e:ui` | `playwright test --ui` | Open Playwright's interactive UI mode |

## Vitest isolation (`vite.config.ts`)

The `e2e/**` glob is explicitly added to Vitest's `test.exclude` array so
that `pnpm test` (Vitest) does not accidentally pick up Playwright files.

## Files

| File | Purpose |
| ---- | ------- |
| `playwright.config.ts` | Playwright configuration |
| `e2e/search.spec.ts` | Search and autocomplete E2E tests |
| `e2e/saved-searches.spec.ts` | Saved searches E2E tests |
| `e2e/dashboard.spec.ts` | Dashboard navigation E2E tests |
| `e2e/i18n.spec.ts` | Language switching E2E tests |
| `package.json` | `test:e2e` and `test:e2e:ui` scripts |
| `vite.config.ts` | `e2e/**` excluded from Vitest |
