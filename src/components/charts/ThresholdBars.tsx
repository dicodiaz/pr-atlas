import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import type { ThresholdProgress } from '@/lib/coverage'

interface ThresholdBarsProps {
  data: ThresholdProgress[]
}

export const ThresholdBars: FC<ThresholdBarsProps> = ({ data }) => {
  const { t } = useTranslation()

  return (
    <div className="space-y-4">
      {data.map((item) => (
        <div key={item.label}>
          <div className="mb-1.5 flex items-center justify-between text-sm">
            <span className="text-secondary font-medium">{item.label}</span>
            <span className={item.met ? 'text-green-400' : 'text-secondary'}>
              {item.current} / {item.required}{' '}
              {item.met
                ? t('dashboard.met')
                : t('dashboard.remaining', {
                    count: item.required - item.current,
                  })}
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-(--color-surface-strong)">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                item.met ? 'bg-green-500' : 'bg-(--color-accent)'
              }`}
              style={{
                width: `${String(
                  Math.min(
                    100,
                    item.required > 0
                      ? (item.current / item.required) * 100
                      : 0,
                  ),
                )}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
