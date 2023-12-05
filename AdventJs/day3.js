function findNaughtyStep (original, modified) {
  // Code here
  let result = ''
  for (let i = 0; i < original.length; i++) {
    if (original[i] !== modified[i]) {
      result = original.length > modified.length ? original[i] : modified[i]
      break
    }
  }
  if (modified.length > original.length && result === '') {
    result = modified[original.length]
  }
  return result
}

const original = 'abcd'
const modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'
console.log(findNaughtyStep(original2, modified2)) // 'f'

const original3 = 'abcde'
const modified3 = 'abcxef'
console.log(findNaughtyStep(original3, modified3)) // ''
