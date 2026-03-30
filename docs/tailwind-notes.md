# Tailwind Notes

These are the Tailwind-specific conventions used in this project to avoid the
IDE warnings we saw while editing the SPA.

## Prefer token syntax over arbitrary `var(...)` syntax

When a class is just referencing a CSS custom property, prefer Tailwind's
token-style shorthand instead of the arbitrary value form.

Examples:

- `text-[var(--color-text-primary)]` -> `text-(--color-text-primary)`
- `border-[var(--color-border)]` -> `border-(--color-border)`
- `bg-[var(--color-hover)]` -> `bg-(--color-hover)`
- `shadow-[var(--shadow-row)]` -> `shadow-(--shadow-row)`
- `focus-visible:ring-[var(--color-focus)]` -> `focus-visible:ring-(--color-focus)`

This keeps the classes cleaner and matches the IDE's preferred Tailwind 4
syntax for CSS variable-backed values.

## Prefer built-in scale utilities over arbitrary values

If Tailwind already has an equivalent utility on the configured scale, prefer
that over bracket syntax.

Examples:

- `rounded-[32px]` -> `rounded-4xl`
- `max-w-[1320px]` -> `max-w-330`

Use arbitrary values only when there is no meaningful built-in utility or
project scale token available.

## Keep Prettier responsible for class order

Class ordering is handled by `prettier-plugin-tailwindcss`.

Use:

- `pnpm format`
- `pnpm format:check`

## Custom CSS classes are intentional

Project-specific classes defined in [`src/index.css`](../src/index.css) such as
`panel-surface`, `fade-up`, and `data-row` are valid and should not be replaced
just to satisfy a Tailwind-only style preference.

## Native search input chrome is intentionally overridden

The search field uses `type="search"` for semantics, but the browser-provided
search decorations are hidden on purpose so the UI stays visually consistent.

The `search-input` class in [`src/index.css`](../src/index.css):

- removes the native `x` clear control
- removes browser-specific search decorations
- keeps the field styled entirely by the app's own design language

If you restyle the search bar later, preserve that override unless you
explicitly want the browser-native search affordances back.
