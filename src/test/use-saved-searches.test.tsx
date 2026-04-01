import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { useSavedSearches } from '@/lib/use-saved-searches'

const STORAGE_KEY = 'pr-atlas:saved-searches'

describe('useSavedSearches', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('initializes from localStorage', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(['react', 'vite']))

    const { result } = renderHook(() => useSavedSearches())

    expect(result.current.searches).toEqual(['react', 'vite'])
  })

  it('initializes to an empty array when localStorage is empty', () => {
    const { result } = renderHook(() => useSavedSearches())

    expect(result.current.searches).toEqual([])
  })

  it('saves a new query and persists it', () => {
    const { result } = renderHook(() => useSavedSearches())

    act(() => result.current.save('circuit breaker'))

    expect(result.current.searches).toEqual(['circuit breaker'])
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!)).toEqual([
      'circuit breaker',
    ])
  })

  it('prepends new saves to the front', () => {
    const { result } = renderHook(() => useSavedSearches())

    act(() => result.current.save('first'))
    act(() => result.current.save('second'))

    expect(result.current.searches).toEqual(['second', 'first'])
  })

  it('deduplicates case-insensitively', () => {
    const { result } = renderHook(() => useSavedSearches())

    act(() => result.current.save('React'))
    act(() => result.current.save('react'))
    act(() => result.current.save('REACT'))

    expect(result.current.searches).toEqual(['React'])
  })

  it('ignores empty or whitespace-only queries', () => {
    const { result } = renderHook(() => useSavedSearches())

    act(() => result.current.save(''))
    act(() => result.current.save('   '))

    expect(result.current.searches).toEqual([])
  })

  it('respects the max limit of 20', () => {
    const { result } = renderHook(() => useSavedSearches())

    for (let i = 0; i < 25; i++) {
      act(() => result.current.save(`query-${i}`))
    }

    expect(result.current.searches).toHaveLength(20)
    expect(result.current.searches[0]).toBe('query-24')
  })

  it('removes a saved search and persists', () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(['react', 'vite', 'tailwind']),
    )

    const { result } = renderHook(() => useSavedSearches())

    act(() => result.current.remove('vite'))

    expect(result.current.searches).toEqual(['react', 'tailwind'])
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!)).toEqual([
      'react',
      'tailwind',
    ])
  })
})
