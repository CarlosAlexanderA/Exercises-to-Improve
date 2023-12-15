function adjustLights (lights) {
  // Code here
  const myLights = [].concat(lights)
  const green = '🟢'
  const red = '🔴'
  let steps = 0
  // myLights.forEach((item, index) => {
  //   const prevItem = myLights[index - 1]
  //   console.log(prevItem)
  //   if (item === prevItem) {
  //     // console.log(item, index)
  //     myLights[index] = item === red ? green : red
  //     steps++
  //   }
  // })
  for (let i = myLights.length - 1; i >= 0; i--) {
    const afterItem = myLights[i + 1]
    if (myLights[i] === afterItem) {
      myLights[i] = myLights[i] === red ? green : red
      steps++
    }
  }
  return steps
}

adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']))
// -> 1 (cambia la primera luz a verde)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (ya están alternadas)

adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (cambias la segunda luz a 🟢)
