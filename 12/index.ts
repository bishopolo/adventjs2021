function getMinJump(obstacles: number[]) {
  let maxNumber = Math.max(...obstacles);
  let freeNumbers: number[] = [];
  let finalNumber: number[] = [];

  for (let i = 2; i <= maxNumber; i++) {
    if (!obstacles.includes(i)) freeNumbers.push(i);
  }

  for (let i = 0; i < freeNumbers.length; i++) {
    let once = freeNumbers[i] * 2;
    let twice = freeNumbers[i] * 3;

    // console.log(once, twice)
    if (!obstacles.includes(once) && !obstacles.includes(twice))
      finalNumber.push(freeNumbers[i]);
  }

  return freeNumbers.length === 1 ? freeNumbers[0] : finalNumber[0];
}

// getMinJump([5, 3, 6, 7, 9]); // -> 4
getMinJump([2, 4, 6, 8, 10]); // -> 7
// getMinJump([3, 7, 5]) // -> 2
// getMinJump([1, 2, 3, 5]) // -> 4
// getMinJump([9, 5, 1]); // -> 2
/* 
[2, 4, 6, 8, 10] // 7
getMinJump([1, 2, 3, 5]) // -> 4
getMinJump([3, 7, 5]) // -> 2
[2, 4, 6]

getMinJump([9, 5, 1]) // -> 2

*/
