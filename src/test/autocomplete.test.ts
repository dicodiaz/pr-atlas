import { describe, expect, it } from 'vitest'

import { buildDictionary, getSuggestion } from '@/lib/autocomplete'
import { topics } from '@/data/topics'

describe('buildDictionary', () => {
  const dictionary = buildDictionary(topics)

  it('returns a sorted array of strings', () => {
    const sorted = [...dictionary].sort()
    expect(dictionary).toEqual(sorted)
  })

  it('contains no duplicates', () => {
    expect(new Set(dictionary).size).toBe(dictionary.length)
  })

  it('contains normalized topic names', () => {
    expect(dictionary).toContain('uses language metaprogramming techniques')
  })

  it('contains normalized tags', () => {
    expect(dictionary).toContain('javascript')
  })

  it('contains normalized contribution names', () => {
    expect(dictionary).toContain('debounced search')
  })

  it('filters out empty strings', () => {
    expect(dictionary).not.toContain('')
  })
})

describe('getSuggestion', () => {
  const dictionary = buildDictionary(topics)

  it('returns null for empty input', () => {
    expect(getSuggestion('', dictionary)).toBeNull()
  })

  it('returns null when no match exists', () => {
    expect(getSuggestion('zzzznonexistent', dictionary)).toBeNull()
  })

  it('returns a suggestion for a matching prefix', () => {
    const result = getSuggestion('deboun', dictionary)
    expect(result).toBe('debounced search')
  })

  it('preserves the original casing of user input', () => {
    const result = getSuggestion('Deboun', dictionary)
    expect(result).toBe('Debounced search')
  })

  it('is case-insensitive for matching', () => {
    const lower = getSuggestion('java', dictionary)
    const upper = getSuggestion('JAVA', dictionary)

    expect(lower).not.toBeNull()
    expect(upper).not.toBeNull()
    expect(lower!.toLowerCase()).toBe(upper!.toLowerCase())
  })

  it('returns the full string when typed matches exactly', () => {
    const result = getSuggestion('javascript', dictionary)
    expect(result).toBe('javascript')
  })
})
