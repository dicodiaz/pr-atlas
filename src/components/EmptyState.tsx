import type { FC } from 'react'
import { Trans, useTranslation } from 'react-i18next'

interface EmptyStateProps {
  query: string
}

export const EmptyState: FC<EmptyStateProps> = ({ query }) => {
  const { t } = useTranslation()

  return (
    <section className="border-strong fade-up rounded-3xl border border-dashed bg-[rgba(14,23,36,0.76)] px-8 py-14 text-center">
      <p className="text-muted text-sm tracking-[0.18em] uppercase">
        {t('empty.badge')}
      </p>
      <h2 className="text-primary font-display mt-3 text-2xl">
        {t('empty.heading', { query })}
      </h2>
      <p className="text-secondary mx-auto mt-4 max-w-2xl text-sm leading-7">
        <Trans
          i18nKey="empty.body"
          components={{ accent: <span className="text-accent" /> }}
        />
      </p>
    </section>
  )
}
