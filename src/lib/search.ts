import type { Topic } from '@/types/topics'

export const normalizeText = (value: string): string =>
  value.toLowerCase().replace(/\s+/g, ' ').trim()

export const tokenizeQuery = (query: string): string[] =>
  normalizeText(query).split(' ').filter(Boolean)

const getTopicSearchIndex = (topic: Topic): string =>
  normalizeText(
    [
      topic.name,
      ...topic.tags,
      ...topic.prs.map((pr) => pr.title),
      ...topic.prs.map((pr) => pr.contribution),
      ...topic.prs.map((pr) => pr.repoName),
      ...topic.prs
        .filter((pr) => pr.parentFeature)
        .map((pr) => pr.parentFeature!),
    ].join(' '),
  )

export const matchesTopic = (topic: Topic, query: string): boolean => {
  const tokens = tokenizeQuery(query)

  if (tokens.length === 0) {
    return true
  }

  const searchIndex = getTopicSearchIndex(topic)
  return tokens.every((token) => searchIndex.includes(token))
}

export const searchTopics = (topics: Topic[], query: string): Topic[] =>
  topics.filter((topic) => matchesTopic(topic, query))
