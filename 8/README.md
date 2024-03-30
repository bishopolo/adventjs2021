# 🎯 8️⃣ La locura de las criptomonedas 🪙🪙🪙

| [Link reto 🔗](https://2021.adventjs.dev/challenges/08) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

Invertir en criptomonedas es casi un deporte de riesgo. El otro día hackearon Bitmart y ha hecho que el valor de Bitcoin, y otras monedas, bajase un 25%.

Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.

La lista de precios es un array de números y representa el tiempo de izquierda a derecha. Por lo que ten en cuenta que no puedes comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio que esté a la izquierda de la compra.

Por ejemplo:

```ts
const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
maxProfit(pricesBtc); // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70];
maxProfit(pricesEth); // -> 60 (compra a 10, vende a 70)
```

Si ese día no se puede sacar ningún beneficio, tenemos que devolver -1 para evitar que hagamos una locura:

```ts
const pricesDoge = [18, 15, 12, 11, 9, 7]
maxProfit(pricesDoge) = // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
maxProfit(pricesAda) = // -> -1 (no hay ganancia posible)
```

## Solución


1️⃣ creamos un array de profits donde vamos metiendo las posibles ganancias 

```ts
function maxProfit(prices: number[]) {
  let profits = [];
}
```
2️⃣ vamos a crear un `for` para recorrer todos los prices que nos dan en el array, luego creamos otro `for` para comparar este valor con el resto de los elementos del array.

```ts
function maxProfit(prices: number[]) {
  let profits = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
    }
  }
}
```
3️⃣ luego verificamos que el elemento actual sea mayor a los demas, si es así agregamos al array creado la ganancia que nos da esa venta, y eso lo hacemos restando el valor actual con el siguiente 

```ts
function maxProfit(prices: number[]) {
  let profits = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        profits.push(prices[j] - prices[i]);
      }
    }
  }
   return (profits.length >= 1 ? Math.max(...profits) : -1);
}

```
4️⃣ ya solo retornamos el valor mas alto en nuestro array de ganancias si nuestro array tiene algo, caso contrario retornamos -1

```ts
function maxProfit(prices: number[]) {
  let profits = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        profits.push(prices[j] - prices[i]);
      }
    }
  }
   return (profits.length >= 1 ? Math.max(...profits) : -1);
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
maxProfit(pricesBtc); // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70];
maxProfit(pricesEth); // -> 60 (compra a 10, vende a 70)
```
