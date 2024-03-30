"use strict";
const carta = "bici coche balón _playstation bici coche peluche ";
function listGifts(letter) {
    let cartaObjeto = {};
    let arr = letter.trim().split(" ").filter((el) => !el.startsWith("_"));
    for (let word of arr) {
        if (!(word in cartaObjeto)) {
            cartaObjeto[word] = 1;
        }
        else {
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
