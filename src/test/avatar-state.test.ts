import { describe, expect, it } from 'vitest'

import {
  avatarReducer,
  extractSettings,
  initialState,
  type AvatarEditorState,
} from '@/lib/avatar-state'

describe('avatarReducer', () => {
  it('returns initial state by default', () => {
    expect(initialState.originalDataUrl).toBeNull()
    expect(initialState.cropRect).toBeNull()
    expect(initialState.presets).toEqual({
      grayscale: false,
      sepia: false,
      blur: false,
      invert: false,
    })
    expect(initialState.brightness).toBe(100)
    expect(initialState.contrast).toBe(100)
    expect(initialState.previewDataUrl).toBeNull()
  })

  it('handles SET_ORIGINAL and resets other fields', () => {
    const modified: AvatarEditorState = {
      ...initialState,
      presets: { ...initialState.presets, grayscale: true },
      brightness: 120,
      cropRect: { x: 0, y: 0, width: 50, height: 50 },
    }

    const next = avatarReducer(modified, {
      type: 'SET_ORIGINAL',
      dataUrl: 'data:image/png;base64,abc',
    })

    expect(next).not.toBe(modified)
    expect(next.originalDataUrl).toBe('data:image/png;base64,abc')
    expect(next.cropRect).toBeNull()
    expect(next.presets.grayscale).toBe(false)
    expect(next.brightness).toBe(100)
    expect(next.contrast).toBe(100)
    expect(next.previewDataUrl).toBeNull()
  })

  it('handles RESTORE with saved settings', () => {
    const settings = {
      cropRect: { x: 5, y: 5, width: 90, height: 90 },
      presets: { grayscale: false, sepia: true, blur: false, invert: true },
      brightness: 110,
      contrast: 80,
    }

    const next = avatarReducer(initialState, {
      type: 'RESTORE',
      dataUrl: 'data:image/png;base64,restored',
      settings,
    })

    expect(next).not.toBe(initialState)
    expect(next.originalDataUrl).toBe('data:image/png;base64,restored')
    expect(next.cropRect).toEqual(settings.cropRect)
    expect(next.presets.sepia).toBe(true)
    expect(next.presets.invert).toBe(true)
    expect(next.presets.grayscale).toBe(false)
    expect(next.brightness).toBe(110)
    expect(next.contrast).toBe(80)
    expect(next.previewDataUrl).toBeNull()
  })

  it('handles SET_CROP', () => {
    const rect = { x: 10, y: 20, width: 100, height: 80 }
    const next = avatarReducer(initialState, { type: 'SET_CROP', rect })

    expect(next).not.toBe(initialState)
    expect(next.cropRect).toEqual(rect)
  })

  it('handles TOGGLE_PRESET on', () => {
    const next = avatarReducer(initialState, {
      type: 'TOGGLE_PRESET',
      preset: 'sepia',
    })

    expect(next).not.toBe(initialState)
    expect(next.presets.sepia).toBe(true)
    expect(next.presets.grayscale).toBe(false)
  })

  it('handles TOGGLE_PRESET off', () => {
    const withSepia: AvatarEditorState = {
      ...initialState,
      presets: { ...initialState.presets, sepia: true },
    }

    const next = avatarReducer(withSepia, {
      type: 'TOGGLE_PRESET',
      preset: 'sepia',
    })

    expect(next.presets.sepia).toBe(false)
  })

  it('handles SET_SLIDER for brightness', () => {
    const next = avatarReducer(initialState, {
      type: 'SET_SLIDER',
      key: 'brightness',
      value: 130,
    })

    expect(next).not.toBe(initialState)
    expect(next.brightness).toBe(130)
    expect(next.contrast).toBe(100)
  })

  it('handles SET_SLIDER for contrast', () => {
    const next = avatarReducer(initialState, {
      type: 'SET_SLIDER',
      key: 'contrast',
      value: 70,
    })

    expect(next.contrast).toBe(70)
    expect(next.brightness).toBe(100)
  })

  it('handles SET_PREVIEW', () => {
    const next = avatarReducer(initialState, {
      type: 'SET_PREVIEW',
      dataUrl: 'data:image/png;base64,preview',
    })

    expect(next).not.toBe(initialState)
    expect(next.previewDataUrl).toBe('data:image/png;base64,preview')
  })

  it('handles RESET', () => {
    const modified: AvatarEditorState = {
      originalDataUrl: 'data:image/png;base64,abc',
      cropRect: { x: 0, y: 0, width: 50, height: 50 },
      presets: { grayscale: true, sepia: true, blur: false, invert: false },
      brightness: 120,
      contrast: 80,
      previewDataUrl: 'data:image/png;base64,preview',
    }

    const next = avatarReducer(modified, { type: 'RESET' })
    expect(next).toEqual(initialState)
  })

  it('extractSettings returns a snapshot of filter state', () => {
    const state: AvatarEditorState = {
      originalDataUrl: 'data:image/png;base64,abc',
      cropRect: { x: 10, y: 20, width: 30, height: 40 },
      presets: { grayscale: true, sepia: false, blur: false, invert: true },
      brightness: 130,
      contrast: 70,
      previewDataUrl: 'data:image/png;base64,preview',
    }

    const settings = extractSettings(state)

    expect(settings.cropRect).toEqual(state.cropRect)
    expect(settings.presets).toEqual(state.presets)
    expect(settings.presets).not.toBe(state.presets)
    expect(settings.brightness).toBe(130)
    expect(settings.contrast).toBe(70)
    expect(settings).not.toHaveProperty('originalDataUrl')
    expect(settings).not.toHaveProperty('previewDataUrl')
  })

  it('produces immutable state (new reference on every action)', () => {
    const s1 = avatarReducer(initialState, {
      type: 'SET_SLIDER',
      key: 'brightness',
      value: 110,
    })

    const s2 = avatarReducer(s1, {
      type: 'TOGGLE_PRESET',
      preset: 'blur',
    })

    expect(s1).not.toBe(s2)
    expect(s1.brightness).toBe(110)
    expect(s2.brightness).toBe(110)
    expect(s1.presets.blur).toBe(false)
    expect(s2.presets.blur).toBe(true)
  })
})
