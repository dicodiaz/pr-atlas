import { useCallback, useEffect, useRef, useState } from 'react'

interface UseDebouncedValueResult<T> {
  debouncedValue: T
  flush: (nextValue: T) => void
}

export function useDebouncedValue<T>(
  value: T,
  delay: number,
): UseDebouncedValueResult<T> {
  const [debouncedValue, setDebouncedValue] = useState(value)
  const timeoutIdRef = useRef<number | null>(null)

  const clearPendingTimeout = useCallback(() => {
    if (timeoutIdRef.current !== null) {
      window.clearTimeout(timeoutIdRef.current)
      timeoutIdRef.current = null
    }
  }, [])

  const flush = useCallback(
    (nextValue: T) => {
      clearPendingTimeout()
      setDebouncedValue(nextValue)
    },
    [clearPendingTimeout],
  )

  useEffect(() => {
    clearPendingTimeout()

    timeoutIdRef.current = window.setTimeout(() => {
      setDebouncedValue(value)
      timeoutIdRef.current = null
    }, delay)

    return clearPendingTimeout
  }, [clearPendingTimeout, delay, value])

  return { debouncedValue, flush }
}
