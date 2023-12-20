function getIndexsForPalindrome (word) {
  const isPalindrome = (text) => {
    if (text.split('').reverse().join('') === text) { return true }
  }
  if (isPalindrome(word)) {
    return []
  }
  const myWord = [].concat(word.split(''))
  for (let i = 0; i < word.length; i++) {
    for (let j = 1; j < myWord.length; j++) {
      const copyMyWord = [].concat(myWord)
      const firstLetter = myWord[i]
      const secondLetter = myWord[j]
      copyMyWord[i] = secondLetter
      copyMyWord[j] = firstLetter
      if (isPalindrome(copyMyWord.join(''))) {
        return [i, j]
      }
      // console.log(copyMyWord)
    }
    // console.log('-------------')
  }

  return null
}
console.log(getIndexsForPalindrome('anna'))// []
console.log(getIndexsForPalindrome('abab')) // [0, 1]
console.log(getIndexsForPalindrome('abac')) // null
console.log(getIndexsForPalindrome('aaaaaaaa')) // []
console.log(getIndexsForPalindrome('aaababa')) // [1, 3]
console.log(getIndexsForPalindrome('caababa')) // null
