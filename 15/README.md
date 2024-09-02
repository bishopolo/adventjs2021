# 🎯 1️⃣4️⃣ En busca del reno perdido 🫎🫎🫎

| [Link reto 🔗](https://2021.adventjs.dev/challenges/15) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

## Solución

```ts
function checkSledJump(heights: number[]) {
  let maxNumber = Math.max(...heights);
  let minNumber = Math.min(...heights);

  let maxIndexNumber = heights.indexOf(maxNumber);
  let secondIndexMinNumher = heights.indexOf(minNumber, maxIndexNumber);

  // console.log({maxIndexNumber, secondIndexMinNumher})
  if (heights[secondIndexMinNumher] <= heights[secondIndexMinNumher + 1])
    return false;
  if (heights[heights.length - 1] === maxNumber) return false;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] === heights[i + 1]) return false;
  }
  return true;
}

console.log(checkSledJump([1, 2, 3, 2, 1, 2]));
```
