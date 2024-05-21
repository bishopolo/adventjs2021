# 🎯 1️⃣3️⃣ Envuelve regalos con asteriscos 🎁🎁🎁

| [Link reto 🔗](https://2021.adventjs.dev/challenges/13) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.

Sólo tienes que tener en cuenta unas cosillas ✌️:

Si el array está vacío, devuelve un array vacío
Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
Por suerte, cada posición del array siempre tiene la misma longitud...

```ts
wrapGifts(["📷", "⚽️"]);
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"]);
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(["📷"]);
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
```

## Solución

1️⃣ creamos una variable que va a ser un array donde pondremos los regalos envueltos, luego validamos si no hay nada en el array que nos pasan retornamos un `[]`, luego creamos una variable que es la que me va a decir la cantidad de `*` para envolver al inicio y final del array, puedde ser 4 o 6

```ts
function wrapGifts(gifts: string[]) {
  let newArr: string[] = [];
  if (gifts.length === 0) return [];
  let quantityAsterisks = gifts[0].length === 2 ? 4 : 6;
  newArr.push("*".repeat(quantityAsterisks));
}
```

2️⃣ ya nos queda hacer un `for of` del array de regalos que nos pasan, y este lo envolvemos con `*` en ambos lados y lo ponemos en nuestro nuevo array, luego de este ciclo enviamos la cantidad de asteristicos que pusimos al inicio

```ts
function wrapGifts(gifts: string[]) {
  let newArr: string[] = [];
  if (gifts.length === 0) return [];
  let quantityAsterisks = gifts[0].length === 2 ? 4 : 6;
  newArr.push("*".repeat(quantityAsterisks));
  for (let x of gifts) {
    newArr.push(`*${x}*`);
    // console.log(x);
  }
  newArr.push("*".repeat(quantityAsterisks));
  //   console.log(newArr);
  return newArr;
}
```
