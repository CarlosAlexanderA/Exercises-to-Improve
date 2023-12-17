function createChristmasTree (ornaments, height) {
  let result = ''
  let index = 0
  for (let i = 1; i <= height; i++) {
    const sumHeight = i * 2 - 1
    result += ' '.repeat(height - i)
    for (let j = 1; j <= sumHeight; j++) {
      result += j % 2 === 0 ? ' ' : ornaments[index++ % ornaments.length]
    }
    result += '\n'
    if (i === height) {
      result += ' '.repeat(height - 1).concat('|\n')
    }
  }
  return result
}
console.log(createChristmasTree('xo45', 4))
console.log(0 % 2)
// 1
// 2 3
// 1 2 3
// 1 2 3 1
//  |

//  *
//  @ o
// * @ o
//   |

// "  x
//  x x
// x x x
//   |
// "
