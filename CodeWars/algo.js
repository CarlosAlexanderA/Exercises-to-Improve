String.prototype.toJadenCase = function () {
  let arrPhrase = this.split(' ');
  const newPhrase = arrPhrase.map((item) => {
    return item[0].toUpperCase() + item.slice(1);
  });
  return newPhrase.join(' ');
};
const miPhrase = "How can mirrors be real if our eyes aren't real";
console.log(miPhrase.toJadenCase());
