# 🎯 1️⃣4️⃣ En busca del reno perdido 🫎🫎🫎

| [Link reto 🔗](https://2021.adventjs.dev/challenges/14) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱

Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, Elfon Musk ha hecho inventario y nos pasa un array con los ids de cada reno.

👍 Lo bueno: los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno.

👎 Lo malo: la lista está desordenada y podría faltar el último...

Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:

```ts
missingReindeer([0, 2, 3]); // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]); // -> 4
missingReindeer([0, 1]); // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]); // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]); // -> 8
missingReindeer([0]); // -> 1 (¡es el último el que falta!)
```

Parece fácil con una complejidad de O(n)... ¿crees que podrías hacerlo mejor?

## Solución

1️⃣ creamos una variable que con tiene todo el array ordenado, luego creamos una variable que contiene el length del array, ya que este es cuando el for no encuentra el id faltante, usamos el length y esta es la oveja que hace falta, luego creamos un for para recorrer el array ordenado y si el array no tiene el valor en aquella iteracion, significa que esa es la que hace falta

```ts
function missingReindeer(ids: number[]) {
  let newIds = ids.toSorted((a, b) => a - b);
  let missingNum = newIds.length;
  for (let i = 0; i < newIds.length; i++) {
    if (!newIds.includes(i)) return i;
  }
  console.log(missingNum);
  return missingNum;
}
```

otra alternativa mas facil es solo usando el for, que la condition sea igual el length y este ultimo nos da el que hace falta, ya que el ultimo indice del array que iteramos va a ser undefined porque no existe pero aca solo hacemos esto es para saber si el valor de la variable i la tiene el array de ids.

```ts
function missingReindeer(ids: number[]) {
  let newIds = ids.toSorted((a, b) => a - b);
  for (let i = 0; i <= newIds.length; i++) {
    if (!newIds.includes(i)) return i;
  }
}
```
