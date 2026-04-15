import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { I18nextProvider } from 'react-i18next'

import { TopicDetailModal } from '@/components/TopicDetailModal'
import type { MatrixCell } from '@/lib/coverage'
import i18n from '@/test/i18n-setup'

const cell: MatrixCell = {
  category: 'Language',
  technology: 'JavaScript',
  level: 'Trainee',
  covered: 2,
  total: 3,
  keyCovered: 1,
  keyTotal: 1,
  topics: [
    { name: 'Topic A', key: true, covered: true },
    { name: 'Topic B', key: false, covered: true },
    { name: 'Topic C', key: false, covered: false },
  ],
}

const cellNoTech: MatrixCell = {
  category: 'Process',
  level: 'Senior',
  covered: 0,
  total: 1,
  keyCovered: 0,
  keyTotal: 0,
  topics: [{ name: 'Only Topic', key: false, covered: false }],
}

const renderModal = (c: MatrixCell | null, onClose = vi.fn()) =>
  render(
    <I18nextProvider i18n={i18n}>
      <TopicDetailModal cell={c} onClose={onClose} />
    </I18nextProvider>,
  )

HTMLDialogElement.prototype.showModal = vi.fn(function (this: HTMLDialogElement) {
  this.setAttribute('open', '')
})
HTMLDialogElement.prototype.close = vi.fn(function (this: HTMLDialogElement) {
  this.removeAttribute('open')
  this.dispatchEvent(new Event('close'))
})

describe('TopicDetailModal', () => {
  it('renders nothing visible when cell is null', () => {
    renderModal(null)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens and shows the header with category, technology, and level', () => {
    renderModal(cell)
    expect(screen.getByText('Language – JavaScript / Trainee')).toBeInTheDocument()
  })

  it('lists all topics with correct count', () => {
    renderModal(cell)
    expect(screen.getByText(/Topics 3/)).toBeInTheDocument()
    expect(screen.getByText('Topic A')).toBeInTheDocument()
    expect(screen.getByText('Topic B')).toBeInTheDocument()
    expect(screen.getByText('Topic C')).toBeInTheDocument()
  })

  it('shows KEY badge only for key topics', () => {
    renderModal(cell)
    const keyBadges = screen.getAllByText('KEY')
    expect(keyBadges).toHaveLength(1)
  })

  it('renders header without technology when absent', () => {
    renderModal(cellNoTech)
    expect(screen.getByText('Process / Senior')).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn()
    renderModal(cell, onClose)
    const closeButton = screen.getByLabelText('Close')
    fireEvent.click(closeButton)
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('closes the dialog when cell changes from non-null to null', () => {
    const onClose = vi.fn()
    const { rerender } = render(
      <I18nextProvider i18n={i18n}>
        <TopicDetailModal cell={cell} onClose={onClose} />
      </I18nextProvider>,
    )

    expect(screen.getByText('Language – JavaScript / Trainee')).toBeInTheDocument()

    rerender(
      <I18nextProvider i18n={i18n}>
        <TopicDetailModal cell={null} onClose={onClose} />
      </I18nextProvider>,
    )

    expect(screen.queryByText('Language – JavaScript / Trainee')).not.toBeInTheDocument()
  })

  it('does not call showModal again when rerendered with the same cell', () => {
    const showModalSpy = vi.fn(function (this: HTMLDialogElement) {
      this.setAttribute('open', '')
    })
    HTMLDialogElement.prototype.showModal = showModalSpy

    const { rerender } = render(
      <I18nextProvider i18n={i18n}>
        <TopicDetailModal cell={cell} onClose={vi.fn()} />
      </I18nextProvider>,
    )

    const callsBefore = showModalSpy.mock.calls.length

    rerender(
      <I18nextProvider i18n={i18n}>
        <TopicDetailModal cell={{ ...cell }} onClose={vi.fn()} />
      </I18nextProvider>,
    )

    expect(showModalSpy.mock.calls.length).toBe(callsBefore)
  })

  it('closes when clicking the backdrop (dialog element itself)', () => {
    const onClose = vi.fn()
    renderModal(cell, onClose)

    const dialog = document.querySelector('dialog')!
    fireEvent.click(dialog)

    expect(onClose).toHaveBeenCalledOnce()
  })

  it('does not close when clicking inside the dialog content', () => {
    const onClose = vi.fn()
    renderModal(cell, onClose)

    fireEvent.click(screen.getByText('Topic A'))

    expect(onClose).not.toHaveBeenCalled()
  })
})
