const SEARCH_PARAM = 'q'

export const getQueryFromUrl = (): string => {
  return new URLSearchParams(window.location.search).get(SEARCH_PARAM) ?? ''
}

export const setQueryInUrl = (query: string): void => {
  const nextUrl = new URL(window.location.href)
  const trimmedQuery = query.trim()

  if (trimmedQuery.length > 0) {
    nextUrl.searchParams.set(SEARCH_PARAM, trimmedQuery)
  } else {
    nextUrl.searchParams.delete(SEARCH_PARAM)
  }

  const nextPath = `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`
  const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`

  if (nextPath !== currentPath) {
    window.history.replaceState(null, '', nextPath)
  }
}
