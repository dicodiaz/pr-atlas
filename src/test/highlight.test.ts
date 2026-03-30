import { getHighlightSegments } from '@/lib/highlight'

describe('getHighlightSegments', () => {
  it('returns the full text as a non-match when the query is empty', () => {
    expect(getHighlightSegments('Request tracing', '   ')).toEqual([
      { text: 'Request tracing', isMatch: false },
    ])
  })

  it('returns the full text as a non-match when no query token matches', () => {
    expect(getHighlightSegments('Request tracing', 'bundle budget')).toEqual([
      { text: 'Request tracing', isMatch: false },
    ])
  })

  it('highlights matches case-insensitively and escapes regex characters', () => {
    expect(getHighlightSegments('C++ gateway hardening', 'c++ gateway')).toEqual(
      [
        { text: 'C++', isMatch: true },
        { text: ' ', isMatch: false },
        { text: 'gateway', isMatch: true },
        { text: ' hardening', isMatch: false },
      ],
    )
  })
})
