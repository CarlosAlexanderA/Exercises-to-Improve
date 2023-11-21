// Cree un programa que filtre una lista de cadenas y devuelva una lista que contenga solo el nombre de sus amigos.

// Si un nombre tiene exactamente 4 letras, ¡puedes estar seguro de que tiene que ser un amigo tuyo! De lo contrario, puedes estar seguro de que no...

// Ejemplo: Entrada = ["Ryan", "Kieran", "Jason", "Tú"], Salida = ["Ryan", "Tú"]

// es decir

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Nota: mantenga el orden original de los nombres en la salida.

function friend(friends) {
  //your code here
  return (myFriends = friends.filter((item) => item.length === 4));
}

console.log(friend(['Ryan', 'Kieran', 'Mark']));
