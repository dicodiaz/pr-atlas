import { useCallback, useEffect, useRef, type FC, type MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'

import type { MatrixCell } from '@/lib/coverage'

interface TopicDetailModalProps {
  cell: MatrixCell | null
  onClose: () => void
}

const cellLabel = (cell: MatrixCell): string =>
  cell.technology
    ? `${cell.category} – ${cell.technology} / ${cell.level}`
    : `${cell.category} / ${cell.level}`

export const TopicDetailModal: FC<TopicDetailModalProps> = ({
  cell,
  onClose,
}) => {
  const { t } = useTranslation()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (cell) {
      if (!dialog.open) dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [cell])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const handleClose = () => {
      onClose()
    }
    dialog.addEventListener('close', handleClose)
    return () => {
      dialog.removeEventListener('close', handleClose)
    }
  }, [onClose])

  const handleBackdropClick = useCallback(
    (e: MouseEvent<HTMLDialogElement>) => {
      if (e.target === dialogRef.current) {
        dialogRef.current.close()
      }
    },
    [],
  )

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      className="border-default fixed inset-0 m-auto w-full max-w-lg rounded-2xl border bg-[rgba(10,18,30,0.96)] p-0 text-white backdrop:bg-black/60"
    >
      {cell && (
        <>
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <h3 className="text-primary font-display text-lg font-semibold">
              {cellLabel(cell)}
            </h3>
            <button
              onClick={() => {
                dialogRef.current?.close()
              }}
              className="text-secondary hover:text-primary -mr-2 rounded-lg p-2 transition-colors"
              aria-label={t('dashboard.closeModal')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="px-6 py-4">
            <p className="text-secondary mb-3 text-xs font-semibold tracking-wider uppercase">
              {t('dashboard.topics', { count: cell.topics.length })}
            </p>

            <ul className="space-y-2">
              {cell.topics.map((topic) => (
                <li key={topic.name} className="flex items-start gap-2.5">
                  {topic.covered ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0 text-green-400"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0 text-red-400"
                      aria-hidden="true"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  )}

                  <span className="text-primary flex-1 text-sm">
                    {topic.name}
                  </span>

                  {topic.key && (
                    <span className="text-secondary shrink-0 rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium">
                      KEY
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </dialog>
  )
}
