# 🎯 4️⃣ ️¡Es hora de poner la navidad en casa! 🎄🎄🎄

| [Link reto 🔗](https://2021.adventjs.dev/challenges/04) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del` 1` a, como máximo,` 100`.

Si le pasamos el argumento `5`, se pintaría esto:

```
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
```

Creamos un triángulo de asteriscos `*` con la altura proporcionada y, a los lados, usamos el guión bajo `_` para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de `#`.

Otro ejemplo con un árbol de altura `3`:

```
__*__
_***_
*****
__#__
__#__
```

Ten en cuenta que el árbol es un string y necesitas los saltos de línea `\n` para cada línea para que se forme bien el árbol.

## Solución

1. primero creamos una variable para nuestro árbol, luego creamos un array con todos los número impares desde el 1 hasta el 100, que esa es la altura máxima de nuestro árbol

```ts
function createXmasTree(height: number) {
  let tree = "";
  let odd: number[] = [];
  for (let i = 0, j = 1; i < 99; i++, j += 2) {
    odd.push(j);
  }
}
```

2. luego obtenemos el número máximo de líneas que va a tener nuestro arbol, y esto se obtiene es en el array de impares que creamos, el índice va a ser el parámetro que nos pasan que es `height`.

```ts
function createXmasTree(height: number) {
  let tree = "";
  let odd: number[] = [];
  for (let i = 0, j = 1; i < 99; i++, j += 2) {
    odd.push(j);
  }
  let getMaxLines = odd[height - 1];
}
```

3. acá ya iniciamos a llenar nuestro árbol, creamos un`for` para la altura de nuestro arbol, y en este tambien creamos una variable que va a iniciar en 1 y se incrementa de 2 en 2 cada vez que se itera, ya que esta nos indica la cantidad de `*` que va a tener nuestro árbol, creamos un variable para el contenido, y luego tenemos que calcular luego la cantidad de `_` que va a tener cada fila del árbol
y finalmente una variable que nos va ayudar para saber si ya se llenó la fila con los `*`

```ts
function createXmasTree(height: number) {
  let tree = "";
  let odd:number[] = [];

  for (let i = 0, j = 1; i < 99; i++, j+=2){
    odd.push(j)
  }

  let getMaxLines = odd[height - 1]

  for (let i = 0, a = 1; i < height; i++, a += 2) {
    let content = '';
    let ltp = (getMaxLines - a) / 2;
    let tmp = 1;
  }
```

4. ahora lo que hacemos es crear otro `for` para recorrer por cada fila según el ancho que va a tener el árbol, verificamos que `j` sea menor o igual que la cantidad de `_` que tiene al inicio el árbol, cuando ya es mayor significa que ya tiene que rellenar con `*`, pero acá tenemos que verificar que sea la cantidad correcta y por eso usamos la variable `tmp` que inicia en 1 y se va incrementando si es que es mas de un `*`, al completar la cantidad necesaria en cada fila significa que debe terminar de rellenar con `_` el final de la fila, luego ya agregamos todo el contenido y al final del primer for agregamos `\n` para que la siguiente iteración inicie en una nueva línea.

```ts
function createXmasTree(height: number) {
  let tree = "";
  let odd: number[] = [];

  for (let i = 0, j = 1; i < 99; i++, j += 2) {
    odd.push(j);
  }

  let getMaxLines = odd[height - 1];

  for (let i = 0, a = 1; i < height; i++, a += 2) {
    let content = "";
    let ltp = (getMaxLines - a) / 2;
    let tmp = 1;
    for (let j = 1; j <= getMaxLines; j++) {
      if (j <= ltp) {
        content = "_";
      } else {
        if (tmp <= a) {
          content = "*";
          tmp++;
        } else {
          content = "_";
        }
      }
      tree += content;
    }
    tree += "\n";
  }
}
```

4. ya para terminar lo que tenemos que hacer es la parte del tronco, para esto debemos tambien crear dos `for`, pero con la ventaja que sabemos que siempre el tronco va a tener solo un `#`, lo que cambia en esta parte es que al momento de rellenar con `#` decimos que sea igual a 1 ya que solo es esa cantidad la necesaria, y la variable `tmp` la ponemos en `0` para que siga con el relleno final que son los `_`

```ts
function createXmasTree(height: number) {
  let tree = "";
  let odd: number[] = [];

  for (let i = 0, j = 1; i < 99; i++, j += 2) {
    odd.push(j);
  }

  let getMaxLines = odd[height - 1];

  for (let i = 0, a = 1; i < height; i++, a += 2) {
    let content = "";
    let ltp = (getMaxLines - a) / 2;
    let tmp = 1;
    for (let j = 1; j <= getMaxLines; j++) {
      if (j <= ltp) {
        content = "_";
      } else {
        if (tmp <= a) {
          content = "*";
          tmp++;
        } else {
          content = "_";
        }
      }
      tree += content;
    }
    tree += "\n";
  }

  for (let i = 0; i < 2; i++) {
    let content = "";
    let ltp = (getMaxLines - 1) / 2;
    let tmp = 1;
    for (let j = 1; j <= getMaxLines; j++) {
      if (j <= ltp) {
        content = "_";
      } else {
        if (tmp === 1) {
          content = "#";
          tmp = 0;
        } else {
          content = "_";
        }
      }

      tree += content;
    }

    if (i <= 0) tree += "\n";
  }

  return tree;
}
```

arbol con una altura de 5 y 10 líneas

```
____*____
___***___
__*****__
_*******_
*********
____#____
____#____


_________*_________
________***________
_______*****_______
______*******______
_____*********_____
____***********____
___*************___
__***************__
_*****************_
*******************
_________#_________
_________#_________

```
