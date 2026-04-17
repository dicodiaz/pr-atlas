import { useCallback, useState } from 'react'

import type { AvatarSettings } from '@/lib/avatar-state'
import { storage } from '@/lib/storage'

const STORAGE_KEY = 'pr-atlas:avatar'
const ORIGINAL_KEY = 'pr-atlas:avatar-original'
const SETTINGS_KEY = 'pr-atlas:avatar-settings'

export const useAvatar = () => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(() =>
    storage.get<string | null>(STORAGE_KEY, null),
  )

  const avatarOriginal = storage.get<string | null>(ORIGINAL_KEY, null)
  const savedSettings = storage.get<AvatarSettings | null>(SETTINGS_KEY, null)

  const saveAvatar = useCallback(
    (rendered: string, original: string, settings: AvatarSettings) => {
      storage.set(STORAGE_KEY, rendered)
      storage.set(ORIGINAL_KEY, original)
      storage.set(SETTINGS_KEY, settings)
      setAvatarUrl(rendered)
    },
    [],
  )

  const clearAvatar = useCallback(() => {
    storage.remove(STORAGE_KEY)
    storage.remove(ORIGINAL_KEY)
    storage.remove(SETTINGS_KEY)
    setAvatarUrl(null)
  }, [])

  return {
    avatarUrl,
    avatarOriginal,
    savedSettings,
    saveAvatar,
    clearAvatar,
  } as const
}
