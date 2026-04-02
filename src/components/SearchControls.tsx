import { type FC, type KeyboardEvent, type RefObject, useId } from 'react'
import { useTranslation } from 'react-i18next'

import { GhostInput } from '@/components/GhostInput'

interface SearchControlsProps {
  dictionary: string[]
  inputRef?: RefObject<HTMLInputElement | null>
  isSaveDisabled: boolean
  onClear: () => void
  onQueryChange: (value: string) => void
  onSave: () => void
  query: string
}

export const SearchControls: FC<SearchControlsProps> = ({
  dictionary,
  inputRef,
  isSaveDisabled,
  onClear,
  onQueryChange,
  onSave,
  query,
}) => {
  const { t } = useTranslation()
  const searchId = useId()

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape' && query.length > 0) {
      event.preventDefault()
      onClear()
    }
  }

  return (
    <div className="fade-up flex flex-col gap-3 lg:flex-row lg:items-center">
      <div className="flex-1">
        <label
          className="text-secondary mb-2 block text-sm font-medium"
          htmlFor={searchId}
        >
          {t('search.label')}
        </label>
        <div className="border-strong flex rounded-2xl border bg-(--color-panel) shadow-(--shadow-row)">
          <GhostInput
            inputRef={inputRef}
            id={searchId}
            value={query}
            onChange={onQueryChange}
            onKeyDown={handleKeyDown}
            placeholder={t('search.placeholder')}
            dictionary={dictionary}
          />
        </div>
      </div>
      <div className="flex shrink-0 gap-2 lg:self-end">
        <button
          type="button"
          onClick={onSave}
          disabled={isSaveDisabled}
          className="text-secondary border-strong focus-ring-page hover:text-primary w-full rounded-2xl border bg-transparent px-4 py-4 text-sm font-medium transition hover:border-(--color-accent) disabled:cursor-not-allowed disabled:opacity-45 lg:w-auto"
        >
          {t('search.save')}
        </button>
        <button
          type="button"
          onClick={onClear}
          disabled={query.length === 0}
          className="text-secondary border-strong focus-ring-page hover:text-primary w-full rounded-2xl border bg-transparent px-4 py-4 text-sm font-medium transition hover:border-(--color-accent) disabled:cursor-not-allowed disabled:opacity-45 lg:w-auto"
        >
          {t('search.clear')}
        </button>
      </div>
    </div>
  )
}
