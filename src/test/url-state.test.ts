import { getQueryFromUrl, setQueryInUrl } from '@/lib/url-state'

describe('url-state', () => {
  it('returns an empty string when the search query parameter is missing', () => {
    window.history.replaceState(null, '', '/topics')

    expect(getQueryFromUrl()).toBe('')
  })

  it('reads the search query parameter from the url', () => {
    window.history.replaceState(null, '', '/topics?q=request+tracing')

    expect(getQueryFromUrl()).toBe('request tracing')
  })

  it('writes a trimmed query into the url', () => {
    window.history.replaceState(null, '', '/topics')

    setQueryInUrl('  request tracing  ')

    expect(window.location.pathname).toBe('/topics')
    expect(window.location.search).toBe('?q=request+tracing')
  })

  it('removes the search query parameter when the next query is blank', () => {
    window.history.replaceState(null, '', '/topics?q=request+tracing#results')

    setQueryInUrl('   ')

    expect(window.location.pathname).toBe('/topics')
    expect(window.location.search).toBe('')
    expect(window.location.hash).toBe('#results')
  })

  it('does not replace history when the next path is unchanged', () => {
    window.history.replaceState(null, '', '/topics?q=request+tracing#results')
    const replaceStateSpy = vi.spyOn(window.history, 'replaceState')

    setQueryInUrl('request tracing')

    expect(replaceStateSpy).not.toHaveBeenCalled()
  })
})
