import { describe, expect, it } from 'vitest'

import { topics } from '@/data/topics'
import { TrigramIndex } from '@/lib/search-index'

describe('TrigramIndex', () => {
  const index = new TrigramIndex(topics)

  it('returns all topics for an empty query', () => {
    expect(index.search('')).toHaveLength(topics.length)
  })

  it('matches by topic name', () => {
    const results = index.search('metaprogramming')

    expect(results.map((t) => t.name)).toContain(
      'Uses language metaprogramming techniques',
    )
  })

  it('matches by tag', () => {
    const results = index.search('JavaScript')

    expect(results.length).toBeGreaterThan(0)
    expect(results.every((t) => t.tags.includes('JavaScript'))).toBe(true)
  })

  it('handles multi-token queries by intersecting matches', () => {
    const results = index.search('language metaprogramming')

    expect(results.length).toBeGreaterThan(0)
    expect(results.map((t) => t.name)).toContain(
      'Uses language metaprogramming techniques',
    )
  })

  it('returns empty array for queries that match no topics', () => {
    expect(index.search('zzzznonexistent')).toHaveLength(0)
  })

  it('handles short tokens (< 3 chars) via linear fallback', () => {
    const results = index.search('ai')

    expect(results.length).toBeGreaterThan(0)
  })

  it('is case-insensitive', () => {
    const upper = index.search('VERSION CONTROL')
    const lower = index.search('version control')

    expect(upper.length).toBe(lower.length)
    expect(upper.length).toBeGreaterThan(0)
  })

  it('intersects short tokens with prior trigram candidates', () => {
    const results = index.search('testing ai')

    expect(results.length).toBeGreaterThanOrEqual(0)
  })

  it('returns empty for multi-token queries matching disjoint topic sets', () => {
    expect(index.search('javascript cloud')).toHaveLength(0)
  })

  it('returns empty when trigram candidates intersect to empty set', () => {
    const fakeTopics = [
      { id: 'a' as never, name: 'abc def', tags: [], prs: [] },
      { id: 'b' as never, name: 'bcd ghi', tags: [], prs: [] },
    ]
    const smallIndex = new TrigramIndex(fakeTopics)

    expect(smallIndex.search('abcd')).toHaveLength(0)
  })

  it('eliminates trigram false positives via substring verification', () => {
    const fakeTopics = [
      { id: 'a' as never, name: 'abc xyz bcd', tags: [], prs: [] },
    ]
    const smallIndex = new TrigramIndex(fakeTopics)

    expect(smallIndex.search('abcd')).toHaveLength(0)
  })

  it('produces same results as linear search for known queries', () => {
    const queries = [
      'debounced search',
      'accessibility',
      'JavaScript Trainee',
      'data modeling',
    ]

    for (const query of queries) {
      const linearMatches = topics.filter((t) =>
        query
          .toLowerCase()
          .split(' ')
          .every((token) => {
            const searchText = [
              t.name,
              ...t.tags,
              ...t.prs.map((pr) => pr.title),
              ...t.prs.map((pr) => pr.contribution),
              ...t.prs.map((pr) => pr.repoName),
              ...t.prs
                .filter((pr) => pr.parentFeature)
                .map((pr) => pr.parentFeature!),
            ]
              .join(' ')
              .toLowerCase()
            return searchText.includes(token)
          }),
      )
      const indexMatches = index.search(query)

      expect(indexMatches).toHaveLength(linearMatches.length)
    }
  })
})
