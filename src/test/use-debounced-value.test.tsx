import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { useDebouncedValue } from '@/lib/use-debounced-value'

describe('useDebouncedValue', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.runOnlyPendingTimers()
    vi.useRealTimers()
  })

  it('returns the latest value only after the delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebouncedValue(value, delay),
      {
        initialProps: { value: 'observability', delay: 250 },
      },
    )

    expect(result.current.debouncedValue).toBe('observability')

    rerender({ value: 'rollback notes', delay: 250 })

    expect(result.current.debouncedValue).toBe('observability')

    act(() => {
      vi.advanceTimersByTime(250)
    })

    expect(result.current.debouncedValue).toBe('rollback notes')
  })

  it('cleans up the previous timer when the value changes quickly', () => {
    const clearTimeoutSpy = vi.spyOn(window, 'clearTimeout')

    const { result, rerender, unmount } = renderHook(
      ({ value, delay }) => useDebouncedValue(value, delay),
      {
        initialProps: { value: 'first', delay: 250 },
      },
    )

    rerender({ value: 'second', delay: 250 })
    rerender({ value: 'third', delay: 250 })

    act(() => {
      vi.advanceTimersByTime(249)
    })

    expect(result.current.debouncedValue).toBe('first')

    act(() => {
      vi.advanceTimersByTime(1)
    })

    expect(result.current.debouncedValue).toBe('third')

    unmount()

    expect(clearTimeoutSpy).toHaveBeenCalled()
  })

  it('flushes the next value immediately', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebouncedValue(value, delay),
      {
        initialProps: { value: 'observability', delay: 250 },
      },
    )

    rerender({ value: 'rollback notes', delay: 250 })

    act(() => {
      result.current.flush('rollback notes')
    })

    expect(result.current.debouncedValue).toBe('rollback notes')

    act(() => {
      vi.advanceTimersByTime(250)
    })

    expect(result.current.debouncedValue).toBe('rollback notes')
  })
})
