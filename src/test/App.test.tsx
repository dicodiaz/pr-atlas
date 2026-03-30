import userEvent from '@testing-library/user-event'
import { act, render, screen, within } from '@testing-library/react'

import { App } from '@/app/App'
import { topics } from '@/data/topics'

describe('App', () => {
  it('hydrates the search input from the url query parameter', () => {
    window.history.replaceState(null, '', '/?q=rollback%20notes')

    render(<App />)

    expect(
      screen.getByRole('searchbox', {
        name: /search by topic, keyword, or pr title/i,
      }),
    ).toHaveValue('rollback notes')
    expect(
      screen.getByRole('rowheader', { name: /incident response/i }),
    ).toBeInTheDocument()
  })

  it('renders one row per topic by default', () => {
    window.history.replaceState(null, '', '/')

    render(<App />)

    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(topics.length + 1)
  })

  it('renders multiple PR links within the same topic row', () => {
    window.history.replaceState(null, '', '/')

    render(<App />)

    const topicCell = screen.getByRole('rowheader', { name: /^observability/i })
    const row = topicCell.closest('tr')

    expect(row).not.toBeNull()
    expect(within(row!).getAllByRole('link')).toHaveLength(3)
  })

  it('filters results live using topic, tag, and PR text', async () => {
    window.history.replaceState(null, '', '/')

    const user = userEvent.setup()
    render(<App />)

    await user.type(
      screen.getByRole('searchbox', {
        name: /search by topic, keyword, or pr title/i,
      }),
      'bundle budget',
    )

    expect(
      screen.getByRole('rowheader', { name: /client performance/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('rowheader', { name: /performance budgeting/i }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('rowheader', { name: /accessibility/i }),
    ).not.toBeInTheDocument()
  })

  it('returns all related topics for a shared PR search', async () => {
    window.history.replaceState(null, '', '/')

    const user = userEvent.setup()
    render(<App />)

    await user.type(
      screen.getByRole('searchbox', {
        name: /search by topic, keyword, or pr title/i,
      }),
      'rollback notes',
    )

    expect(
      screen.getByRole('rowheader', { name: /incident response/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('rowheader', { name: /testing/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('rowheader', { name: /debugging/i }),
    ).toBeInTheDocument()
  })

  it('clears the search and restores the full topic list', async () => {
    window.history.replaceState(null, '', '/')

    const user = userEvent.setup()
    render(<App />)

    const searchInput = screen.getByRole('searchbox', {
      name: /search by topic, keyword, or pr title/i,
    })

    await user.type(searchInput, 'circuit breaker')
    expect(screen.getByText(/topics shown/i)).toHaveTextContent(
      '3 topics shown',
    )

    await user.click(screen.getByRole('button', { name: /clear search/i }))

    expect(searchInput).toHaveValue('')
    expect(screen.getByText(/topics shown/i)).toHaveTextContent(
      `${topics.length} topics shown`,
    )
    expect(window.location.search).toBe('')
  })

  it('renders the singular result count when exactly one topic matches', async () => {
    window.history.replaceState(null, '', '/')

    const user = userEvent.setup()
    render(<App />)

    await user.type(
      screen.getByRole('searchbox', {
        name: /search by topic, keyword, or pr title/i,
      }),
      'ops readiness',
    )

    expect(screen.getByText('1 topic shown')).toBeInTheDocument()
    expect(
      screen.getByRole('rowheader', { name: /incident response/i }),
    ).toBeInTheDocument()
  })

  it('moves focus to the results heading when search is submitted', async () => {
    window.history.replaceState(null, '', '/')

    const user = userEvent.setup()
    render(<App />)

    await user.type(
      screen.getByRole('searchbox', {
        name: /search by topic, keyword, or pr title/i,
      }),
      'search',
    )

    await user.click(screen.getByRole('button', { name: /^search$/i }))

    expect(
      screen.getByRole('heading', { name: /topic results/i }),
    ).toHaveFocus()
  })

  it('clears the active query when escape is pressed in the search input', async () => {
    window.history.replaceState(null, '', '/')

    const user = userEvent.setup()
    render(<App />)

    const searchInput = screen.getByRole('searchbox', {
      name: /search by topic, keyword, or pr title/i,
    })

    await user.type(searchInput, 'observability')
    await user.keyboard('{Escape}')

    expect(searchInput).toHaveValue('')
    expect(screen.getByText(/topics shown/i)).toHaveTextContent(
      `${topics.length} topics shown`,
    )
    expect(window.location.search).toBe('')
  })

  it('shows an empty state when no results match', async () => {
    window.history.replaceState(null, '', '/')

    const user = userEvent.setup()
    render(<App />)

    await user.type(
      screen.getByRole('searchbox', {
        name: /search by topic, keyword, or pr title/i,
      }),
      'quantum compiler dragons',
    )

    expect(screen.getByText(/no matching topics/i)).toBeInTheDocument()
    expect(screen.getByText(/no pr examples matched/i)).toBeInTheDocument()
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
  })

  it('writes the active query into the url', async () => {
    window.history.replaceState(null, '', '/')

    const user = userEvent.setup()
    render(<App />)

    await user.type(
      screen.getByRole('searchbox', {
        name: /search by topic, keyword, or pr title/i,
      }),
      'bundle budget',
    )

    expect(window.location.search).toBe('?q=bundle+budget')
  })

  it('updates the search state when navigating with browser history', async () => {
    window.history.replaceState(null, '', '/?q=observability')

    render(<App />)

    await act(async () => {
      window.history.pushState(null, '', '/?q=rollback%20notes')
      window.dispatchEvent(new PopStateEvent('popstate'))
    })

    expect(
      screen.getByRole('searchbox', {
        name: /search by topic, keyword, or pr title/i,
      }),
    ).toHaveValue('rollback notes')
    expect(
      screen.getByRole('rowheader', { name: /incident response/i }),
    ).toBeInTheDocument()
  })
})
