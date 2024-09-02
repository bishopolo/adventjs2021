# 🎯 1️⃣

| [Link reto 🔗](https://2021.adventjs.dev/challenges/16) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

## Solución

```ts
function decodeNumbers(symbols: string) {
  const elficsymbols: Record<string, number> = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100,
  };
  let tpmTotal: number | number[] = [];
  let total: number = 0;
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
```
