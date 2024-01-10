import { describe, expect, it } from 'vitest'

const canReConfigure = (from, to) => {
  if (typeof from !== 'string') throw new Error('from is not a string')

  if (typeof to !== 'string') throw new Error('to is not a string')
  const isSameLength = from.length === to.length
  if (!isSameLength) return false

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size

  if (!hasSameUniqueLetters) return false

  const transformations = {}
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storedLetter = transformations[fromLetter]

    // if (storedLetter && storedLetter !== toLetter) return false
    if (storedLetter !== toLetter) return false

    transformations[fromLetter] = toLetter
  }

  return true
}

describe('can-reconfigure', () => {
  it('should be a function', () => {
    expect(canReConfigure).toBeTypeOf('function')
  })

  it('should throw if first parameter is missing', () => {
    expect(() => canReConfigure()).toThrow()
  })

  it('should throw if first parameter is not a string', () => {
    expect(() => canReConfigure(2)).toThrow()
  })

  it('should throw if first parameter is not a string', () => {
    expect(() => canReConfigure('a')).toThrow()
  })

  it('should return a boolean', () => {
    expect(canReConfigure('a', 'b')).toBeTypeOf('boolean')
  })

  it('should return false if strings provided have different length', () => {
    expect(canReConfigure('abc', 'bc')).toBe(false)
  })

  it('should return false if strings provided have different length even with same unique letters', () => {
    expect(canReConfigure('aab', 'ab')).toBe(false)
  })

  it('should return false if strings provided have different number of unique letters', () => {
    expect(canReConfigure('abc', 'ddd')).toBe(false)
  })

  it('should return false if strings has different order of transformation', () => {
    expect(canReConfigure('XBOX', 'XXBO')).toBe(false)
  })
})
