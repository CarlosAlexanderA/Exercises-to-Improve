function maxDistance (movements) {
  // Code here
  let positive = 0
  let negative = 0
  let count = 0
  for (let i = 0; i < movements.length; i++) {
    if (movements[i] === '>') {
      positive++
    } else if (movements[i] === '<') {
      negative++
    } else {
      count++
    }
  }
  let sum = positive - negative
  if (sum > 0) { sum += count } else { sum -= count }
  return Math.abs(sum)
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
