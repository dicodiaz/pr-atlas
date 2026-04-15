import { useMemo, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { CategoryBarChart } from '@/components/charts/CategoryBarChart'
import { CoverageMatrix } from '@/components/charts/CoverageMatrix'
import { LevelPieChart } from '@/components/charts/LevelPieChart'
import { ThresholdBars } from '@/components/charts/ThresholdBars'
import { sections } from '@/data/sections'
import { topics } from '@/data/topics'
import {
  computeCategoryStats,
  computeLevelStats,
  computeMatrixStats,
  computeThresholds,
} from '@/lib/coverage'

const DashboardPage: FC = () => {
  const { t } = useTranslation()

  const categoryStats = useMemo(() => computeCategoryStats(topics), [])
  const levelStats = useMemo(() => computeLevelStats(topics), [])
  const matrixStats = useMemo(() => computeMatrixStats(sections, topics), [])
  const thresholds = useMemo(() => computeThresholds(topics), [])

  const totalCovered = useMemo(
    () => topics.filter((topic) => topic.prs.length > 0).length,
    [],
  )

  return (
    <>
      <header>
        <h1 className="text-primary font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          {t('dashboard.title')}
        </h1>
        <p className="text-secondary mt-3 max-w-3xl text-base leading-8 sm:text-lg">
          {t('dashboard.subtitle', {
            covered: totalCovered,
            total: topics.length,
          })}
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="border-default rounded-3xl border bg-[rgba(10,18,30,0.86)] p-6">
          <h2 className="text-primary font-display mb-4 text-lg font-semibold">
            {t('dashboard.byCategory')}
          </h2>
          <CategoryBarChart data={categoryStats} />
        </section>

        <section className="border-default rounded-3xl border bg-[rgba(10,18,30,0.86)] p-6">
          <h2 className="text-primary font-display mb-4 text-lg font-semibold">
            {t('dashboard.byLevel')}
          </h2>
          <LevelPieChart data={levelStats} />
        </section>
      </div>

      <section className="border-default rounded-3xl border bg-[rgba(10,18,30,0.86)] p-6">
        <h2 className="text-primary font-display mb-4 text-lg font-semibold">
          {t('dashboard.coverageMatrix')}
        </h2>
        <CoverageMatrix data={matrixStats} />
      </section>

      <section className="border-default rounded-3xl border bg-[rgba(10,18,30,0.86)] p-6">
        <h2 className="text-primary font-display mb-4 text-lg font-semibold">
          {t('dashboard.thresholds')}
        </h2>
        <ThresholdBars data={thresholds} />
      </section>
    </>
  )
}

export default DashboardPage
