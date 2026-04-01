import { useCallback, useState } from 'react'

import { storage } from '@/lib/storage'

const STORAGE_KEY = 'pr-atlas:saved-searches'
const MAX_SAVED = 20

export const useSavedSearches = () => {
  const [searches, setSearches] = useState<string[]>(() =>
    storage.get<string[]>(STORAGE_KEY, []),
  )

  const persist = (next: string[]) => {
    setSearches(next)
    storage.set(STORAGE_KEY, next)
  }

  const save = useCallback(
    (query: string) => {
      const trimmed = query.trim()

      if (trimmed.length === 0) {
        return
      }

      const isDuplicate = searches.some(
        (s) => s.toLowerCase() === trimmed.toLowerCase(),
      )

      if (isDuplicate) {
        return
      }

      persist([trimmed, ...searches].slice(0, MAX_SAVED))
    },
    [searches],
  )

  const remove = useCallback(
    (query: string) => {
      persist(searches.filter((s) => s !== query))
    },
    [searches],
  )

  return { searches, save, remove } as const
}
