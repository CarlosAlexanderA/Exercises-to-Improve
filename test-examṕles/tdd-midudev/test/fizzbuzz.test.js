import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
  // !este test es redundante
  // it('should be a function ', () => {
  //   expect(typeof fizzbuzz).toBe('function')
  // })
  it('should throw if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })
  it('should throw a specific error message if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow(/number/)
  })
  it('should throw a specific error message not a number is provided', () => {
    expect(() => fizzbuzz(NaN)).toThrow('parameter provided must be a number')
  })
  it('should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })
  it('should return "fizz" if number provided is multiple 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })
  it('should return "buzz" if number provided is multiple 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
  })
  it('should return "fiz<buzz" if number provided is multiple 5 and 3', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(30)).toBe('fizzbuzz')
    expect(fizzbuzz(45)).toBe('fizzbuzz')
  })
})
