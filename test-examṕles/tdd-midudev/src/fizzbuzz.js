export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('Not is a number')
  if (Number.isNaN(number)) throw new Error('parameter provided must be a number')

  const multiplies = { 3: 'fizz', 5: 'buzz' }
  let output = ''

  // * de esta manera escala mejor al añadir los datos de cada uno de estos que con un if
  Object.entries(multiplies).forEach(([multiplier, word]) => {
    if (number % multiplier === 0) output += word
  })

  return output === '' ? number : output
}
