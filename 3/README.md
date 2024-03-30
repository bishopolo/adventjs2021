# 🎯 2️⃣ Ayuda al elfo a contar los regalos 🎁🎁🎁

| [Link reto 🔗](https://2021.adventjs.dev/challenges/02) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| - | -| - |

Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un \_ delante de la palabra, por ejemplo `_playstation`, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:

```ts
const carta = 'bici coche balón _playstation bici coche peluche'
```

Al ejecutar el método debería devolver lo siguiente:

```ts
const regalos = listGifts(carta);

console.log(regalos);
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
```

Ten en cuenta que los tests pueden ser más exhaustivos... 😝 ¡Cuidado con contar espacios vacíos!

## Solución

1️⃣ creamos un type alias de un string de array; creamos una variable del nuevo type alias creado y convertimos la cadena a un array con el metodo split, separando por espacio ' ', luego filtramos para que excluya las palabras que inicie con \_

```ts
type stringArray = string[];
const carta = "bici coche balón _playstation bici coche peluche";

function listGifts(letter: string) {
  let arr: stringArray = letter
    .trim()
    .split(" ")
    .filter((el) => !el.startsWith("_"));
  console.log(arr);
}

listGifts(carta);
```

2️⃣ creamos un for of para recorrer cada uno de los elementos, dentro de el ponemos un console log para ver que si este imprimiendo los valores del array

```ts
type stringArray = string[];
const carta = "bici coche balón _playstation bici coche peluche";

function listGifts(letter: string) {
  let arr: stringArray = letter
    .trim()
    .split(" ")
    .filter((el) => !el.startsWith("_"));

  for (let word of arr) {
    console.log(word);
  }
  // console.log(arr);
}

listGifts(carta);

/* 
   bici
   coche
   balón
   bici
   coche
   peluche  
 */
```

3️⃣ creamos un objeto donde vamos a ir agregando las palabras y las veces que se repiten, pero para este objeto creamos una interface o type alias donde su key es un string y su value number, lo hacemos en una intergace o en el type con un Record

```ts
// type cartaArray = Record<string, number>
interface cartaArray {
  [key: string]: number;
}

let cartaObjeto: cartaArray = {};
```

4️⃣ por ultimo vamos agregar las palabras al nuevo objeto y las veces que se repiten, esto lo hacemos con un if donde primero verificamos que si no existen en el objeto las vamos agregar y ponemos que se repiten 1 vez, caso contrario si ya existe aumentamos + 1 su valor

```ts
type stringArray = string[];
// type cartaArray = Record<string, number>
interface cartaArray {
  [key: string]: number;
}
const carta = "bici coche balón _playstation bici coche peluche";

function listGifts(letter: string): cartaArray {
  let cartaObjeto: cartaArray = {};
  let arr: stringArray = letter
    .trim()
    .split(" ")
    .filter((el) => !el.startsWith("_"));

  for (let word of arr) {
    if (!(word in cartaObjeto)) {
      cartaObjeto[word] = 1;
    } else {
      cartaObjeto[word]++;
    }
  }
  return cartaObjeto;
}

console.log(listGifts(carta));
```
