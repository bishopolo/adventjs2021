var carta = "bici coche balón _playstation bici coche peluche ";
function listGifts(letter) {
    var cartaObjeto = {};
    var arr = letter.trim().split(" ").filter(function (el) { return !el.startsWith("_"); });
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var word = arr_1[_i];
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
