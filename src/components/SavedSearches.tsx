import type { FC } from 'react'

interface SavedSearchesProps {
  searches: string[]
  onApply: (query: string) => void
  onRemove: (query: string) => void
}

export const SavedSearches: FC<SavedSearchesProps> = ({
  searches,
  onApply,
  onRemove,
}) => {
  if (searches.length === 0) {
    return null
  }

  return (
    <div aria-label="Saved searches" role="region" className="flex flex-wrap gap-2">
      {searches.map((query) => (
        <span
          key={query}
          className="border-default inline-flex items-center gap-1 rounded-full border bg-(--color-surface-strong) py-1 pr-1 pl-3 text-sm"
        >
          <button
            type="button"
            onClick={() => onApply(query)}
            aria-label={`Apply saved search: ${query}`}
            className="text-secondary hover:text-primary focus-ring cursor-pointer rounded-sm transition"
          >
            {query}
          </button>
          <button
            type="button"
            onClick={() => onRemove(query)}
            aria-label={`Remove saved search: ${query}`}
            className="text-muted hover:text-primary focus-ring cursor-pointer rounded-full p-0.5 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
            </svg>
          </button>
        </span>
      ))}
    </div>
  )
}
