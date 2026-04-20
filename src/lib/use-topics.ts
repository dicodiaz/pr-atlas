import { useEffect, useState } from 'react'

import type { Topic } from '@/types/topics'

type TopicsState =
  | { status: 'loading' }
  | { status: 'ready'; topics: Topic[] }
  | { status: 'error'; error: unknown }

export function useTopics(): TopicsState {
  const [state, setState] = useState<TopicsState>({ status: 'loading' })

  useEffect(() => {
    let cancelled = false

    import('@/data/topics')
      .then((mod) => {
        if (cancelled) return
        setState({ status: 'ready', topics: mod.topics })
      })
      .catch((error: unknown) => {
        if (cancelled) return
        setState({ status: 'error', error })
      })

    return () => {
      cancelled = true
    }
  }, [])

  return state
}
