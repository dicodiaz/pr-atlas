import { describe, expect, it } from 'vitest'

import { topics } from '@/data/topics'
import { TopicId, type Topic } from '@/types/topics'
import {
  computeCategoryStats,
  computeLevelStats,
  computeThresholds,
} from '@/lib/coverage'

const makeTopic = (overrides: Partial<Topic> & { tags: string[] }): Topic => ({
  id: TopicId.MANAGES_COLLECTIONS_OF_DATA_USING_LANGUAGE,
  name: 'Test topic',
  prs: [],
  ...overrides,
})

describe('coverage utilities', () => {
  it('computes category stats with correct totals', () => {
    const stats = computeCategoryStats(topics)

    expect(stats.length).toBeGreaterThan(0)

    const totalTopics = stats.reduce((sum, s) => sum + s.total, 0)
    expect(totalTopics).toBe(topics.length)

    for (const stat of stats) {
      expect(stat.covered).toBeLessThanOrEqual(stat.total)
      expect(stat.percent).toBe(Math.round((stat.covered / stat.total) * 100))
    }
  })

  it('includes a Language category', () => {
    const stats = computeCategoryStats(topics)
    const language = stats.find((s) => s.category === 'Language')

    expect(language).toBeDefined()
    expect(language!.total).toBeGreaterThan(0)
  })

  it('computes level stats in order Trainee → Junior → Middle → Senior', () => {
    const stats = computeLevelStats(topics)

    expect(stats.map((s) => s.level)).toEqual([
      'Trainee',
      'Junior',
      'Middle',
      'Senior',
    ])
  })

  it('counts KEY topics per level', () => {
    const stats = computeLevelStats(topics)

    for (const stat of stats) {
      expect(stat.keyTotal).toBeLessThanOrEqual(stat.total)
      expect(stat.keyCovered).toBeLessThanOrEqual(stat.keyTotal)
    }
  })

  it('computes threshold progress entries', () => {
    const thresholds = computeThresholds(topics)

    expect(thresholds.length).toBeGreaterThan(0)

    for (const t of thresholds) {
      expect(t.met).toBe(t.current >= t.required)
      expect(t.kind).toMatch(/^(key|total)$/)
    }
  })

  it('marks a threshold as met when current >= required', () => {
    const thresholds = computeThresholds(topics)
    const metThresholds = thresholds.filter((t) => t.met)

    for (const t of metThresholds) {
      expect(t.current).toBeGreaterThanOrEqual(t.required)
    }
  })

  it('returns empty arrays for an empty topic list', () => {
    expect(computeCategoryStats([])).toEqual([])
    expect(computeLevelStats([])).toEqual([])
    expect(computeThresholds([])).toEqual([])
  })

  it('skips threshold levels with no matching topics', () => {
    const synthetic = [makeTopic({ tags: ['Cat', 'Trainee'] })]
    const thresholds = computeThresholds(synthetic)

    const levels = new Set(thresholds.map((t) => t.level))
    expect(levels.has('Trainee')).toBe(true)
    expect(levels.has('Junior')).toBe(false)
    expect(levels.has('Middle')).toBe(false)
    expect(levels.has('Senior')).toBe(false)
  })

  it('handles a level with zero KEY topics', () => {
    const synthetic = [makeTopic({ tags: ['Cat', 'Trainee'] })]
    const thresholds = computeThresholds(synthetic)

    const keyThreshold = thresholds.find(
      (t) => t.level === 'Trainee' && t.kind === 'key',
    )

    expect(keyThreshold).toBeDefined()
    expect(keyThreshold!.percent).toBe(0)
  })

  it('falls back to Unknown for topics with empty tags', () => {
    const synthetic = [makeTopic({ tags: [] })]

    const catStats = computeCategoryStats(synthetic)
    expect(catStats).toHaveLength(1)
    expect(catStats[0]!.category).toBe('Unknown')

    const levelStats = computeLevelStats(synthetic)
    expect(levelStats).toHaveLength(0)
  })
})
