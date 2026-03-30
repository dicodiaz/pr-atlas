import { type FormEvent, type KeyboardEvent, useId } from 'react'

interface SearchControlsProps {
  onClear: () => void
  onQueryChange: (value: string) => void
  onSearch: () => void
  query: string
}

export function SearchControls({
  onClear,
  onQueryChange,
  onSearch,
  query,
}: SearchControlsProps) {
  const searchId = useId()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape' && query.length > 0) {
      event.preventDefault()
      onClear()
    }
  }

  return (
    <form
      className="fade-up flex flex-col gap-3 lg:flex-row lg:items-center"
      onSubmit={handleSubmit}
    >
      <div className="flex-1">
        <label
          className="mb-2 block text-sm font-medium text-(--color-text-secondary)"
          htmlFor={searchId}
        >
          Search by topic, keyword, or PR title
        </label>
        <div className="flex rounded-2xl border border-(--color-border-strong) bg-(--color-panel) shadow-(--shadow-row)">
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Try: circuit breaker, observability, or bundle budget"
            className="min-w-0 flex-1 rounded-l-2xl border-0 bg-transparent px-5 py-4 text-base text-(--color-text-primary) outline-none placeholder:text-(--color-text-muted)"
          />
          <button
            type="submit"
            className="rounded-r-2xl border-l border-(--color-border) px-5 py-4 text-sm font-semibold tracking-[0.04em] text-(--color-text-primary) transition hover:bg-(--color-hover) focus-visible:ring-2 focus-visible:ring-(--color-focus) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-panel) focus-visible:outline-none"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex shrink-0 items-end">
        <button
          type="button"
          onClick={onClear}
          disabled={query.length === 0}
          className="w-full rounded-2xl border border-(--color-border-strong) bg-transparent px-4 py-3 text-sm font-medium text-(--color-text-secondary) transition hover:border-(--color-accent) hover:text-(--color-text-primary) focus-visible:ring-2 focus-visible:ring-(--color-focus) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-bg) focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-45 lg:w-auto"
        >
          Clear search
        </button>
      </div>
    </form>
  )
}
