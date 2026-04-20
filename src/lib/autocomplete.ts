import type { Topic } from '@/types/topics'
import { normalizeText } from '@/lib/search'

export const buildDictionary = (topics: Topic[]): string[] => {
  const entries = new Set<string>()
  for (const topic of topics) {
    entries.add(normalizeText(topic.name))
    for (const tag of topic.tags) entries.add(normalizeText(tag))
    for (const pr of topic.prs) {
      entries.add(normalizeText(pr.title))
      entries.add(normalizeText(pr.contribution))
      entries.add(normalizeText(pr.repoName))
      if (pr.parentFeature) entries.add(normalizeText(pr.parentFeature))
    }
  }
  return [...entries].filter(Boolean).sort()
}

export const getSuggestion = (
  typed: string,
  dictionary: string[],
): string | null => {
  const normalized = normalizeText(typed)
  if (normalized.length === 0) return null

  let lo = 0
  let hi = dictionary.length
  while (lo < hi) {
    const mid = (lo + hi) >>> 1
    const value = dictionary[mid]
    if (value !== undefined && value < normalized) lo = mid + 1
    else hi = mid
  }

  const candidate = dictionary[lo]
  if (candidate === undefined || !candidate.startsWith(normalized)) return null

  // Preserve the user's original casing for the typed prefix
  return typed + candidate.slice(normalized.length)
}
