import { topics } from '@/data/topics'
import { getHighlightSegments } from '@/lib/highlight'
import { matchesTopic, normalizeText, searchTopics } from '@/lib/search'

describe('search utilities', () => {
  it('normalizes casing and whitespace', () => {
    expect(normalizeText('  Bundle   BUDGET  ')).toBe('bundle budget')
  })

  it('returns all topics for an empty query', () => {
    expect(searchTopics(topics, '')).toHaveLength(topics.length)
  })

  it('matches by topic name', () => {
    const results = searchTopics(topics, 'metaprogramming')

    expect(results.map((topic) => topic.name)).toContain(
      'Uses language metaprogramming techniques',
    )
  })

  it('matches by tag', () => {
    const results = searchTopics(topics, 'JavaScript')

    expect(results.length).toBeGreaterThan(0)
    expect(results.every((topic) => topic.tags.includes('JavaScript'))).toBe(
      true,
    )
  })

  it('matches by level tag', () => {
    const results = searchTopics(topics, 'Trainee')

    expect(results.length).toBeGreaterThan(0)
    expect(results.every((topic) => topic.tags.includes('Trainee'))).toBe(true)
  })

  it('matches by PR title', () => {
    const results = searchTopics(topics, 'debounced search')

    expect(results.length).toBeGreaterThan(0)
  })

  it('is case-insensitive and whitespace-tolerant', () => {
    const results = searchTopics(topics, '   VERSION     CONTROL ')

    expect(results.map((topic) => topic.name)).toEqual(
      expect.arrayContaining([
        'Uses version control tools for development',
        'Distributes work using version control tools',
        'Configures contribution workflow using version control tools',
      ]),
    )
  })

  it('returns a safe non-match segment for empty highlight input', () => {
    expect(getHighlightSegments('', 'api')).toEqual([
      { text: '', isMatch: false },
    ])
  })

  it('includes a topic when it matches multiple search tokens', () => {
    const topic = topics.find(
      (t) => t.name === 'Uses language metaprogramming techniques',
    )

    expect(topic).toBeDefined()
    expect(matchesTopic(topic!, 'language metaprogramming')).toBe(true)
  })

  it('matches by PR feature name', () => {
    const results = searchTopics(topics, 'saved searches')
    const coveredIds = results.flatMap((t) =>
      t.prs.filter((pr) => pr.feature === 'Saved searches').map(() => t.id),
    )

    expect(coveredIds.length).toBeGreaterThan(0)
  })
})
