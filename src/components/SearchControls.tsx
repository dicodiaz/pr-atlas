import { type FC, type FormEvent, type KeyboardEvent, useId } from 'react'

interface SearchControlsProps {
  onClear: () => void
  onQueryChange: (value: string) => void
  onSearch: () => void
  query: string
}

export const SearchControls: FC<SearchControlsProps> = ({
  onClear,
  onQueryChange,
  onSearch,
  query,
}) => {
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
          className="text-secondary mb-2 block text-sm font-medium"
          htmlFor={searchId}
        >
          Search by topic, keyword, or PR title
        </label>
        <div className="border-strong flex rounded-2xl border bg-(--color-panel) shadow-(--shadow-row)">
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Try: circuit breaker, observability, or bundle budget"
            className="search-input text-primary placeholder:text-muted focus-ring-panel min-w-0 flex-1 rounded-2xl border-0 bg-transparent px-5 py-4 text-base outline-none"
          />
        </div>
      </div>
      <div className="flex shrink-0 lg:self-end">
        <button
          type="button"
          onClick={onClear}
          disabled={query.length === 0}
          className="text-secondary border-strong focus-ring-page hover:text-primary w-full rounded-2xl border bg-transparent px-4 py-4 text-sm font-medium transition hover:border-(--color-accent) disabled:cursor-not-allowed disabled:opacity-45 lg:w-auto"
        >
          Clear search
        </button>
      </div>
    </form>
  )
}
