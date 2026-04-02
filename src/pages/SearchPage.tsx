import { type FC, useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { EmptyState } from '@/components/EmptyState'
import { SavedSearches } from '@/components/SavedSearches'
import { SearchControls } from '@/components/SearchControls'
import { TopicTable } from '@/components/TopicTable'
import { topics } from '@/data/topics'
import { buildDictionary } from '@/lib/autocomplete'
import { logger } from '@/lib/logger'
import { getQueryFromUrl, setQueryInUrl } from '@/lib/url-state'
import { useDebouncedValue } from '@/lib/use-debounced-value'
import { useSavedSearches } from '@/lib/use-saved-searches'
import { useSearchWorker } from '@/lib/use-search-worker'

const SEARCH_DEBOUNCE_MS = 250
const ANNOUNCE_DELAY_MS = 1000

export const SearchPage: FC = () => {
  const { t } = useTranslation()
  const [inputQuery, setInputQuery] = useState(getQueryFromUrl)
  const [countAnnouncement, setCountAnnouncement] = useState('')
  const searchInputRef = useRef<HTMLInputElement | null>(null)
  const { debouncedValue: activeQuery, flush } = useDebouncedValue(
    inputQuery,
    SEARCH_DEBOUNCE_MS,
  )

  const results = useSearchWorker(topics, activeQuery)

  const dictionary = useMemo(() => buildDictionary(topics), [])

  useEffect(() => {
    logger.debug(`Search: "${activeQuery.trim()}" → ${results.length} results`)
  }, [activeQuery, results.length])

  useEffect(() => {
    const trimmed = activeQuery.trim()

    let text: string
    let delay: number

    if (activeQuery.length === 0) {
      text = t('announce.cleared', { count: topics.length })
      delay = 0
    } else if (trimmed.length === 0) {
      text = t('announce.showingAll', { count: topics.length })
      delay = 0
    } else if (results.length > 0) {
      text = t('announce.results', { count: results.length, query: trimmed })
      delay = ANNOUNCE_DELAY_MS
    } else {
      text = t('announce.noResults', { query: trimmed })
      delay = ANNOUNCE_DELAY_MS
    }

    const id = setTimeout(() => setCountAnnouncement(text), delay)
    return () => clearTimeout(id)
  }, [activeQuery, results.length, t])

  useEffect(() => {
    const handlePopState = () => {
      const nextQuery = getQueryFromUrl()
      setInputQuery(nextQuery)
      flush(nextQuery)
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [flush])

  useEffect(() => {
    setQueryInUrl(activeQuery)
  }, [activeQuery])

  const { searches, save, remove } = useSavedSearches()

  const handleClear = () => {
    setCountAnnouncement('')
    setInputQuery('')
    flush('')
    searchInputRef.current?.focus()
  }

  const handleSave = () => {
    save(inputQuery)
  }

  const handleApplySaved = (query: string) => {
    setInputQuery(query)
    flush(query)
    searchInputRef.current?.focus()
  }

  const isSaveDisabled =
    inputQuery.trim().length === 0 ||
    searches.some((s) => s.toLowerCase() === inputQuery.trim().toLowerCase())

  return (
    <>
      <header className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-end">
        <div>
          <p className="text-accent text-sm tracking-[0.2em] uppercase">
            {t('header.badge')}
          </p>
          <h1 className="text-primary font-display mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            {t('header.title')}
          </h1>
          <p className="text-secondary mt-4 max-w-3xl text-base leading-8 sm:text-lg">
            {t('header.subtitle')}
          </p>
        </div>
        <div className="border-default rounded-3xl border bg-[rgba(10,18,30,0.86)] p-5 shadow-(--shadow-row)">
          <p className="text-muted text-xs tracking-[0.18em] uppercase">
            {t('snapshot.label')}
          </p>
          <p className="text-primary font-display mt-3 text-3xl font-semibold">
            {topics.length}
          </p>
          <p className="text-secondary mt-2 text-sm leading-6">
            {t('snapshot.description')}
          </p>
        </div>
      </header>

      <SearchControls
        dictionary={dictionary}
        inputRef={searchInputRef}
        isSaveDisabled={isSaveDisabled}
        query={inputQuery}
        onClear={handleClear}
        onQueryChange={setInputQuery}
        onSave={handleSave}
      />

      <SavedSearches
        searches={searches}
        onApply={handleApplySaved}
        onRemove={remove}
      />

      <section aria-labelledby="results-heading" className="space-y-5">
        <div className="border-default flex flex-col gap-2 border-b pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="results-heading"
              className="text-primary font-display text-2xl font-semibold outline-none"
            >
              {t('results.heading')}
            </h2>
            <p className="text-secondary mt-2 text-sm leading-6">
              {t('results.description')}
            </p>
          </div>
          <p className="text-secondary text-sm font-medium">
            {t('results.count', { count: results.length })}
          </p>
          <p aria-live="polite" aria-atomic="true" className="sr-only">
            {countAnnouncement}
          </p>
        </div>

        {results.length > 0 ? (
          <TopicTable query={activeQuery} topics={results} />
        ) : (
          <EmptyState query={activeQuery.trim()} />
        )}
      </section>
    </>
  )
}
