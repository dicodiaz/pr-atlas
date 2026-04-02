import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, Outlet } from 'react-router'

import { LanguageSwitcher } from '@/components/LanguageSwitcher'

export const Layout: FC = () => {
  const { t } = useTranslation()

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
            </div>
            <LanguageSwitcher />
          </nav>
          <Outlet />
        </div>
      </div>
    </main>
  )
}
