import { buildTopics, resolvePullRequests, topics } from '@/data/topics'
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

  it('throws when a topic references a missing PR id', () => {
    expect(() =>
      resolvePullRequests(
        {
          known: {
            id: 'known',
            title: 'Known PR',
            url: 'https://github.com/example/repo/pull/1',
          },
        },
        'missing',
      ),
    ).toThrow('Missing pull request seed for id "missing"')
  })

  it('builds topics from seed data and a shared PR catalog', () => {
    const builtTopics = buildTopics(
      [
        {
          id: 'demo-topic',
          name: 'Demo Topic',
          tags: ['demo'],
          prExampleIds: ['shared-pr'],
        },
      ],
      {
        'shared-pr': {
          id: 'shared-pr',
          title: 'Shared PR',
          url: 'https://github.com/example/repo/pull/2',
        },
      },
    )

    expect(builtTopics).toEqual([
      {
        id: 'demo-topic',
        name: 'Demo Topic',
        tags: ['demo'],
        prExamples: [
          {
            id: 'shared-pr',
            title: 'Shared PR',
            url: 'https://github.com/example/repo/pull/2',
          },
        ],
      },
    ])
  })

  it('includes a topic when it matches multiple search tokens', () => {
    const topic = topics.find(
      (t) => t.name === 'Uses language metaprogramming techniques',
    )

    expect(topic).toBeDefined()
    expect(matchesTopic(topic!, 'language metaprogramming')).toBe(true)
  })
})
