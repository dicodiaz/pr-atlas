import {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  type FC,
  type MouseEvent as ReactMouseEvent,
} from 'react'
import { useTranslation } from 'react-i18next'

import {
  blobToBase64,
  canvasToBlob,
  downloadBlob,
  renderToCanvas,
  type CropRect,
  type FilterOptions,
} from '@/lib/avatar'
import {
  avatarReducer,
  extractSettings,
  initialState,
  type AvatarEditorState,
  type AvatarSettings,
} from '@/lib/avatar-state'

interface AvatarEditorProps {
  imageDataUrl: string
  savedSettings?: AvatarSettings | null | undefined
  onSave: (base64: string, settings: AvatarSettings) => void
  onClear: () => void
}

const PREVIEW_SIZE = 200

const presetKeys: (keyof AvatarEditorState['presets'])[] = [
  'grayscale',
  'sepia',
  'blur',
  'invert',
]

export const AvatarEditor: FC<AvatarEditorProps> = ({
  imageDataUrl,
  savedSettings,
  onSave,
  onClear,
}) => {
  const { t } = useTranslation()
  const [state, dispatch] = useReducer(avatarReducer, initialState)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const cropStartRef = useRef<{ x: number; y: number } | null>(null)

  const { originalDataUrl, cropRect, presets, brightness, contrast } = state

  useEffect(() => {
    if (savedSettings) {
      dispatch({
        type: 'RESTORE',
        dataUrl: imageDataUrl,
        settings: savedSettings,
      })
    } else {
      dispatch({ type: 'SET_ORIGINAL', dataUrl: imageDataUrl })
    }
  }, [imageDataUrl, savedSettings])

  useEffect(() => {
    if (!originalDataUrl) return

    const filters: FilterOptions = { ...presets, brightness, contrast }

    const img = new Image()
    img.onload = () => {
      imgRef.current = img
      const canvas = renderToCanvas(
        img,
        PREVIEW_SIZE,
        PREVIEW_SIZE,
        cropRect,
        filters,
      )
      const ctx = canvasRef.current?.getContext('2d')
      if (ctx && canvasRef.current) {
        canvasRef.current.width = PREVIEW_SIZE
        canvasRef.current.height = PREVIEW_SIZE
        ctx.clearRect(0, 0, PREVIEW_SIZE, PREVIEW_SIZE)
        ctx.drawImage(canvas, 0, 0)
      }
    }
    img.src = originalDataUrl
  }, [originalDataUrl, cropRect, presets, brightness, contrast])

  const handleCropStart = useCallback(
    (e: ReactMouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      cropStartRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    },
    [],
  )

  const handleCropEnd = useCallback((e: ReactMouseEvent<HTMLCanvasElement>) => {
    const start = cropStartRef.current
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!start || !rect || !imgRef.current) return

    const endX = e.clientX - rect.left
    const endY = e.clientY - rect.top
    const dx = Math.abs(endX - start.x)
    const dy = Math.abs(endY - start.y)

    cropStartRef.current = null
    if (dx < 10 || dy < 10) return

    const scaleX = imgRef.current.naturalWidth / PREVIEW_SIZE
    const scaleY = imgRef.current.naturalHeight / PREVIEW_SIZE
    const cropRect: CropRect = {
      x: Math.min(start.x, endX) * scaleX,
      y: Math.min(start.y, endY) * scaleY,
      width: dx * scaleX,
      height: dy * scaleY,
    }
    dispatch({ type: 'SET_CROP', rect: cropRect })
  }, [])

  const handleSave = useCallback(async () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const blob = await canvasToBlob(canvas)
    const base64 = await blobToBase64(blob)
    dispatch({ type: 'SET_PREVIEW', dataUrl: base64 })
    onSave(base64, extractSettings(state))
  }, [onSave, state])

  const handleExport = useCallback(async () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const blob = await canvasToBlob(canvas)
    downloadBlob(blob, 'avatar.png')
  }, [])

  const handleClear = useCallback(() => {
    dispatch({ type: 'RESET' })
    onClear()
  }, [onClear])

  return (
    <div className="space-y-3">
      <canvas
        ref={canvasRef}
        width={PREVIEW_SIZE}
        height={PREVIEW_SIZE}
        onMouseDown={handleCropStart}
        onMouseUp={handleCropEnd}
        className="mx-auto block cursor-crosshair rounded-lg"
        aria-label={t('avatar.preview')}
      />

      <div className="flex flex-wrap justify-center gap-1.5">
        {presetKeys.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => {
              dispatch({ type: 'TOGGLE_PRESET', preset })
            }}
            className={`rounded-full px-2.5 py-1 text-xs font-medium transition ${
              state.presets[preset]
                ? 'bg-(--color-accent) text-white'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            {t(`avatar.${preset}`)}
          </button>
        ))}
      </div>

      <div className="space-y-1.5 px-1">
        <label className="flex items-center gap-2 text-xs text-white/70">
          <span className="w-16">{t('avatar.brightness')}</span>
          <input
            type="range"
            min={50}
            max={150}
            value={state.brightness}
            onChange={(e) => {
              dispatch({
                type: 'SET_SLIDER',
                key: 'brightness',
                value: Number(e.target.value),
              })
            }}
            className="flex-1"
          />
          <span className="w-8 text-right">{state.brightness}</span>
        </label>
        <label className="flex items-center gap-2 text-xs text-white/70">
          <span className="w-16">{t('avatar.contrast')}</span>
          <input
            type="range"
            min={50}
            max={150}
            value={state.contrast}
            onChange={(e) => {
              dispatch({
                type: 'SET_SLIDER',
                key: 'contrast',
                value: Number(e.target.value),
              })
            }}
            className="flex-1"
          />
          <span className="w-8 text-right">{state.contrast}</span>
        </label>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => {
            void handleSave()
          }}
          className="flex-1 cursor-pointer rounded-lg bg-(--color-accent) px-3 py-1.5 text-xs font-medium text-white transition hover:opacity-90"
        >
          {t('avatar.save')}
        </button>
        <button
          type="button"
          onClick={() => {
            void handleExport()
          }}
          className="flex-1 cursor-pointer rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/20"
        >
          {t('avatar.export')}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="cursor-pointer rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-red-400 transition hover:bg-white/20"
        >
          {t('avatar.clear')}
        </button>
      </div>
    </div>
  )
}
