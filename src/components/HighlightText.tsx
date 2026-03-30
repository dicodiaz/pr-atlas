import { Fragment } from 'react'

import { getHighlightSegments } from '../lib/highlight'

interface HighlightTextProps {
  query: string
  text: string
}

export function HighlightText({ query, text }: HighlightTextProps) {
  const segments = getHighlightSegments(text, query)

  return (
    <>
      {segments.map((segment, index) => (
        <Fragment key={`${segment.text}-${index}`}>
          {segment.isMatch ? (
            <mark className="rounded-sm bg-[var(--color-hover)] px-1 py-0.5 text-[var(--color-accent-strong)]">
              {segment.text}
            </mark>
          ) : (
            segment.text
          )}
        </Fragment>
      ))}
    </>
  )
}
