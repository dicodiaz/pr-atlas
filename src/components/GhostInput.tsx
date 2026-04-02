import {
  type FC,
  type KeyboardEvent,
  type RefObject,
  useId,
  useMemo,
} from 'react'
import { useTranslation } from 'react-i18next'

import { getSuggestion } from '@/lib/autocomplete'
import { logger } from '@/lib/logger'

interface GhostInputProps {
  dictionary: string[]
  id?: string
  inputRef?: RefObject<HTMLInputElement | null> | undefined
  onChange: (value: string) => void
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
  placeholder?: string
  value: string
}

export const GhostInput: FC<GhostInputProps> = ({
  dictionary,
  id,
  inputRef,
  onChange,
  onKeyDown,
  placeholder,
  value,
}) => {
  const { t } = useTranslation()
  const suggestionId = useId()

  const suggestion = useMemo(
    () => getSuggestion(value, dictionary),
    [value, dictionary],
  )

  const acceptSuggestion = () => {
    if (!suggestion) return
    logger.debug(`Autocomplete accepted: "${suggestion}"`)
    onChange(suggestion)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (suggestion) {
      if (event.key === 'Tab') {
        event.preventDefault()
        acceptSuggestion()
        return
      }

      const input = event.currentTarget
      if (event.key === 'ArrowRight' && input.selectionStart === value.length) {
        event.preventDefault()
        acceptSuggestion()
        return
      }
    }

    onKeyDown?.(event)
  }

  return (
    <div className="relative w-full">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center overflow-hidden text-nowrap px-5 py-4 text-base"
      >
        <span className="invisible">{value}</span>
        {suggestion && (
          <span className="text-muted truncate opacity-50">
            {suggestion.slice(value.length)}
          </span>
        )}
      </div>

      <input
        ref={inputRef}
        id={id}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        aria-describedby={suggestion ? suggestionId : undefined}
        className="search-input text-primary placeholder:text-muted focus-ring-panel relative z-10 w-full min-w-0 rounded-2xl border-0 bg-transparent px-5 py-4 text-base outline-none"
      />

      {suggestion && (
        <span id={suggestionId} className="sr-only">
          {t('search.acceptSuggestion', { suggestion })}
        </span>
      )}
    </div>
  )
}
