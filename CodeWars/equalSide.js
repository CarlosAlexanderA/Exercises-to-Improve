// Se le dará una serie de números enteros. Su trabajo es tomar esa matriz y encontrar un índice N donde la suma de los números enteros a la izquierda de N sea igual a la suma de los números enteros a la derecha de N. Si no hay ningún índice que haga que esto suceda, regrese -1.

// Por ejemplo:

// Digamos que se le proporciona la matriz {1,2,3,4,3,2,1}:
// su función devolverá el índice 3, porque en la tercera posición de la matriz, la suma del lado izquierdo del índice ( {1,2,3}) y la suma del lado derecho del índice ( {3,2,1}) son iguales 6.

// Veamos otro.
// Se le proporciona la matriz {1,100,50,-51,1,1}:
// su función devolverá el índice 1, porque en la primera posición de la matriz, la suma del lado izquierdo del índice ( {1}) y la suma del lado derecho del índice ( {50,-51,1,1}) son iguales 1.

// El último:
// se le proporciona la matriz. {20,10,-80,10,10,15,35}
// En el índice 0, el lado izquierdo es {}
// El lado derecho es {10,-80,10,10,15,35}
// Ambos son iguales 0cuando se suman. (Las matrices vacías son iguales a 0 en este problema)
// El índice 0 es el lugar donde el lado izquierdo y el lado derecho son iguales.

// Nota: Recuerde que en la mayoría de los lenguajes de programación/scripting el índice de una matriz comienza en 0.

// Entrada:
// una matriz de números enteros de longitud 0 < arr < 1000. Los números de la matriz pueden ser cualquier número entero positivo o negativo.

// Salida:
// El índice más bajo Ndonde el lado a la izquierda de Nes igual al lado a la derecha de N. Si no encuentra un índice que se ajuste a estas reglas, devolverá -1.

// Nota:
// Si se le proporciona una matriz con varias respuestas, devuelva el índice correcto más bajo.

function findEvenIndex(arr) {
  //Code goes here!
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    const arrLeft = arr.slice(0, i + 1).reduce((a, b) => a + b);
    const arrRight = arr.slice(i).reduce((a, b) => a + b);
    if (arrLeft === arrRight) {
      return i;
    }
  }
  return -1;
}

console.log('index');
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
