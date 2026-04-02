import type { Topic } from '@/types/topics'

export interface CategoryCoverage {
  category: string
  covered: number
  total: number
  percent: number
}

export interface LevelCoverage {
  level: string
  covered: number
  total: number
  keyCovered: number
  keyTotal: number
  percent: number
}

export interface ThresholdProgress {
  label: string
  level: string
  kind: 'key' | 'total'
  current: number
  required: number
  total: number
  percent: number
  met: boolean
}

const THRESHOLDS: {
  level: string
  keyPercent: number
  totalPercent: number
}[] = [
  { level: 'Trainee', keyPercent: 100, totalPercent: 80 },
  { level: 'Junior', keyPercent: 100, totalPercent: 80 },
  { level: 'Middle', keyPercent: 100, totalPercent: 80 },
  { level: 'Senior', keyPercent: 0, totalPercent: 50 },
]

const LEVEL_ORDER = ['Trainee', 'Junior', 'Middle', 'Senior']

const isCovered = (topic: Topic): boolean => topic.prs.length > 0

const getCategory = (topic: Topic): string => topic.tags[0] ?? 'Unknown'

const getLevel = (topic: Topic): string =>
  topic.tags.find((tag) => LEVEL_ORDER.includes(tag)) ?? 'Unknown'

const isKey = (topic: Topic): boolean => topic.tags.includes('Key')

export const computeCategoryStats = (topics: Topic[]): CategoryCoverage[] => {
  const groups = new Map<string, { covered: number; total: number }>()

  for (const topic of topics) {
    const cat = getCategory(topic)
    const entry = groups.get(cat) ?? { covered: 0, total: 0 }
    entry.total++
    if (isCovered(topic)) entry.covered++
    groups.set(cat, entry)
  }

  return Array.from(groups, ([category, { covered, total }]) => ({
    category,
    covered,
    total,
    percent: Math.round((covered / total) * 100),
  }))
}

export const computeLevelStats = (topics: Topic[]): LevelCoverage[] => {
  const groups = new Map<
    string,
    { covered: number; total: number; keyCovered: number; keyTotal: number }
  >()

  for (const topic of topics) {
    const level = getLevel(topic)
    const entry = groups.get(level) ?? {
      covered: 0,
      total: 0,
      keyCovered: 0,
      keyTotal: 0,
    }
    entry.total++
    if (isCovered(topic)) entry.covered++
    if (isKey(topic)) {
      entry.keyTotal++
      if (isCovered(topic)) entry.keyCovered++
    }
    groups.set(level, entry)
  }

  return LEVEL_ORDER.filter((l) => groups.has(l)).map((level) => {
    const { covered, total, keyCovered, keyTotal } = groups.get(level)!
    return {
      level,
      covered,
      total,
      keyCovered,
      keyTotal,
      percent: Math.round((covered / total) * 100),
    }
  })
}

export const computeThresholds = (topics: Topic[]): ThresholdProgress[] => {
  const levels = computeLevelStats(topics)
  const results: ThresholdProgress[] = []

  for (const threshold of THRESHOLDS) {
    const stats = levels.find((l) => l.level === threshold.level)
    if (!stats) continue

    if (threshold.keyPercent > 0) {
      const required = Math.ceil((threshold.keyPercent / 100) * stats.keyTotal)
      results.push({
        label: `${stats.level} KEY`,
        level: stats.level,
        kind: 'key',
        current: stats.keyCovered,
        required,
        total: stats.keyTotal,
        percent:
          stats.keyTotal > 0
            ? Math.round((stats.keyCovered / stats.keyTotal) * 100)
            : 0,
        met: stats.keyCovered >= required,
      })
    }

    const required = Math.ceil((threshold.totalPercent / 100) * stats.total)
    results.push({
      label: `${stats.level} total`,
      level: stats.level,
      kind: 'total',
      current: stats.covered,
      required,
      total: stats.total,
      percent: Math.round((stats.covered / stats.total) * 100),
      met: stats.covered >= required,
    })
  }

  return results
}
