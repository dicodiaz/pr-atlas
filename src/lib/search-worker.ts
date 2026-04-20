import { topics } from '@/data/topics'
import { TrigramIndex } from '@/lib/search-index'
import type {
  WorkerRequest,
  WorkerResponse,
} from '@/lib/search-worker-protocol'

const index = new TrigramIndex(topics)

const post = (msg: WorkerResponse) => {
  self.postMessage(msg)
}

self.onmessage = (event: MessageEvent<WorkerRequest>) => {
  const { query, id } = event.data
  const matched = index.search(query)
  post({ type: 'results', topicIds: matched.map((t) => t.id), id })
}

post({ type: 'ready' })
