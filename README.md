# PR Atlas

PR Atlas is a polished personal React SPA for interview preparation and live demos. It lets you search 180+ front-end engineering competency topics across 12 categories and four seniority levels, and immediately see matching GitHub pull request examples once assigned. Frequently used searches can be saved as persistent chips for quick reuse. A coverage analytics dashboard visualizes progress toward promotion thresholds with interactive charts. The UI is available in English and Spanish.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- react-router
- Recharts
- react-i18next (EN/ES)
- Vitest
- React Testing Library
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
- `src/lib/search.ts` contains pure search logic that matches topic names, tags, and PR titles
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
- `src/test/App.test.tsx`: screen-level integration such as URL hydration, debounced results, clear behavior, focus management, and empty-state rendering

This keeps pure logic tests focused and fast while reserving the app-level tests
for behavior that only matters when the pieces are wired together.

The current testing split also helps preserve strong branch coverage without
stuffing every edge case into the top-level app test file.
