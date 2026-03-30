interface HighlightSegment {
  text: string
  isMatch: boolean
}

const escapeRegExp = (value: string): string =>
  value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

export const getHighlightSegments = (
  text: string,
  query: string,
): HighlightSegment[] => {
  const tokens = query
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((token) => token.toLowerCase())
    .sort((left, right) => right.length - left.length)

  if (tokens.length === 0) {
    return [{ text, isMatch: false }]
  }

  const matcher = new RegExp(`(${tokens.map(escapeRegExp).join('|')})`, 'gi')
  const parts = text.split(matcher).filter(Boolean)

  if (parts.length === 0) {
    return [{ text, isMatch: false }]
  }

  return parts.map((part) => ({
    text: part,
    isMatch: tokens.includes(part.toLowerCase()),
  }))
}
