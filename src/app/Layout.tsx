import { type FC, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, Outlet } from 'react-router'

import { AvatarPopover } from '@/components/AvatarPopover'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { isDebugEnabled, logger, toggleDebug } from '@/lib/logger'

export const Layout: FC = () => {
  const { t } = useTranslation()
  const [debug, setDebug] = useState(isDebugEnabled)

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'D') {
        event.preventDefault()
        const next = toggleDebug()
        setDebug(next)
        logger.info(next ? t('debug.enabled') : t('debug.disabled'))
      }
    },
    [t],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `focus-ring cursor-pointer rounded-xl px-3 py-2 text-sm font-medium transition ${
      isActive
        ? 'text-primary bg-(--color-surface-strong)'
        : 'text-secondary hover:text-primary'
    }`

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-330 flex-col px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
      <div className="panel-surface fade-up rounded-4xl px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="flex flex-col gap-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <NavLink end to="/" className={linkClass}>
                {t('nav.search')}
              </NavLink>
              <NavLink to="/dashboard" className={linkClass}>
                {t('nav.dashboard')}
              </NavLink>
              {debug && (
                <span className="ml-2 rounded-md bg-amber-500/20 px-2 py-0.5 text-xs font-semibold tracking-wider text-amber-400 uppercase">
                  {t('debug.badge')}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <AvatarPopover />
              <LanguageSwitcher />
            </div>
          </nav>
          <Outlet />
        </div>
      </div>
    </main>
  )
}
