function cyberReindeer (road, time) {
  // Code here
  let newRoad = road.split('')
  let nowItem = '.'
  const result = []
  for (let i = 0; i < time; i++) {
    if (i !== 0) {
      const laterIndex = newRoad.lastIndexOf('S') + 1
      if (newRoad[laterIndex] !== '|') {
        newRoad[laterIndex - 1] = nowItem
        nowItem = newRoad[laterIndex]
        newRoad[laterIndex] = 'S'
      }
    }
    result.push(newRoad.join(''))
    if (i === 4) {
      newRoad = newRoad.map(item => { return item.includes('|') ? '*' : item })
    }
  }
  return result
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
console.log(result)
console.log(result.length)
