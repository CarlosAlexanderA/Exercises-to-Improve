function alphabetPosition(text) {
  let mynewTest = [];
  text.split(' ').forEach((item) => {
    const myItem = item.toLowerCase();
    const textLenght = myItem.length;
    let textFinal = [];
    for (let i = 0; i < textLenght; i++) {
      if (myItem[i].charCodeAt() < 97 || myItem[i].charCodeAt() > 122) continue;

      const calculating = myItem[i].charCodeAt() - 96;

      textFinal.push(calculating);
    }

    mynewTest.push(textFinal.join(' '));
    if (mynewTest[0] === '') mynewTest.shift();
  });

  return mynewTest.join(' ');
}
// a = 97 and z = 122
// console.log(alphabetPosition('The narwhal bacons at midnight.'));
// // ecpect => "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
// // result => "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// // ecpect => "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
// // result => "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

console.log(alphabetPosition('% }|z4]v'));
