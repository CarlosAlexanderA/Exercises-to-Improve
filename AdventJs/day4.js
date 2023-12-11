function decode (message) {
  // Code here
  let myMessage = message
  while (myMessage.includes('(')) {
    const indexFin = myMessage.indexOf(')')
    const indexIni = myMessage.slice(0, indexFin).lastIndexOf('(')
    const beforeMessage = myMessage.slice(indexIni, indexFin + 1)
    let afterMessage = myMessage.slice(indexIni + 1, indexFin)
    // revert message
    afterMessage = afterMessage.split('').reverse().join('')
    myMessage = myMessage.replace(beforeMessage, afterMessage)
  }
  return myMessage
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// ? 1. Invertimos el anidado -> sa(ualcatn)s
// ? 2. Invertimos el que queda -> santaclaus
const test5 = decode('((nta)(sa))') // ! no seejecuta bien en esta parte
console.log(test5) // santa
// (atnas)

// console.log(decode('sa(u(cla)atn)s'))
