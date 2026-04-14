import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { App } from '@/app/App'
import { topics } from '@/data/topics'
import i18n from '@/test/i18n-setup'

const debounceMs = 250
const announceMs = 1000

const renderApp = () =>
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  )

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
    name: /search by topic, pr title, repo, or feature/i,
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
    if (vi.isFakeTimers()) {
      act(() => {
        vi.runOnlyPendingTimers()
      })
      vi.useRealTimers()
    }
    localStorage.clear()
    i18n.changeLanguage('en')
  })

  it('hydrates the search input from the url query parameter', () => {
    window.history.replaceState(null, '', '/?q=metaprogramming')

    renderApp()

    expect(getSearchInput()).toHaveValue('metaprogramming')
    expect(
      screen.getByRole('rowheader', {
        name: /uses language metaprogramming techniques/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders one row per topic by default', () => {
    window.history.replaceState(null, '', '/')

    renderApp()

    expect(screen.getAllByRole('row')).toHaveLength(topics.length + 1)
  })

  it('applies debounced results only after the delay', () => {
    window.history.replaceState(null, '', '/')

    renderApp()

    fireEvent.change(getSearchInput(), {
      target: { value: 'metaprogramming' },
    })

    expect(getSearchInput()).toHaveValue('metaprogramming')
    expect(
      screen.getByRole('rowheader', { name: /^Manages collections/i }),
    ).toBeInTheDocument()

    advanceDebounce()

    expect(
      screen.getByRole('rowheader', {
        name: /uses language metaprogramming techniques/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('rowheader', { name: /^Manages collections/i }),
    ).not.toBeInTheDocument()
  })

  it('clears the search and restores the full topic list', () => {
    window.history.replaceState(null, '', '/')

    renderApp()

    const searchInput = getSearchInput()

    fireEvent.change(searchInput, { target: { value: 'version control' } })

    expect(getVisibleCount()).toHaveTextContent(`${topics.length} topics shown`)

    advanceDebounce()

    expect(getVisibleCount()).toHaveTextContent('3 topics shown')

    fireEvent.click(screen.getByRole('button', { name: /clear search/i }))

    expect(searchInput).toHaveValue('')
    expect(getVisibleCount()).toHaveTextContent(`${topics.length} topics shown`)
    expect(window.location.search).toBe('')
  })

  it('returns focus to the search input after clicking Clear', () => {
    window.history.replaceState(null, '', '/')

    renderApp()

    const searchInput = getSearchInput()

    fireEvent.change(searchInput, { target: { value: 'metaprogramming' } })
    advanceDebounce()

    fireEvent.click(screen.getByRole('button', { name: /clear search/i }))

    expect(document.activeElement).toBe(searchInput)
  })

  it('renders singular result count for one matching topic', () => {
    window.history.replaceState(null, '', '/')

    renderApp()

    fireEvent.change(getSearchInput(), {
      target: { value: 'metaprogramming' },
    })

    advanceDebounce()

    expect(getVisibleCount()).toHaveTextContent('1 topic shown')
    expect(
      screen.getByRole('rowheader', {
        name: /uses language metaprogramming techniques/i,
      }),
    ).toBeInTheDocument()
  })

  it('clears the search immediately on Escape', () => {
    window.history.replaceState(null, '', '/')

    renderApp()

    const searchInput = getSearchInput()

    fireEvent.change(searchInput, { target: { value: 'metaprogramming' } })
    advanceDebounce()
    fireEvent.keyDown(searchInput, { key: 'Escape', code: 'Escape' })

    expect(searchInput).toHaveValue('')
    expect(getVisibleCount()).toHaveTextContent(`${topics.length} topics shown`)
    expect(window.location.search).toBe('')
  })

  it('does not clear the search when Escape is pressed on an empty input', () => {
    window.history.replaceState(null, '', '/')

    renderApp()

    const searchInput = getSearchInput()

    fireEvent.keyDown(searchInput, { key: 'Escape', code: 'Escape' })

    expect(searchInput).toHaveValue('')
    expect(getVisibleCount()).toHaveTextContent(`${topics.length} topics shown`)
  })

  it('announces showing all topics without search cleared for whitespace-only input', () => {
    window.history.replaceState(null, '', '/')

    renderApp()

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

    renderApp()
    advanceTimers(0)

    const liveRegion = getLiveRegion()

    expect(liveRegion).toHaveTextContent(
      `Search cleared. Showing all ${topics.length} topics.`,
    )

    fireEvent.change(getSearchInput(), {
      target: { value: 'metaprogramming' },
    })
    advanceDebounce()

    expect(getVisibleCount()).toHaveTextContent('1 topic shown')
    expect(liveRegion).not.toHaveTextContent(
      '1 topic shown for metaprogramming.',
    )

    advanceAnnounce()

    expect(liveRegion).toHaveTextContent(
      '1 topic shown for metaprogramming. Tab to navigate to the results.',
    )
  })

  it('shows an empty state when no results match', () => {
    window.history.replaceState(null, '', '/')

    renderApp()

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

    renderApp()

    fireEvent.change(getSearchInput(), {
      target: { value: 'metaprogramming' },
    })

    expect(window.location.search).toBe('')

    advanceDebounce()

    expect(window.location.search).toBe('?q=metaprogramming')
  })

  it('updates the search state when navigating with browser history', async () => {
    window.history.replaceState(null, '', '/?q=metaprogramming')

    renderApp()

    await act(async () => {
      window.history.pushState(null, '', '/?q=version+control')
      window.dispatchEvent(new PopStateEvent('popstate'))
    })

    expect(getSearchInput()).toHaveValue('version control')
    expect(
      screen.getByRole('rowheader', {
        name: /uses version control tools for development/i,
      }),
    ).toBeInTheDocument()
  })

  it('saves a search as a chip when clicking Save search', () => {
    window.history.replaceState(null, '', '/')

    renderApp()

    fireEvent.change(getSearchInput(), {
      target: { value: 'metaprogramming' },
    })

    fireEvent.click(screen.getByRole('button', { name: /save search/i }))

    expect(
      screen.getByRole('button', {
        name: /apply saved search: metaprogramming/i,
      }),
    ).toBeInTheDocument()
  })

  it('applies a saved search when clicking a chip', () => {
    window.history.replaceState(null, '', '/')

    renderApp()

    fireEvent.change(getSearchInput(), {
      target: { value: 'metaprogramming' },
    })
    fireEvent.click(screen.getByRole('button', { name: /save search/i }))
    fireEvent.click(screen.getByRole('button', { name: /clear search/i }))

    expect(getSearchInput()).toHaveValue('')

    fireEvent.click(
      screen.getByRole('button', {
        name: /apply saved search: metaprogramming/i,
      }),
    )

    expect(getSearchInput()).toHaveValue('metaprogramming')

    advanceDebounce()

    expect(
      screen.getByRole('rowheader', {
        name: /uses language metaprogramming techniques/i,
      }),
    ).toBeInTheDocument()
  })

  it('removes a saved search chip when clicking the remove button', () => {
    window.history.replaceState(null, '', '/')

    renderApp()

    fireEvent.change(getSearchInput(), {
      target: { value: 'metaprogramming' },
    })
    fireEvent.click(screen.getByRole('button', { name: /save search/i }))

    expect(
      screen.getByRole('button', {
        name: /apply saved search: metaprogramming/i,
      }),
    ).toBeInTheDocument()

    fireEvent.click(
      screen.getByRole('button', {
        name: /remove saved search: metaprogramming/i,
      }),
    )

    expect(
      screen.queryByRole('button', {
        name: /apply saved search: metaprogramming/i,
      }),
    ).not.toBeInTheDocument()
  })

  it('disables the Save search button when the query is empty', () => {
    window.history.replaceState(null, '', '/')

    renderApp()

    expect(screen.getByRole('button', { name: /save search/i })).toBeDisabled()
  })

  it('disables the Save search button when the query is already saved', () => {
    window.history.replaceState(null, '', '/')

    renderApp()

    fireEvent.change(getSearchInput(), {
      target: { value: 'metaprogramming' },
    })
    fireEvent.click(screen.getByRole('button', { name: /save search/i }))

    expect(screen.getByRole('button', { name: /save search/i })).toBeDisabled()
  })

  it('switches UI text to Spanish when changing language', () => {
    window.history.replaceState(null, '', '/')

    renderApp()

    expect(screen.getByText('Personal Interview Demo')).toBeInTheDocument()

    act(() => {
      i18n.changeLanguage('es')
    })

    expect(screen.getByText('Demo de entrevista personal')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /guardar búsqueda/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /limpiar búsqueda/i }),
    ).toBeInTheDocument()
  })

  it('persists language preference to localStorage', () => {
    window.history.replaceState(null, '', '/')

    renderApp()

    const langSelect = screen.getByRole('combobox', {
      name: /language|idioma/i,
    })

    fireEvent.change(langSelect, { target: { value: 'es' } })

    expect(localStorage.getItem('pr-atlas:language')).toBe('"es"')
    expect(screen.getByText('Demo de entrevista personal')).toBeInTheDocument()
  })

  it('renders nav links for search and dashboard', () => {
    window.history.replaceState(null, '', '/')

    renderApp()

    expect(screen.getByRole('link', { name: /^search$/i })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /^dashboard$/i }),
    ).toBeInTheDocument()
  })

  it('accepts autocomplete suggestion with Tab key', () => {
    window.history.replaceState(null, '', '/')

    renderApp()

    const input = getSearchInput()

    fireEvent.change(input, { target: { value: 'deboun' } })

    fireEvent.keyDown(input, { key: 'Tab' })

    expect(input).toHaveValue('debounced search')
  })

  it('accepts autocomplete suggestion with ArrowRight at end of input', () => {
    window.history.replaceState(null, '', '/')

    renderApp()

    const input = getSearchInput() as HTMLInputElement

    fireEvent.change(input, { target: { value: 'deboun' } })

    Object.defineProperty(input, 'selectionStart', { value: 6, writable: true })
    fireEvent.keyDown(input, { key: 'ArrowRight' })

    expect(input).toHaveValue('debounced search')
  })

  it('does not accept suggestion when ArrowRight is pressed mid-input', () => {
    window.history.replaceState(null, '', '/')

    renderApp()

    const input = getSearchInput() as HTMLInputElement

    fireEvent.change(input, { target: { value: 'deboun' } })

    Object.defineProperty(input, 'selectionStart', { value: 3, writable: true })
    fireEvent.keyDown(input, { key: 'ArrowRight' })

    expect(input).toHaveValue('deboun')
  })

  it('toggles debug mode with Ctrl+Shift+D', () => {
    window.history.replaceState(null, '', '/')

    renderApp()

    expect(screen.queryByText('DEBUG')).not.toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'D', ctrlKey: true, shiftKey: true })

    expect(screen.getByText('DEBUG')).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'D', ctrlKey: true, shiftKey: true })

    expect(screen.queryByText('DEBUG')).not.toBeInTheDocument()
  })

  it('lazy-loads the dashboard page at /dashboard', async () => {
    vi.useRealTimers()

    window.history.replaceState(null, '', '/dashboard')

    renderApp()

    await waitFor(() => {
      expect(screen.getByText(/coverage analytics/i)).toBeInTheDocument()
    })
  })
})
