# 🎯 1️⃣

| [Link reto 🔗](https://2021.adventjs.dev/challenges/23) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

## Solución

## este ejercicio no lo pude resolver, por lo que la respuesta es de chat gpt

```ts
function canReconfigure(from: string, to: string): boolean {
  if (from.length !== to.length) return false;

  const mapFromTo = new Map();
  const mapToFrom = new Map();

  for (let i = 0; i < from.length; i++) {
    const fromChar = from[i];
    const toChar = to[i];

    if (
      (mapFromTo.has(fromChar) && mapFromTo.get(fromChar) !== toChar) ||
      (mapToFrom.has(toChar) && mapToFrom.get(toChar) !== fromChar)
    ) {
      return false;
    }

    mapFromTo.set(fromChar, toChar);
    mapToFrom.set(toChar, fromChar);
  }

  return true;
}
```
