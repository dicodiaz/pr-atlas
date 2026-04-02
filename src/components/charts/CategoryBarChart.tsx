import type { FC } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import type { CategoryCoverage } from '@/lib/coverage'

interface CategoryBarChartProps {
  data: CategoryCoverage[]
}

export const CategoryBarChart: FC<CategoryBarChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={360}>
    <BarChart
      data={data}
      margin={{ top: 8, right: 8, bottom: 80, left: 0 }}
      barGap={4}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
      <XAxis
        dataKey="category"
        tick={{ fill: 'var(--color-text-secondary)', fontSize: 11 }}
        angle={-40}
        textAnchor="end"
        interval={0}
      />
      <YAxis tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }} />
      <Tooltip
        contentStyle={{
          backgroundColor: 'rgba(8,14,24,0.95)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 12,
          fontSize: 13,
        }}
        labelStyle={{ color: 'var(--color-text-primary)' }}
      />
      <Bar
        dataKey="covered"
        name="Covered"
        fill="var(--color-accent)"
        radius={[4, 4, 0, 0]}
      />
      <Bar
        dataKey="total"
        name="Total"
        fill="rgba(255,255,255,0.12)"
        radius={[4, 4, 0, 0]}
      />
    </BarChart>
  </ResponsiveContainer>
)
