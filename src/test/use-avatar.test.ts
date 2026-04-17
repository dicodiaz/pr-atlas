import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import type { AvatarSettings } from '@/lib/avatar-state'
import { useAvatar } from '@/lib/use-avatar'

const STORAGE_KEY = 'pr-atlas:avatar'
const ORIGINAL_KEY = 'pr-atlas:avatar-original'
const SETTINGS_KEY = 'pr-atlas:avatar-settings'

const defaultSettings: AvatarSettings = {
  cropRect: null,
  presets: { grayscale: false, sepia: false, blur: false, invert: true },
  brightness: 120,
  contrast: 80,
}

describe('useAvatar', () => {
  afterEach(() => {
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(ORIGINAL_KEY)
    localStorage.removeItem(SETTINGS_KEY)
  })

  it('returns null when no avatar is stored', () => {
    const { result } = renderHook(() => useAvatar())
    expect(result.current.avatarUrl).toBeNull()
    expect(result.current.avatarOriginal).toBeNull()
    expect(result.current.savedSettings).toBeNull()
  })

  it('loads an existing avatar from localStorage', () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify('data:image/png;base64,abc'),
    )
    const { result } = renderHook(() => useAvatar())
    expect(result.current.avatarUrl).toBe('data:image/png;base64,abc')
  })

  it('loads an existing original from localStorage', () => {
    localStorage.setItem(
      ORIGINAL_KEY,
      JSON.stringify('data:image/png;base64,orig'),
    )
    const { result } = renderHook(() => useAvatar())
    expect(result.current.avatarOriginal).toBe('data:image/png;base64,orig')
  })

  it('loads saved settings from localStorage', () => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(defaultSettings))
    const { result } = renderHook(() => useAvatar())
    expect(result.current.savedSettings).toEqual(defaultSettings)
  })

  it('saves rendered output, original, and settings to localStorage and updates state', () => {
    const { result } = renderHook(() => useAvatar())

    act(() =>
      result.current.saveAvatar(
        'data:image/png;base64,rendered',
        'data:image/png;base64,original',
        defaultSettings,
      ),
    )

    expect(result.current.avatarUrl).toBe('data:image/png;base64,rendered')
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!)).toBe(
      'data:image/png;base64,rendered',
    )
    expect(JSON.parse(localStorage.getItem(ORIGINAL_KEY)!)).toBe(
      'data:image/png;base64,original',
    )
    expect(JSON.parse(localStorage.getItem(SETTINGS_KEY)!)).toEqual(
      defaultSettings,
    )
  })

  it('clears the avatar, original, and settings from localStorage and resets state', () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify('data:image/png;base64,old'),
    )
    localStorage.setItem(
      ORIGINAL_KEY,
      JSON.stringify('data:image/png;base64,orig'),
    )
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(defaultSettings))
    const { result } = renderHook(() => useAvatar())

    expect(result.current.avatarUrl).toBe('data:image/png;base64,old')

    act(() => result.current.clearAvatar())

    expect(result.current.avatarUrl).toBeNull()
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull()
    expect(localStorage.getItem(ORIGINAL_KEY)).toBeNull()
    expect(localStorage.getItem(SETTINGS_KEY)).toBeNull()
  })
})
