import { useEffect, useRef, useState } from 'react'

import { logger } from '@/lib/logger'
import { searchTopics } from '@/lib/search'
import type { WorkerResponse } from '@/lib/search-worker-protocol'
import type { Topic, TopicId } from '@/types/topics'

const supportsWorker = typeof Worker !== 'undefined'

export const useSearchWorker = (topics: Topic[], query: string): Topic[] => {
  const workerRef = useRef<Worker | null>(null)
  const [isReady, setIsReady] = useState(false)
  const topicIndex = useRef(new Map<TopicId, Topic>())
  const requestId = useRef(0)
  const [results, setResults] = useState(() => searchTopics(topics, query))

  useEffect(() => {
    topicIndex.current = new Map(topics.map((t) => [t.id, t]))
  }, [topics])

  useEffect(() => {
    if (!supportsWorker) return

    const start = performance.now()
    const worker = new Worker(new URL('./search-worker.ts', import.meta.url), {
      type: 'module',
    })

    worker.onmessage = (event: MessageEvent<WorkerResponse>) => {
      const msg = event.data
      if (msg.type === 'ready') {
        logger.debug(
          `Search worker ready in ${(performance.now() - start).toFixed(1)}ms`,
        )
        setIsReady(true)
      } else if (msg.type === 'results') {
        if (msg.id < requestId.current) return
        const resolved = msg.topicIds
          .map((id) => topicIndex.current.get(id as TopicId))
          .filter((t): t is Topic => t !== undefined)
        logger.debug(
          `Worker returned ${resolved.length} results for request #${msg.id}`,
        )
        setResults(resolved)
      }
    }

    workerRef.current = worker
    return () => {
      worker.terminate()
      workerRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!supportsWorker || !isReady || !workerRef.current) {
      setResults(searchTopics(topics, query))
      return
    }
    const id = ++requestId.current
    logger.debug(`Posting search query "${query}" as request #${id}`)
    workerRef.current.postMessage({ type: 'search', query, id })
  }, [query, isReady, topics])

  return results
}
