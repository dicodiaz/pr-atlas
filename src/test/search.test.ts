import { topics } from '../data/topics'
import { matchesTopic, normalizeText, searchTopics } from '../lib/search'

describe('search utilities', () => {
  it('normalizes casing and whitespace', () => {
    expect(normalizeText('  Bundle   BUDGET  ')).toBe('bundle budget')
  })

  it('returns all topics for an empty query', () => {
    expect(searchTopics(topics, '')).toHaveLength(topics.length)
  })

  it('matches by topic name', () => {
    const results = searchTopics(topics, 'Observability')

    expect(results.map((topic) => topic.name)).toContain('Observability')
  })

  it('matches by tag', () => {
    const results = searchTopics(topics, 'screen reader')

    expect(results.map((topic) => topic.name)).toContain('Accessibility')
  })

  it('matches by PR title', () => {
    const results = searchTopics(topics, 'bundle budget checks')

    expect(results.map((topic) => topic.name)).toContain('Client Performance')
  })

  it('includes a topic when only a PR title matches', () => {
    const architectureTopic = topics.find(
      (topic) => topic.name === 'Frontend Architecture',
    )

    expect(architectureTopic).toBeDefined()
    expect(matchesTopic(architectureTopic!, 'shared query primitives')).toBe(
      true,
    )
  })

  it('is case-insensitive and whitespace-tolerant', () => {
    const results = searchTopics(topics, '   REQUEST     Tracing ')

    expect(results.map((topic) => topic.name)).toEqual(
      expect.arrayContaining([
        'Observability',
        'Incident Response',
        'Debugging',
      ]),
    )
  })

  it('returns every topic that shares a PR when searching by that PR title', () => {
    const results = searchTopics(
      topics,
      'Standardize rollback notes and follow-up tasks after production incidents',
    )

    expect(results.map((topic) => topic.name)).toEqual(
      expect.arrayContaining([
        'Incident Response',
        'Observability',
        'Testing',
        'Debugging',
      ]),
    )
  })
})
