import { createConsola } from 'consola/browser'

import { storage } from '@/lib/storage'

const DEBUG_KEY = 'pr-atlas:debug'

export const logger = createConsola({
  level: storage.get<boolean>(DEBUG_KEY, false) ? 4 : 1,
  formatOptions: { date: true },
}).withTag('pr-atlas')

export const toggleDebug = (): boolean => {
  const next = !storage.get<boolean>(DEBUG_KEY, false)
  storage.set(DEBUG_KEY, next)
  logger.level = next ? 4 : 1
  return next
}

export const isDebugEnabled = (): boolean =>
  storage.get<boolean>(DEBUG_KEY, false)
