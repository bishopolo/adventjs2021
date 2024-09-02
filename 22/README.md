# 🎯 1️⃣

| [Link reto 🔗](https://2021.adventjs.dev/challenges/22) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

## Solución

```ts
function countDecorations(bigTree: any) {
  let total = 0;

  function getTotal(bigTree: any) {
    for (const key in bigTree) {
      // const { value, right, left } = bigTree[key];
      // console.log(value, right, left);
      if (key === "value") {
        // console.log(bigTree[key]);
        total += bigTree[key];
      }

      if (key === "left" && typeof bigTree[key] === "object") {
        getTotal(bigTree[key]);
      }

      if (key === "right" && typeof bigTree[key] === "object") {
        // console.log(key)
        getTotal(bigTree[key]);
      }
      // console.log(bigTree[key]);
    }
  }

  getTotal(bigTree);

  // console.log(total);
  return total;
}
```
