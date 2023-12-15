function organizeGifts (gifts) {
  // Code here
  let giftsCode = gifts
  let result = ''
  for (let i = 0; i < gifts.length; i++) {
    if (gifts[i].charCodeAt(0) >= 91 && gifts[i].charCodeAt(0) <= 122) {
      const index = giftsCode.indexOf(gifts[i])
      let newAlgo = Number(giftsCode.slice(0, index))
      giftsCode = giftsCode.slice(index + 1)
      let bag = ''
      while (newAlgo > 0) {
        if (newAlgo >= 50) {
          result += `[${gifts[i]}]`
          newAlgo -= 50
        } else if (newAlgo >= 10) {
          result += `{${gifts[i]}}`
          newAlgo -= 10
        } else {
          bag += `${gifts[i]}`
          newAlgo--
        }
      }
      bag = bag.length !== 0 ? `(${bag})` : ''
      result += bag
    }
  }
  return result
}

const result1 = organizeGifts('76a11b')
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)
*/
