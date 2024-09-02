# 🎯 1️⃣

| [Link reto 🔗](https://2021.adventjs.dev/challenges/17) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

## Solución

```ts
function countPackages(carriers: any, carrierID: string): number {
  let total = 0;
  let tmpCarriers: string[] = [];
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
```
