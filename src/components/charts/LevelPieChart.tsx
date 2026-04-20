import type { FC } from 'react'
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

import type { LevelCoverage } from '@/lib/coverage'

interface LevelPieChartProps {
  data: LevelCoverage[]
}

const COLORS = [
  'var(--color-accent)',
  'var(--color-accent-strong)',
  'rgba(139,92,246,0.8)',
  'rgba(59,130,246,0.6)',
]

export const LevelPieChart: FC<LevelPieChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data.map((entry, index) => ({
          ...entry,
          fill: COLORS[index % COLORS.length] ?? 'var(--color-accent)',
        }))}
        dataKey="covered"
        nameKey="level"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={110}
        paddingAngle={3}
        label={(props) => {
          const entry = props as unknown as LevelCoverage
          return `${entry.level} ${String(entry.covered)}/${String(entry.total)}`
        }}
      >
        {/* fill comes from the data entries */}
      </Pie>
      <Tooltip
        contentStyle={{
          backgroundColor: 'rgba(8,14,24,0.95)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 12,
          fontSize: 13,
        }}
        labelStyle={{ color: 'var(--color-text-primary)' }}
        formatter={(value, _name, props) => {
          const { total } = props.payload as LevelCoverage
          return [`${String(value)} / ${String(total)}`, 'Covered']
        }}
      />
    </PieChart>
  </ResponsiveContainer>
)
