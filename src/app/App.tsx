import { useDeferredValue, useEffect, useRef, useState } from 'react'

import { EmptyState } from '@/components/EmptyState'
import { SearchControls } from '@/components/SearchControls'
import { TopicTable } from '@/components/TopicTable'
import { topics } from '@/data/topics'
import { searchTopics } from '@/lib/search'
import { getQueryFromUrl, setQueryInUrl } from '@/lib/url-state'

export function App() {
  const [query, setQuery] = useState(getQueryFromUrl)
  const resultsHeadingRef = useRef<HTMLHeadingElement | null>(null)
  const deferredQuery = useDeferredValue(query)
  const results = searchTopics(topics, deferredQuery)

  useEffect(() => {
    const handlePopState = () => {
      setQuery(getQueryFromUrl())
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  useEffect(() => {
    setQueryInUrl(query)
  }, [query])

  const handleSearch = () => {
    resultsHeadingRef.current?.focus()
  }

  const handleClear = () => {
    setQuery('')
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-330 flex-col px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
      <section className="panel-surface fade-up rounded-4xl px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="flex flex-col gap-8">
          <header className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-end">
            <div>
              <p className="text-accent text-sm tracking-[0.2em] uppercase">
                Personal Interview Demo
              </p>
              <h1 className="text-primary font-display mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                PR Atlas for technology topics and GitHub examples
              </h1>
              <p className="text-secondary mt-4 max-w-3xl text-base leading-8 sm:text-lg">
                Search 30+ interview-ready topics and jump straight to the pull
                request stories that back them up. The dataset is local, typed,
                and structured for easy refinement before live demos.
              </p>
            </div>
            <div className="border-default rounded-3xl border bg-[rgba(10,18,30,0.86)] p-5 shadow-(--shadow-row)">
              <p className="text-muted text-xs tracking-[0.18em] uppercase">
                Dataset snapshot
              </p>
              <p className="text-primary font-display mt-3 text-3xl font-semibold">
                {topics.length}
              </p>
              <p className="text-secondary mt-2 text-sm leading-6">
                seeded topics with reusable PR references for interview prep and
                structured walkthroughs.
              </p>
            </div>
          </header>

          <SearchControls
            query={query}
            onQueryChange={setQuery}
            onSearch={handleSearch}
            onClear={handleClear}
          />

          <section aria-labelledby="results-heading" className="space-y-5">
            <div className="border-default flex flex-col gap-2 border-b pb-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2
                  id="results-heading"
                  ref={resultsHeadingRef}
                  tabIndex={-1}
                  className="text-primary font-display text-2xl font-semibold outline-none"
                >
                  Topic results
                </h2>
                <p className="text-secondary mt-2 text-sm leading-6">
                  One row per topic, with linked PR examples stacked inside the
                  same result cell for fast scanning.
                </p>
              </div>
              <p
                aria-live="polite"
                className="text-secondary text-sm font-medium"
              >
                {results.length} {results.length === 1 ? 'topic' : 'topics'}{' '}
                shown
              </p>
            </div>

            {results.length > 0 ? (
              <TopicTable query={deferredQuery} topics={results} />
            ) : (
              <EmptyState query={query.trim()} />
            )}
          </section>
        </div>
      </section>
    </main>
  )
}
