# 🎯 1️⃣2️⃣ La ruta perfecta para dejar los regalos 🚆🚆🚆

| [Link reto 🔗](https://2021.adventjs.dev/challenges/12) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

En el taller de Santa 🎅 se están preparando los trineos de motor eléctrico para poder hacer la ruta perfecta para dejar los regalos.

La ruta empieza en el punto 0 y de ahí va hacia la derecha en línea recta.

El Keanu Relfes 🧝 nos ha preparado una lista de obstáculos a evitar. El problema es que nos ha dado la lista de posiciones de los obstáculos desordenada... 😅 aunque al menos nunca la posición 0 puede tener un obstáculo.

Encima, el trineo sólo se puede configurar para saltar un número fijo de posiciones... 😱

Necesitamos una función que nos diga la longitud mínima del salto del trineo para ir evitando todos los obstáculos en la ruta.

```ts
const obstacles = [5, 3, 6, 7, 9];
getMinJump(obstacles); // -> 4

// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------
*/

const obstacles = [2, 4, 6, 8, 10];
getMinJump(obstacles); // -> 7

/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
S--------------------S---------

// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅

getMinJump([1, 2, 3, 5]) // -> 4
getMinJump([3, 7, 5]) // -> 2
getMinJump([9, 5, 1]) // -> 2
*/
```

La dificultad del reto está en pensar que sólo podemos configurar el salto del trineo una vez y que buscamos el salto mínimo que nos serviría para sortear todos los obstaculos.

## Solución

1️⃣ creamos tres variables, la primera es del number maximo del array, luego creamos dos variables que van a ser un array de numbers que luego usaremos, luego creamos un for el cual vamos a crear los numeros que no estan en el array de obstacles para saber las opciones de camino que hay, esto lo guardamos en la variable freeNumber.

```ts
function getMinJump(obstacles: number[]) {
  let maxNumber = Math.max(...obstacles);
  let freeNumbers: number[] = [];
  let finalNumber: number[] = [];

  for (let i = 2; i <= maxNumber; i++) {
    if (!obstacles.includes(i)) freeNumbers.push(i);
  }
}
```

2️⃣ luego creamos un for en este caso lo que haremos es que cada number de nuestro array que contiene los numeros que no estan en los obstacles los vamos a multiplicar por 2 y 3 para saber si estos son los caminos viables, entonces verificamos que si este numero al ser multiplicado por 2 y 3 no esta en el array de number es porque es viable para nuestra ruta de regalos, ya solo nos queda retornar el primer valor de ese array nuevo, pero en caso de que solo el array de los number que no estan en los obstacles tenga un solo number, ese es el que devolvemos

```ts
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
```
