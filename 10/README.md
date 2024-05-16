# 🎯 1️⃣0️⃣ La maquina de cambio 🪙🪙🪙

| [Link reto 🔗](https://2021.adventjs.dev/challenges/10) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que calcula el mínimo número de monedas que debemos usar para dar el cambio de una compra en metálico.

Las monedas para cambio que puedes usar son estas:

```ts
coins[0] = 1 céntimo
coins[1] = 2 céntimos
coins[2] = 5 céntimos
coins[3] = 10 céntimos
coins[4] = 20 céntimos
coins[5] = 50 céntimos
```

Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.

```ts
getCoins(51); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
```

La dificultad del reto está en saber utilizar correctamente una estructura que te permita conocer las monedas que tienes disponible para crear el array con la devolución, ya que debes usar siempre el menor número de monedas posible. ¡Suerte 👩‍💻👨‍💻!.

## Solución

1️⃣ creamos un array con las coins de los valores que tenemos, luego otro array de 6 positions que es el que vamos a retornar, una variable que va a contener el length del array de coins que usaremos en un for mas adelante

```ts
function getCoins(change: number) {
  const coins = [1, 2, 5, 10, 20, 50];
  const totalCoins: number[] = Array(6).fill(0);
  const lengthTotalCoins = totalCoins.length;
}
```

2️⃣ creamos un for que va a iniciar con el ultimo valor del array coins, e ira decrementando, tenemos que verificar si el **change** es mayor que 0 para luego hacer el calculo de si ese valor de coin nos sirve para dar cambio, si este calculo es mayor que 0 significa que vamos a devolver n cantidad de esta moneda, luego tenemos que saber cuanto es el valor que nos dan la cantidad de estas modas porque eso lo tenemos que restar al **change**, luego en nuestro array en la posicion actual ponemos la cantidad de monedas a devolver

```ts
function getCoins(change: number) {
  const coins = [1, 2, 5, 10, 20, 50];
  const totalCoins: number[] = Array(6).fill(0);
  const lengthTotalCoins = totalCoins.length;

  for (let i = lengthTotalCoins - 1; i >= 0; i--) {
    if (change > 0) {
      let calc = Math.floor(change / coins[i]);
      if (calc > 0) {
        let tmpTotal = calc * coins[i];
        totalCoins[i] = calc;
        change -= tmpTotal;
      }
    }
  }
  return totalCoins;
  // console.log(totalCoins);
}
```
