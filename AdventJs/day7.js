function drawGift (size, symbol) {
  // Code here
  let result = ''
  const maxSize = size * 2 - 1
  let blanck = maxSize - size
  let otherBlanck = maxSize - 1
  for (let i = 0; i < maxSize; i++) {
    if (blanck < 0) {
      for (let j = 0; j < maxSize; j++) {
        if (j < otherBlanck) {
          result += (j > 0 && j < size - 1 && i !== maxSize - 1) || (j > size - 1 && j < otherBlanck - 1) ? symbol : '#'
        } else {
          result += ''
        }
      }
      otherBlanck--
    } else {
      for (let j = 0; j < maxSize; j++) {
        if (j < blanck) {
          result += ' '
        } else {
          result += ((j > blanck && j < maxSize - i - 1 && i !== size - 1) || (j > size + blanck - 1 && j < maxSize - 1)) && i !== 0 ? symbol : '#'
        }
      }
      blanck--
    }
    result += '\n'
  }
  return result
}
console.log(drawGift(4, '+'))

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, '*'))
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(1, '^'))
/*
#
*/

// Expected:
// "   ####
//   #++##
//  #++#+#
// ####++#
// #++#+#
// #++##
// ####
// "

// Actual:
// "   ####
//   #++##
//  #++#+#
// ####++#
// #++#+#
// #++##
// ####
// "
