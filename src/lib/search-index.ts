import type { ParentFeature, Topic } from '@/types/topics'

import { normalizeText, tokenizeQuery } from '@/lib/search'

const extractTrigrams = (text: string): Set<string> => {
  const trigrams = new Set<string>()
  for (let i = 0; i <= text.length - 3; i++) {
    trigrams.add(text.slice(i, i + 3))
  }
  return trigrams
}

const buildSearchIndex = (topic: Topic): string =>
  normalizeText(
    [
      topic.name,
      ...topic.tags,
      ...topic.prs.map((pr) => pr.title),
      ...topic.prs.map((pr) => pr.contribution),
      ...topic.prs.map((pr) => pr.repoName),
      ...topic.prs
        .filter((pr) => pr.parentFeature !== undefined)
        .map((pr) => pr.parentFeature as ParentFeature),
    ].join(' '),
  )

export class TrigramIndex {
  private readonly index = new Map<string, Set<number>>()
  private readonly topics: Topic[]
  private readonly searchTexts: string[]

  constructor(topics: Topic[]) {
    this.topics = topics
    this.searchTexts = topics.map(buildSearchIndex)

    for (let i = 0; i < this.searchTexts.length; i++) {
      const text = this.searchTexts[i]
      if (!text) continue
      for (const trigram of extractTrigrams(text)) {
        let set = this.index.get(trigram)
        if (!set) {
          set = new Set()
          this.index.set(trigram, set)
        }
        set.add(i)
      }
    }
  }

  search(query: string): Topic[] {
    const tokens = tokenizeQuery(query)
    if (tokens.length === 0) return this.topics

    let candidates: Set<number> | null = null

    for (const token of tokens) {
      const trigrams = extractTrigrams(token)

      if (trigrams.size === 0) {
        // Token shorter than 3 chars -- fall back to linear scan for this token
        const matching = new Set<number>()
        for (let i = 0; i < this.searchTexts.length; i++) {
          const text = this.searchTexts[i]
          if (text && text.includes(token)) matching.add(i)
        }
        candidates =
          candidates === null ? matching : intersect(candidates, matching)
      } else {
        let trigramCandidates: Set<number> | null = null
        for (const trigram of trigrams) {
          const posting = this.index.get(trigram)
          if (!posting) return []
          trigramCandidates =
            trigramCandidates === null
              ? new Set(posting)
              : intersect(trigramCandidates, posting)
          if (trigramCandidates.size === 0) return []
        }
        if (trigramCandidates === null) return []
        candidates =
          candidates === null
            ? trigramCandidates
            : intersect(candidates, trigramCandidates)
      }

      if (candidates.size === 0) return []
    }

    if (candidates === null) return []

    // Verify full substring match to eliminate trigram false positives
    const results: Topic[] = []
    for (const idx of candidates) {
      const text = this.searchTexts[idx]
      if (!text) continue
      if (tokens.every((token) => text.includes(token))) {
        const topic = this.topics[idx]
        if (topic) results.push(topic)
      }
    }
    return results
  }
}

const intersect = (a: Set<number>, b: Set<number>): Set<number> => {
  const result = new Set<number>()
  const [smaller, larger] = a.size <= b.size ? [a, b] : [b, a]
  for (const v of smaller) {
    if (larger.has(v)) result.add(v)
  }
  return result
}
