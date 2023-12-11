function decode (message) {
  // Code here
  const myMessage = message.split(' ')
  const result = myMessage.map(item => {
    return algo(item)
  }).join(' ')
  return result
}

const algo = (mess) => {
  let arrAlgo = mess.split('')
  let i = 0
  if (mess.includes(')(') || mess.includes('()')) {
    const indexMid = arrAlgo.slice(0, mess.indexOf(')(') + 1)
    const indexPrev = indexMid.lastIndexOf('(')
    const newMessage1 = indexMid.slice(indexPrev).join('')
    console.log(mess.split(')('))
    const newMessage2 = arrAlgo.slice(mess.indexOf(')(') + 1, -1).join('')
    // console.log(typeof algo(newMessage1).concat(algo(newMessage2)).split(''))
    arrAlgo = [...arrAlgo.slice(0, indexPrev),
      [algo(newMessage1).concat(algo(newMessage2))],
      ...arrAlgo.slice(mess.indexOf(')('), -1)]
    // console.log(mess.indexOf(')('))
  }
  while (arrAlgo.includes('(') || arrAlgo.includes(')')) {
    if (i === 6) break
    const indexalgo = i % 2 === 0 ? arrAlgo.indexOf('(') : arrAlgo.indexOf(')')
    const lasintex = i % 2 === 0 ? arrAlgo.lastIndexOf(')') : arrAlgo.lastIndexOf('(')
    const newArr = arrAlgo.slice(indexalgo + 1, lasintex).reverse()
    // console.log(newArr)
    arrAlgo = [...arrAlgo.slice(0, indexalgo), ...newArr, ...arrAlgo.slice(lasintex + 1)]
    i++
    // if (arrAlgo.slice(indexalgo + 1).includes('(')) {
    //   console.log('entro')
    // }
  }
  return arrAlgo.join('')
}
// const a = decode('hola (odnum)')
// console.log(a) // hola mundo

// const b = decode('(olleh) (dlrow)!')
// console.log(b) // hello world!

// const c = decode('sa(u(cla)atn)s')
// console.log(c) // santaclaus

// Paso a paso:
// ? 1. Invertimos el anidado -> sa(ualcatn)s
// ? 2. Invertimos el que queda -> santaclaus
const test5 = decode('((nta)(sa))') // ! no seejecuta bien en esta parte
console.log(test5) // santa
// (atnas)

// console.log(decode('sa(u(cla)atn)s'))
