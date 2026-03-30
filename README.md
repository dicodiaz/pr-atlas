# PR Atlas

PR Atlas is a polished personal React SPA for interview preparation and live demos. It lets you search technology topics and immediately see matching GitHub pull request examples, with support for shared PRs across multiple topics.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Vitest
- React Testing Library
- ESLint
- Prettier

## Local dataset

The local dataset lives in [`src/data/topics.ts`](./src/data/topics.ts).

When you are ready to swap in your real interview examples, update the placeholder PR catalog and topic seed data in that file. The data model already supports shared PRs across multiple topics.

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

- `src/data/topics.ts` keeps authoring grouped by topic while sharing PR definitions
- `src/lib/search.ts` contains pure search logic that matches topic names, tags, and PR titles
- `src/lib/use-debounced-value.ts` keeps typing responsive while delaying applied search updates
- `src/components` handles focused rendering concerns
- the UI renders one row per topic, stacks PR links inside the same table cell, and syncs the applied query to `?q=`

That structure is intentionally simple, interview-friendly, and easy to refine later as your real PR data becomes more detailed.

## Testing approach

The test suite is intentionally split by responsibility:

- `src/test/search.test.ts`: search correctness and matching rules
- `src/test/use-debounced-value.test.tsx`: debounce timing and immediate flush behavior
- `src/test/App.test.tsx`: screen-level integration such as URL hydration, debounced results, focus behavior, clear behavior, and empty-state rendering

This keeps pure logic tests focused and fast while reserving the app-level tests
for behavior that only matters when the pieces are wired together.
