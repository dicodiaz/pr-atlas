import { useCallback, useRef, useState, type DragEvent, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { isValidImageSize, isValidImageType } from '@/lib/avatar'

interface ImageDropZoneProps {
  onFileSelected: (file: File) => void
}

export const ImageDropZone: FC<ImageDropZoneProps> = ({ onFileSelected }) => {
  const { t } = useTranslation()
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const validate = useCallback(
    (file: File): boolean => {
      if (!isValidImageType(file)) {
        setError(t('avatar.invalidType'))
        return false
      }
      if (!isValidImageSize(file)) {
        setError(t('avatar.fileTooLarge'))
        return false
      }
      setError(null)
      return true
    },
    [t],
  )

  const handleFile = useCallback(
    (file: File) => {
      if (validate(file)) onFileSelected(file)
    },
    [validate, onFileSelected],
  )

  const handleDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault()
      setDragging(false)
      const file = e.dataTransfer.files[0]
      if (file) handleFile(file)
    },
    [handleFile],
  )

  const handleDragOver = useCallback((e: DragEvent) => {
    e.preventDefault()
    setDragging(true)
  }, [])

  const handleDragLeave = useCallback(() => setDragging(false), [])

  const handleClick = useCallback(() => inputRef.current?.click(), [])

  const handleInputChange = useCallback(() => {
    const file = inputRef.current?.files?.[0]
    if (file) handleFile(file)
    inputRef.current!.value = ''
  }, [handleFile])

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`flex w-full cursor-pointer flex-col items-center gap-1 rounded-xl border-2 border-dashed p-4 text-center transition ${
          dragging
            ? 'border-(--color-accent) bg-white/5'
            : 'border-white/20 hover:border-white/40'
        }`}
        aria-label={t('avatar.upload')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-secondary"
          aria-hidden="true"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
        <span className="text-secondary text-xs">{t('avatar.dropHint')}</span>
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        className="hidden"
        onChange={handleInputChange}
        data-testid="avatar-file-input"
      />

      {error && (
        <p className="text-center text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
