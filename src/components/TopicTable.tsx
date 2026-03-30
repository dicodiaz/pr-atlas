import { HighlightText } from '@/components/HighlightText'
import type { Topic } from '@/types/topics'

interface TopicTableProps {
  query: string
  topics: Topic[]
}

export function TopicTable({ query, topics }: TopicTableProps) {
  return (
    <div className="fade-up overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[rgba(8,14,24,0.84)] shadow-[var(--shadow-panel)]">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-[var(--color-border)] bg-[rgba(18,28,44,0.9)]">
              <th
                scope="col"
                className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-secondary)]"
              >
                Topic
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-secondary)]"
              >
                PR Examples
              </th>
            </tr>
          </thead>
          <tbody>
            {topics.map((topic) => (
              <tr
                key={topic.id}
                className="data-row border-b border-[var(--color-border)] last:border-b-0"
              >
                <th scope="row" className="align-top px-6 py-5">
                  <div className="max-w-sm">
                    <p className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
                      <HighlightText query={query} text={topic.name} />
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {topic.tags.map((tag) => (
                        <li key={tag}>
                          <span className="inline-flex rounded-full border border-[var(--color-border)] bg-[rgba(17,28,44,0.8)] px-2.5 py-1 text-xs text-[var(--color-text-secondary)]">
                            <HighlightText query={query} text={tag} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </th>
                <td className="px-6 py-5">
                  <ul className="space-y-3">
                    {topic.prExamples.map((prExample) => (
                      <li key={prExample.id}>
                        <a
                          href={prExample.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="group inline-flex items-start gap-2 rounded-xl px-3 py-2 text-sm leading-6 text-[var(--color-text-secondary)] transition hover:bg-[var(--color-hover)] hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(8,14,24,0.84)]"
                          aria-label={`${prExample.title} (opens in a new tab)`}
                        >
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)] transition group-hover:bg-[var(--color-accent-strong)]" />
                          <span>
                            <HighlightText
                              query={query}
                              text={prExample.title}
                            />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
