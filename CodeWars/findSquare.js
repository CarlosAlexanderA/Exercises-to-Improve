// Quizás conozcas algunos cuadrados perfectos bastante grandes. ¿Pero qué pasa con el SIGUIENTE?

// Complete el findNextSquaremétodo que encuentra el siguiente cuadrado integral perfecto después del pasado como parámetro. Recuerde que un cuadrado integral perfecto es un número entero n tal que sqrt(n) también es un número entero.

// Si el parámetro en sí no es un cuadrado perfecto, entonces -1se debe devolver. Puede asumir que el parámetro no es negativo.

// Ejemplos:(Entrada --> Salida)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  const num = Math.sqrt(sq);
  return Number.isInteger(num) ? (num + 1) ** 2 : -1;
}

console.log(findNextSquare(120));
