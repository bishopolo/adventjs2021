# 🎯 1️⃣2️⃣ La ruta perfecta para dejar los regalos 🚆🚆🚆

| [Link reto 🔗](https://2021.adventjs.dev/challenges/12) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

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
