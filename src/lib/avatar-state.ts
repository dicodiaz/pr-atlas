import { produce } from 'immer'

import type { CropRect } from '@/lib/avatar'

export interface AvatarEditorState {
  originalDataUrl: string | null
  cropRect: CropRect | null
  presets: {
    grayscale: boolean
    sepia: boolean
    blur: boolean
    invert: boolean
  }
  brightness: number
  contrast: number
  previewDataUrl: string | null
}

export const initialState: AvatarEditorState = {
  originalDataUrl: null,
  cropRect: null,
  presets: { grayscale: false, sepia: false, blur: false, invert: false },
  brightness: 100,
  contrast: 100,
  previewDataUrl: null,
}

export interface AvatarSettings {
  cropRect: CropRect | null
  presets: AvatarEditorState['presets']
  brightness: number
  contrast: number
}

export const extractSettings = (state: AvatarEditorState): AvatarSettings => ({
  cropRect: state.cropRect,
  presets: { ...state.presets },
  brightness: state.brightness,
  contrast: state.contrast,
})

export type AvatarAction =
  | { type: 'SET_ORIGINAL'; dataUrl: string }
  | { type: 'RESTORE'; dataUrl: string; settings: AvatarSettings }
  | { type: 'SET_CROP'; rect: CropRect }
  | { type: 'TOGGLE_PRESET'; preset: keyof AvatarEditorState['presets'] }
  | { type: 'SET_SLIDER'; key: 'brightness' | 'contrast'; value: number }
  | { type: 'SET_PREVIEW'; dataUrl: string }
  | { type: 'RESET' }

export const avatarReducer = produce(
  (draft: AvatarEditorState, action: AvatarAction) => {
    switch (action.type) {
      case 'SET_ORIGINAL':
        draft.originalDataUrl = action.dataUrl
        draft.cropRect = null
        draft.presets = {
          grayscale: false,
          sepia: false,
          blur: false,
          invert: false,
        }
        draft.brightness = 100
        draft.contrast = 100
        draft.previewDataUrl = null
        break
      case 'RESTORE':
        draft.originalDataUrl = action.dataUrl
        draft.cropRect = action.settings.cropRect
        draft.presets = { ...action.settings.presets }
        draft.brightness = action.settings.brightness
        draft.contrast = action.settings.contrast
        draft.previewDataUrl = null
        break
      case 'SET_CROP':
        draft.cropRect = action.rect
        break
      case 'TOGGLE_PRESET':
        draft.presets[action.preset] = !draft.presets[action.preset]
        break
      case 'SET_SLIDER':
        draft[action.key] = action.value
        break
      case 'SET_PREVIEW':
        draft.previewDataUrl = action.dataUrl
        break
      case 'RESET':
        return initialState
    }
  },
)
