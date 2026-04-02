export type WorkerRequest = { type: 'search'; query: string; id: number }

export type WorkerResponse =
  | { type: 'ready' }
  | { type: 'results'; topicIds: string[]; id: number }
