# PR Atlas

PR Atlas is a polished personal React SPA for interview preparation and live demos. It lets you search 180+ front-end engineering competency topics across 12 categories and four seniority levels, and immediately see matching GitHub pull request examples from 208 corporate PRs across 12 repositories. Search is powered by a trigram inverted index running in a Web Worker, with inline ghost-text autocomplete. Frequently used searches can be saved as persistent chips for quick reuse. A coverage analytics dashboard visualizes progress toward promotion thresholds with interactive charts. The UI is available in English and Spanish. Structured logging via consola is available in debug mode (Ctrl+Shift+D).

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- react-router
- Recharts
- consola
- react-i18next (EN/ES)
- Vitest
- React Testing Library
- Playwright
- ESLint
- Prettier

## Local dataset

Topics are defined in [`src/data/sections.ts`](./src/data/sections.ts) using a compact section-based format grouped by category, technology, and seniority level. This file is the source of truth and rarely changes.

Pull requests and their topic mappings live in [`src/data/topics.ts`](./src/data/topics.ts). To add a new PR, add an entry to `pullRequests` and map it to topics in `prTopicMappings` — no other files need to change.

## Internationalization

The app ships with English (`en`) and Spanish (`es`) translations. On first visit the browser language is detected; the user can switch manually via the language dropdown in the header. The preference is persisted to localStorage.

To add a new language, create `src/i18n/locales/<code>.json` using `en.json` as a template, register it in `src/i18n/index.ts`, and add the option to `src/components/LanguageSwitcher.tsx`.

## Commands

Install dependencies:

```bash
pnpm install
```

Run locally:

```bash
pnpm dev
```

Run tests:

```bash
pnpm test
```

Run tests in watch mode:

```bash
pnpm test:watch
```

Run E2E tests (requires a production build):

```bash
pnpm build && pnpm test:e2e
```

Run linting:

```bash
pnpm lint
```

Format the project:

```bash
pnpm format
```

Create a production build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Netlify deployment

This project is ready for a standard Vite SPA deployment on Netlify.

- Build command: `pnpm build`
- Publish directory: `dist`
- Redirect handling is included in [`netlify.toml`](./netlify.toml)

Typical Netlify flow:

1. Push this project to a Git provider.
2. Create a new Netlify site from that repository.
3. Set the build command to `pnpm build`.
4. Set the publish directory to `dist`.
5. Deploy.

## Architecture

A short architecture overview lives in [`docs/architecture.md`](./docs/architecture.md).

Highlights:

- `src/data/sections.ts` defines topics in a compact section-based format (source of truth)
- `src/data/topics.ts` holds pull requests, PR↔topic mappings, and the `buildTopics` function
- `src/lib/search-index.ts` implements a trigram inverted index for fast substring matching
- `src/lib/search-worker.ts` offloads search to a Web Worker
- `src/lib/autocomplete.ts` provides inline ghost-text suggestions via sorted dictionary + binary search
- `src/lib/logger.ts` provides structured logging with consola and a debug mode toggle
- `src/lib/search.ts` contains pure search logic (fallback and testing)
- `src/lib/coverage.ts` computes coverage stats for the dashboard charts
- `src/lib/use-debounced-value.ts` keeps typing responsive while delaying applied search updates
- `src/pages/SearchPage.tsx` renders the topic search and results table at `/`
- `src/pages/DashboardPage.tsx` renders the coverage analytics dashboard at `/dashboard` (lazy-loaded)
- `src/components` handles focused rendering concerns
- `src/components/charts` contains Recharts visualizations for the dashboard

Each topic carries tags for its category (e.g. Language), technology (e.g. JavaScript), seniority level (Trainee / Junior / Middle / Senior), and an optional Key marker — all searchable.

## Testing approach

The test suite is intentionally split by responsibility:

- `src/test/search.test.ts`: search correctness and matching rules
- `src/test/highlight.test.ts`: highlight segmentation and edge cases
- `src/test/url-state.test.ts`: query-string parsing and URL update behavior
- `src/test/use-debounced-value.test.tsx`: debounce timing and immediate flush behavior
- `src/test/search-index.test.ts`: trigram index construction, search, and parity with linear search
- `src/test/autocomplete.test.ts`: dictionary building and prefix suggestion logic
- `src/test/App.test.tsx`: screen-level integration such as URL hydration, debounced results, clear behavior, focus management, empty-state rendering, autocomplete, and debug toggle
- `e2e/`: Playwright E2E tests covering search, saved searches, dashboard, and i18n

This keeps pure logic tests focused and fast while reserving the app-level tests
for behavior that only matters when the pieces are wired together. E2E tests
validate full user workflows in a real browser.
