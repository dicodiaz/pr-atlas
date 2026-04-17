import { useCallback, useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { TopicDetailModal } from '@/components/TopicDetailModal'
import type { MatrixCell } from '@/lib/coverage'

interface CoverageMatrixProps {
  data: MatrixCell[]
}

const LEVELS = ['Trainee', 'Junior', 'Middle', 'Senior']

interface RowGroup {
  label: string
  cells: Map<string, MatrixCell>
}

const groupByCategory = (data: MatrixCell[]): RowGroup[] => {
  const seen = new Map<string, RowGroup>()

  for (const cell of data) {
    const label = cell.technology
      ? `${cell.category} – ${cell.technology}`
      : cell.category

    let group = seen.get(label)
    if (!group) {
      group = { label, cells: new Map() }
      seen.set(label, group)
    }
    group.cells.set(cell.level, cell)
  }

  return Array.from(seen.values())
}

export const CoverageMatrix: FC<CoverageMatrixProps> = ({ data }) => {
  const { t } = useTranslation()
  const [activeCell, setActiveCell] = useState<MatrixCell | null>(null)

  const handleClose = useCallback(() => setActiveCell(null), [])

  const rows = groupByCategory(data)

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="text-primary p-3 text-left text-xs font-semibold tracking-wider uppercase">
                {t('dashboard.coverageMatrix')}
              </th>
              {LEVELS.map((level) => (
                <th
                  key={level}
                  className="text-primary p-3 text-left text-xs font-semibold tracking-wider uppercase"
                >
                  {level}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.label}
                className="border-t border-white/5 transition-colors hover:bg-white/[0.02]"
              >
                <td className="text-primary p-3 font-medium">{row.label}</td>
                {LEVELS.map((level) => {
                  const cell = row.cells.get(level)
                  if (!cell) {
                    return (
                      <td key={level} className="p-3 text-center text-white/20">
                        –
                      </td>
                    )
                  }

                  const percent =
                    cell.total > 0
                      ? Math.round((cell.covered / cell.total) * 100)
                      : 0

                  return (
                    <td key={level} className="p-3">
                      <button
                        onClick={() => setActiveCell(cell)}
                        className="w-full cursor-pointer rounded-lg p-2 text-left transition-colors hover:bg-white/5"
                        aria-label={`${row.label} ${level}: ${cell.covered} of ${cell.total} covered`}
                      >
                        <p className="text-primary text-xs">
                          {t('dashboard.coveredJobs', {
                            covered: cell.covered,
                            total: cell.total,
                          })}
                        </p>
                        <p className="text-secondary text-xs">
                          {t('dashboard.coveredKeyJobs', {
                            covered: cell.keyCovered,
                            total: cell.keyTotal,
                          })}
                        </p>
                        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-(--color-accent) transition-all duration-500"
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                      </button>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <TopicDetailModal cell={activeCell} onClose={handleClose} />
    </>
  )
}
