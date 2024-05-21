function wrapGifts(gifts: string[]) {
  let newArr: string[] = [];
  if (gifts.length === 0) return [];
  let quantityAsterisks = gifts[0].length === 2 ? 4 : 6;
  newArr.push("*".repeat(quantityAsterisks));
  for (let x of gifts) {
    newArr.push(`*${x}*`);
    // console.log(x);
  }
  newArr.push("*".repeat(quantityAsterisks));
  //   console.log(newArr);
  return newArr;
}

wrapGifts(["👹", "🪙", "🎫"]);
wrapGifts(["👹🎯", "🎄🪙", "⏱️⏳"]);
// wrapGifts([]);
// wrapGifts([]);
