import type { ChangeEvent, FC } from 'react'
import { useTranslation } from 'react-i18next'

import { storage } from '@/lib/storage'
import { LANG_KEY } from '@/i18n'

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
] as const

export const LanguageSwitcher: FC = () => {
  const { t, i18n } = useTranslation()

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const lng = event.target.value
    void i18n.changeLanguage(lng)
    storage.set(LANG_KEY, lng)
  }

  return (
    <select
      aria-label={t('language.label')}
      value={i18n.language}
      onChange={handleChange}
      className="text-secondary border-strong focus-ring-page hover:text-primary cursor-pointer rounded-xl border bg-transparent px-3 py-2 text-sm font-medium transition hover:border-(--color-accent)"
    >
      {LANGUAGES.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  )
}
