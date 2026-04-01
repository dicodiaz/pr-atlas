import { afterEach, describe, expect, it, vi } from 'vitest'

import { storage } from '@/lib/storage'

describe('storage', () => {
  afterEach(() => {
    localStorage.clear()
  })

  describe('get', () => {
    it('returns the fallback when the key is missing', () => {
      expect(storage.get('missing', 42)).toBe(42)
    })

    it('returns the parsed value when the key exists', () => {
      localStorage.setItem('nums', JSON.stringify([1, 2, 3]))

      expect(storage.get('nums', [])).toEqual([1, 2, 3])
    })

    it('returns the fallback on corrupt JSON', () => {
      localStorage.setItem('bad', '{not json')

      expect(storage.get('bad', 'default')).toBe('default')
    })
  })

  describe('set', () => {
    it('persists a JSON-serialized value', () => {
      storage.set('key', { a: 1 })

      expect(JSON.parse(localStorage.getItem('key')!)).toEqual({ a: 1 })
    })

    it('silently handles quota exceeded', () => {
      const spy = vi
        .spyOn(Storage.prototype, 'setItem')
        .mockImplementation(() => {
          throw new DOMException('quota exceeded')
        })

      expect(() => storage.set('key', 'value')).not.toThrow()

      spy.mockRestore()
    })
  })

  describe('remove', () => {
    it('deletes the key', () => {
      localStorage.setItem('key', '"value"')
      storage.remove('key')

      expect(localStorage.getItem('key')).toBeNull()
    })
  })
})
