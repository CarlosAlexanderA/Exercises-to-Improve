function checkIsValidCopy (original, copy) {
  for (let i = 0; i < copy.length; i++) {
    if (copy.length !== original.length) return false
    if (original[i] === ' ' && copy[i] !== ' ') return false

    if (copy[i] === '#' || copy[i] === '+' || copy[i] === ':' || copy[i] === '.' || copy[i] === ' ') {
      const codAssci = original[i] >= 97 && original[i] <= 122
      if (codAssci || copy[i] === '#' || copy[i] === '+' || copy[i] === ':' || copy[i] === '.' || copy[i] === ' ') {
        console.log('assci')
        continue
      }
    }
    const isUpper = copy[i].toUpperCase() === copy[i] && original[i].toLowerCase() === original[i]
    if (isUpper) {
      // console.log('upper ' + copy[i])
      return false
    }
    if (copy[i].toLowerCase() !== original[i].toLowerCase()) return false
  }
  return true
}
// console.log(
//   checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#') // true
// )
// console.log(
//   checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#'))

// Test: checkIsValidCopy('Santa Claus', 's#+:.#c:. s') // !false
// console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s'))
// Test: checkIsValidCopy('S#nta Claus', 'S#ntA ClauS') // !false
// console.log(checkIsValidCopy('S#nta Claus', 'S#ntA ClauS'))

// ? i don't know how resolve this problem,but so i can resolve this problem but a want get the score high

// console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // *false

console.log(checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s')) // *false
