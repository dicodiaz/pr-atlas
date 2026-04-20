import { Fragment, type FC } from 'react'

import { getHighlightSegments } from '@/lib/highlight'

interface HighlightTextProps {
  query: string
  text: string
}

export const HighlightText: FC<HighlightTextProps> = ({ query, text }) => {
  const segments = getHighlightSegments(text, query)

  return (
    <>
      {segments.map((segment, index) => (
        <Fragment key={`${segment.text}-${String(index)}`}>
          {segment.isMatch ? (
            <mark className="text-accent rounded-sm bg-(--color-hover) px-1 py-0.5">
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
