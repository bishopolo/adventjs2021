type stringArray = string[];
// type cartaArray = Record<string, number>
interface cartaArray {
  [key: string]: number;
}
const carta = "bici coche balón _playstation bici coche peluche ";

function listGifts(letter: string): cartaArray {
  let cartaObjeto: cartaArray = {};
  let arr: stringArray = letter.trim().split(" ").filter((el) => !el.startsWith("_"));

  for (let word of arr) {
    if (!(word in cartaObjeto)) {
      cartaObjeto[word] = 1;
    } else {
      cartaObjeto[word]++;
    }
  }
  return cartaObjeto;
}

console.log(listGifts(carta));
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
