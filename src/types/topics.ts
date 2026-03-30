export interface PullRequestExample {
  id: string
  title: string
  url: string
}

export interface Topic {
  id: string
  name: string
  tags: string[]
  prExamples: PullRequestExample[]
}
