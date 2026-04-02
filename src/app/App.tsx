import { lazy, Suspense, type FC } from 'react'
import { Route, Routes } from 'react-router'

import { Layout } from '@/app/Layout'
import { SearchPage } from '@/pages/SearchPage'

const DashboardPage = lazy(() => import('@/pages/DashboardPage'))

const DashboardSkeleton: FC = () => (
  <div className="flex flex-col gap-6">
    <div className="h-8 w-48 animate-pulse rounded-lg bg-(--color-surface-strong)" />
    <div className="grid gap-6 md:grid-cols-2">
      <div className="h-64 animate-pulse rounded-2xl bg-(--color-surface-strong)" />
      <div className="h-64 animate-pulse rounded-2xl bg-(--color-surface-strong)" />
    </div>
    <div className="h-48 animate-pulse rounded-2xl bg-(--color-surface-strong)" />
  </div>
)

export const App: FC = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<SearchPage />} />
      <Route
        path="dashboard"
        element={
          <Suspense fallback={<DashboardSkeleton />}>
            <DashboardPage />
          </Suspense>
        }
      />
    </Route>
  </Routes>
)
