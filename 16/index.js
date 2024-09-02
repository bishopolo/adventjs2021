"use strict";
function decodeNumbers(symbols) {
  const elficsymbols = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100,
  };
  let tpmTotal = [];
  let total = 0;
  for (let i = 0; i < symbols.length; i++) {
    if (symbols[i] in elficsymbols) {
      tpmTotal.push(
        +symbols[i].replace(symbols[i], elficsymbols[symbols[i]].toString())
      );
    } else {
      return NaN;
    }
  }
  // console.log(tpmTotal);
  total = tpmTotal[tpmTotal.length - 1];
  for (let i = tpmTotal.length - 1; i > 0; i--) {
    if (tpmTotal[i] > tpmTotal[i - 1]) {
      total = total - tpmTotal[i - 1];
    } else {
      total = total + tpmTotal[i - 1];
    }
    // console.log(total);
  }
  return total;
}
console.log(decodeNumbers(".;!"));
// console.log(decodeNumbers("..."));
/*
09 de agosto 2024
decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN
*/
