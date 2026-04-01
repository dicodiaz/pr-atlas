import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { HighlightText } from '@/components/HighlightText'
import type { Topic } from '@/types/topics'

interface TopicTableProps {
  query: string
  topics: Topic[]
}

const TopicTableComponent: FC<TopicTableProps> = ({ query, topics }) => {
  const { t } = useTranslation()

  return (
    <div className="border-default fade-up overflow-hidden rounded-3xl border bg-[rgba(8,14,24,0.84)] shadow-(--shadow-panel)">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left">
          <thead>
            <tr className="border-default border-b bg-[rgba(18,28,44,0.9)]">
              <th
                scope="col"
                className="text-secondary px-6 py-4 text-xs font-semibold tracking-[0.18em] uppercase"
              >
                {t('table.topic')}
              </th>
              <th
                scope="col"
                className="text-secondary px-6 py-4 text-xs font-semibold tracking-[0.18em] uppercase"
              >
                {t('table.prExamples')}
              </th>
            </tr>
          </thead>
          <tbody>
            {topics.map((topic) => (
              <tr
                key={topic.id}
                className="border-default data-row border-b last:border-b-0"
              >
                <th scope="row" className="px-6 py-5 align-top">
                  <div className="max-w-sm">
                    <p className="text-primary font-display text-lg font-semibold">
                      <HighlightText query={query} text={topic.name} />
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {topic.tags.map((tag) => (
                        <li key={tag}>
                          <span className="text-secondary border-default inline-flex rounded-full border bg-[rgba(17,28,44,0.8)] px-2.5 py-1 text-xs">
                            <HighlightText query={query} text={tag} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </th>
                <td className="px-6 py-5">
                  <ul className="space-y-3">
                    {topic.prs.map((pr) => (
                      <li key={pr.id}>
                        <a
                          href={pr.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-secondary focus-ring interactive-soft group hover:text-primary inline-flex items-start gap-2 rounded-xl px-3 py-2 text-sm leading-6"
                          aria-label={t('table.opensNewTab', {
                            title: pr.title,
                          })}
                        >
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-(--color-accent) transition group-hover:bg-(--color-accent-strong)" />
                          <span>
                            <HighlightText query={query} text={pr.title} />
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

export const TopicTable = memo(TopicTableComponent)
