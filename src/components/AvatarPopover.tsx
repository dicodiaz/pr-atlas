import { useCallback, useEffect, useRef, useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { AvatarEditor } from '@/components/AvatarEditor'
import { ImageDropZone } from '@/components/ImageDropZone'
import type { AvatarSettings } from '@/lib/avatar-state'
import { useAvatar } from '@/lib/use-avatar'

export const AvatarPopover: FC = () => {
  const { t } = useTranslation()
  const { avatarUrl, avatarOriginal, savedSettings, saveAvatar, clearAvatar } =
    useAvatar()
  const [open, setOpen] = useState(false)
  const [editorDataUrl, setEditorDataUrl] = useState<string | null>(null)
  const popoverRef = useRef<HTMLDivElement>(null)

  const toggle = useCallback(() => {
    setOpen((v) => {
      if (!v) setEditorDataUrl(avatarOriginal)
      return !v
    })
  }, [avatarOriginal])

  const handleFileSelected = useCallback(async (file: File) => {
    const reader = new FileReader()
    reader.onload = () => setEditorDataUrl(reader.result as string)
    reader.readAsDataURL(file)
  }, [])

  const handleSave = useCallback(
    (base64: string, settings: AvatarSettings) => {
      saveAvatar(base64, editorDataUrl!, settings)
      setOpen(false)
    },
    [saveAvatar, editorDataUrl],
  )

  const handleClear = useCallback(() => {
    clearAvatar()
    setEditorDataUrl(null)
  }, [clearAvatar])

  useEffect(() => {
    if (!open) return

    const handleClickOutside = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  return (
    <div ref={popoverRef} className="relative">
      <button
        type="button"
        onClick={toggle}
        className="focus-ring flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white/10 transition hover:bg-white/20"
        aria-label={t('avatar.toggle')}
        aria-expanded={open}
      >
        {avatarUrl ? (
          <img src={avatarUrl} alt="" className="h-full w-full object-cover" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-secondary"
            aria-hidden="true"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        )}
      </button>

      {open && (
        <div className="border-default absolute top-full right-0 z-50 mt-2 w-64 rounded-xl border bg-[rgba(10,18,30,0.96)] p-4 shadow-xl">
          {editorDataUrl ? (
            <AvatarEditor
              imageDataUrl={editorDataUrl}
              savedSettings={
                editorDataUrl === avatarOriginal ? savedSettings : null
              }
              onSave={handleSave}
              onClear={handleClear}
            />
          ) : (
            <ImageDropZone onFileSelected={handleFileSelected} />
          )}
        </div>
      )}
    </div>
  )
}
