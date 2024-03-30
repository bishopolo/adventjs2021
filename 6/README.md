# 🎯 6️⃣ Rematando los exámenes finales 🧮🧮🧮

| [Link reto 🔗](https://2021.adventjs.dev/challenges/06) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

Antes de poder disfrutar de la navidad... nos toca terminar de rematar los exámenes finales. ¡Y toca un poco de matemáticas! 😱

A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces pueden haber más de dos valores que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.

Si no se encuentra, se devuelve `null`.

Veamos unos ejemplos:

```ts
sumPairs([3, 5, 7, 2], 10); // [3, 7]
sumPairs([-3, -2, 7, -5], 10); // null
sumPairs([2, 2, 3, 1], 4); // [2, 2]
sumPairs([6, 7, 1, 2], 8); // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6); // [1, 5]
```

El resultado tiene que ser un **array con dos números**.

Una vez que tengas el resultado... ¿cómo podrías hacer que fuese lo más óptimo posible para no tener que recorrer las mismas situaciones dos veces 🤔?

## Solución

1️⃣ primero creamos una variable para obtener el length del array y creamos el array donde vamos a tener a almacenar los dos números

```ts
function sumPairs(numbers: number[], result: number) {
  let lengthArray = numbers.length - 1;
  let finalArray: number[] = [];
}
```

2️⃣ ahora creamos dos `for` el primero selecciona cada uno de los items, el segundo va a recorrer desde la posición que tenga ese item hasta el final del array, ya que con esto lo que hacemos es que cogemos el primer item y lo suma con el siguiente item, y así hasta encontrar dos números que su suma de el valor esperado, para luego agregarlos en el array que creamos al incio, al final verificamos que si el array tiene una longitud de 2, salga del bucle, porque puede suceder que haya otros dos números que nos den el resultado deseado, pero acá necesitamos solo los dos primeros.

```ts
function sumPairs(numbers: number[], result: number) {
  let lengthArray = numbers.length - 1;
  let finalArray: number[] = [];

  for (let i = 0; i <= lengthArray; i++) {
    for (let j = i + 1; j <= lengthArray; j++) {
      if (numbers[i] + numbers[j] === result) {
        finalArray.push(numbers[i]);
        finalArray.push(numbers[j]);
      }
    }
    if (finalArray.length === 2) break;
  }
}
```

3️⃣ ya solo tenemos que retornar el array si tiene algo, caso contrario ponemos `null`

```ts
function sumPairs(numbers: number[], result: number) {
  let lengthArray = numbers.length - 1;
  let finalArray: number[] = [];

  for (let i = 0; i <= lengthArray; i++) {
    for (let j = i + 1; j <= lengthArray; j++) {
      if (numbers[i] + numbers[j] === result) {
        finalArray.push(numbers[i]);
        finalArray.push(numbers[j]);
      }
    }
    if (finalArray.length === 2) break;
  }

  return finalArray.length ? finalArray : null;
}
```

```
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([3, 5, 7, 2], 10) // [3, 7]
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([2, 2, 3, 1], 4) // [2, 2]
sumPairs([6, 7, 1, 2], 8) // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]

```