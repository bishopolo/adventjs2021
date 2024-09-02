# 🎯 1️⃣

| [Link reto 🔗](https://2021.adventjs.dev/challenges/21) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

## Solución

## tenía idea de como solucionarlo pero al final usé chat gpt para terminarlo

```ts
let gifts = 0;
let events = [];

// Crear eventos de recogida y entrega
for (let [count, pickup, drop] of trip) {
  // donde recoge y cuantos recoge
  events.push([pickup, count]);
  // donde entrega y la cantidad entregada
  events.push([drop, -count]);
}
//    console.log(events)

// Ordenar eventos de menor a mayor ya que puede recoger un paquete y entregarlo ahí mismo o recoger mas pequetes antes de que entregue alguno entonces puede que ya haya recogido mas paquetes de los que puede cargar
events.sort((a, b) => a[0] - b[0]);
// console.log(events)

for (let [_, change] of events) {
  // sumamos los paquetes qie recoge y cuando los entrega como es número negativo que es el que agregamos -count, entonces lleva la cuenta de cuantos recoge y cuantos entrega, y verificamos si supera el límite
  gifts += change;
  console.log(gifts);
  if (gifts > capacity) {
    return false;
  }
}

return true;
```
