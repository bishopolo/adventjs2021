# 🎯 1️⃣

| [Link reto 🔗](https://2021.adventjs.dev/challenges/19) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

## Solución

```ts
function learn(time: number, courses: number[]) {
  let combinations = [];

  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      if (courses[i] + courses[j] <= time) {
        combinations.push([i, j]);
      }
    }
  }

  let bestCombination = null;
  let maxTime = 0;
  //   console.log(combinatios);

  for (let [i, j] of combinations) {
    let currentTime = courses[i] + courses[j];
    if (currentTime > maxTime) {
      maxTime = currentTime;
      bestCombination = [i, j];
    }
    if (currentTime === time) {
      return [i, j];
    }
  }

  return bestCombination;
}
```
