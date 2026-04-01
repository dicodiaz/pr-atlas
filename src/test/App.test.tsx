import { act, fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { App } from '@/app/App'
import { topics } from '@/data/topics'

const debounceMs = 250
const announceMs = 1000

const advanceTimers = (ms: number) => {
  act(() => {
    vi.advanceTimersByTime(ms)
  })
}

const advanceDebounce = () => {
  advanceTimers(debounceMs)
}

const advanceAnnounce = () => {
  advanceTimers(announceMs)
}

const getSearchInput = () =>
  screen.getByRole('searchbox', {
    name: /search by topic, keyword, or pr title/i,
  })

const getVisibleCount = () =>
  screen
    .getAllByText(/topics? shown/i)
    .find((el) => el.getAttribute('aria-live') === null)!

const getLiveRegion = () =>
  document.querySelector<HTMLElement>('[aria-live="polite"]')!

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    act(() => {
      vi.runOnlyPendingTimers()
    })
    vi.useRealTimers()
  })

  it('hydrates the search input from the url query parameter', () => {
    window.history.replaceState(null, '', '/?q=rollback%20notes')

    render(<App />)

    expect(getSearchInput()).toHaveValue('rollback notes')
    expect(
      screen.getByRole('rowheader', { name: /incident response/i }),
    ).toBeInTheDocument()
  })

  it('renders one row per topic by default', () => {
    window.history.replaceState(null, '', '/')

    render(<App />)

    expect(screen.getAllByRole('row')).toHaveLength(topics.length + 1)
  })

  it('renders multiple PR links within the same topic row', () => {
    window.history.replaceState(null, '', '/')

    render(<App />)

    const topicCell = screen.getByRole('rowheader', { name: /^observability/i })
    const row = topicCell.closest('tr')

    expect(row).not.toBeNull()
    expect(within(row!).getAllByRole('link')).toHaveLength(3)
  })

  it('applies debounced results only after the delay', () => {
    window.history.replaceState(null, '', '/')

    render(<App />)

    fireEvent.change(getSearchInput(), { target: { value: 'bundle budget' } })

    expect(getSearchInput()).toHaveValue('bundle budget')
    expect(
      screen.getByRole('rowheader', { name: /^Accessibility\b/i }),
    ).toBeInTheDocument()

    advanceDebounce()

    expect(
      screen.getByRole('rowheader', { name: /client performance/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('rowheader', { name: /performance budgeting/i }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('rowheader', { name: /^Accessibility\b/i }),
    ).not.toBeInTheDocument()
  })

  it('clears the search and restores the full topic list', () => {
    window.history.replaceState(null, '', '/')

    render(<App />)

    const searchInput = getSearchInput()

    fireEvent.change(searchInput, { target: { value: 'circuit breaker' } })

    expect(getVisibleCount()).toHaveTextContent(
      `${topics.length} topics shown`,
    )

    advanceDebounce()

    expect(getVisibleCount()).toHaveTextContent('3 topics shown')

    fireEvent.click(screen.getByRole('button', { name: /clear search/i }))

    expect(searchInput).toHaveValue('')
    expect(getVisibleCount()).toHaveTextContent(
      `${topics.length} topics shown`,
    )
    expect(window.location.search).toBe('')
  })

  it('returns focus to the search input after clicking Clear', () => {
    window.history.replaceState(null, '', '/')

    render(<App />)

    const searchInput = getSearchInput()

    fireEvent.change(searchInput, { target: { value: 'observability' } })
    advanceDebounce()

    fireEvent.click(screen.getByRole('button', { name: /clear search/i }))

    expect(document.activeElement).toBe(searchInput)
  })

  it('renders singular result count for one matching topic', () => {
    window.history.replaceState(null, '', '/')

    render(<App />)

    fireEvent.change(getSearchInput(), { target: { value: 'ops readiness' } })

    advanceDebounce()

    expect(getVisibleCount()).toHaveTextContent('1 topic shown')
    expect(
      screen.getByRole('rowheader', { name: /incident response/i }),
    ).toBeInTheDocument()
  })

  it('clears the search immediately on Escape', () => {
    window.history.replaceState(null, '', '/')

    render(<App />)

    const searchInput = getSearchInput()

    fireEvent.change(searchInput, { target: { value: 'observability' } })
    advanceDebounce()
    fireEvent.keyDown(searchInput, { key: 'Escape', code: 'Escape' })

    expect(searchInput).toHaveValue('')
    expect(getVisibleCount()).toHaveTextContent(
      `${topics.length} topics shown`,
    )
    expect(window.location.search).toBe('')
  })

  it('does not clear the search when Escape is pressed on an empty input', () => {
    window.history.replaceState(null, '', '/')

    render(<App />)

    const searchInput = getSearchInput()

    fireEvent.keyDown(searchInput, { key: 'Escape', code: 'Escape' })

    expect(searchInput).toHaveValue('')
    expect(getVisibleCount()).toHaveTextContent(
      `${topics.length} topics shown`,
    )
  })

  it('announces showing all topics without search cleared for whitespace-only input', () => {
    window.history.replaceState(null, '', '/')

    render(<App />)

    fireEvent.change(getSearchInput(), { target: { value: '   ' } })
    advanceDebounce()
    advanceTimers(0)

    expect(getLiveRegion()).toHaveTextContent(
      `Showing all ${topics.length} topics.`,
    )
    expect(getLiveRegion()).not.toHaveTextContent('Search cleared')
  })

  it('delays the screen reader announcement until after the announce delay', () => {
    window.history.replaceState(null, '', '/')

    render(<App />)
    advanceTimers(0)

    const liveRegion = getLiveRegion()

    expect(liveRegion).toHaveTextContent(
      `Search cleared. Showing all ${topics.length} topics.`,
    )

    fireEvent.change(getSearchInput(), { target: { value: 'ops readiness' } })
    advanceDebounce()

    expect(getVisibleCount()).toHaveTextContent('1 topic shown')
    expect(liveRegion).not.toHaveTextContent(
      '1 topic shown for ops readiness.',
    )

    advanceAnnounce()

    expect(liveRegion).toHaveTextContent(
      '1 topic shown for ops readiness. Tab to navigate to the results.',
    )
  })

  it('shows an empty state when no results match', () => {
    window.history.replaceState(null, '', '/')

    render(<App />)

    fireEvent.change(getSearchInput(), {
      target: { value: 'quantum compiler dragons' },
    })

    expect(screen.queryByText(/no matching topics/i)).not.toBeInTheDocument()

    advanceDebounce()

    expect(screen.getByText(/no matching topics/i)).toBeInTheDocument()
    expect(screen.getByText(/no pr examples matched/i)).toBeInTheDocument()
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
  })

  it('writes the debounced query into the url', () => {
    window.history.replaceState(null, '', '/')

    render(<App />)

    fireEvent.change(getSearchInput(), { target: { value: 'bundle budget' } })

    expect(window.location.search).toBe('')

    advanceDebounce()

    expect(window.location.search).toBe('?q=bundle+budget')
  })

  it('updates the search state when navigating with browser history', async () => {
    window.history.replaceState(null, '', '/?q=observability')

    render(<App />)

    await act(async () => {
      window.history.pushState(null, '', '/?q=rollback%20notes')
      window.dispatchEvent(new PopStateEvent('popstate'))
    })

    expect(getSearchInput()).toHaveValue('rollback notes')
    expect(
      screen.getByRole('rowheader', { name: /incident response/i }),
    ).toBeInTheDocument()
  })
})
