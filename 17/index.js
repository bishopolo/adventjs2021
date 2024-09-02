"use strict";
function countPackages(carriers, carrierID) {
  let total = 0;
  let tmpCarriers = [];
  for (let i = 0; i < carriers.length; i++) {
    if (carriers[i][0] === carrierID) {
      total += +carriers[i][1];
      if (carriers[i][2].length > 0) {
        tmpCarriers.push(...carriers[i][2]);
      }
    }
    if (tmpCarriers.includes(carriers[i][0])) {
      total += +carriers[i][1];
      if (carriers[i][2].length > 0) {
        tmpCarriers.push(...carriers[i][2]);
      }
    }
  }
  //   console.log(tmpCarriers);
  return total;
}

// 12 agosto 2024
const carriers = [
  ["dapelu", 5, ["midu", "jelowing"]],
  ["midu", 2, []],
  ["jelowing", 2, []],
];
// console.log(countPackages(carriers, "dapelu")); // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9
const carriers2 = [
  ["lolivier", 8, ["camila", "jesuspoleo"]],
  ["camila", 5, ["sergiomartinez", "conchaasensio"]],
  ["jesuspoleo", 4, []],
  ["sergiomartinez", 4, []],
  ["conchaasensio", 3, ["facundocapua", "faviola"]],
  ["facundocapua", 2, []],
  ["faviola", 1, []],
];
console.log(countPackages(carriers2, "camila")); // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15
