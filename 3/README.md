# 🎯 3️⃣ El Grinch quiere fastidiar la Navidad 👹👹👹

| [Link reto 🔗](https://2021.adventjs.dev/challenges/03) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |


El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis `()`.

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves `{` y corchetes `[` dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:

```ts
"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
```

Crea una función que pasándole el texto de la carta, devuelva `true` si es válida y `false` si no lo es. ¡Y acaba con la travesura del Grinch!


## Solución

1️⃣ Buscamos que haya `(`, y luego verificamos que si haya `)`

```ts
function isValid(letter: string) {
  let getIndexofFirstParenthesis = letter.indexOf("(") + 1;
  let getIndexofLastParenthesis = letter.indexOf(")");
  let stringInsideParenthesis = letter.slice(
    getIndexofFirstParenthesis,
    getIndexofLastParenthesis
  );

  if (getIndexofLastParenthesis !== -1) {
  }
}
```

2️⃣ en este paso ya sabemos que hay paréntesis `()`, ahora tenemos que verificar que no contenga `[,],{,},(,)` para esto vamos a crear un regex que nos simplifica el trabajo ya que la otra forma sería hacer `includes('{')` por cada uno de los carácteres entonces sería muy extensa la sentencia.

```ts
function isValid(letter: string): boolean {
  let getIndexofFirstParenthesis = letter.indexOf("(") + 1;
  let getIndexofLastParenthesis = letter.indexOf(")");
  let stringInsideParenthesis = letter.slice(
    getIndexofFirstParenthesis,
    getIndexofLastParenthesis
  );
  let regex = /[\{\}\[\]\(\)]/;

  if (getIndexofLastParenthesis !== -1) {
    if (regex.test(stringInsideParenthesis)) return false;
  }
}
```

3️⃣ en caso de que no contenga nada de estos carácteres, solo nos toca verificar que si tenga texto entre `()` y es facil porque con la propiedad length si nos da 0 entonces es false porqueno hay nada pero si nos da otro valor indica que si hay texto dentro.

```ts
function isValid(letter: string): boolean {
  let getIndexofFirstParenthesis = letter.indexOf("(") + 1;
  let getIndexofLastParenthesis = letter.indexOf(")");
  let stringInsideParenthesis = letter.slice(
    getIndexofFirstParenthesis,
    getIndexofLastParenthesis
  );
  let regex = /[\{\}\[\]\(\)]/;

  if (getIndexofLastParenthesis !== -1) {
    if (regex.test(stringInsideParenthesis)) return false;
    if (stringInsideParenthesis.length) return true;
  }
}
```

4️⃣ ya acá solo nos queda por retornar false ya que la cadena de texto no es válida por no cumplir nada de estos criterios.

```ts
function isValid(letter: string): boolean {
  let getIndexofFirstParenthesis = letter.indexOf("(") + 1;
  let getIndexofLastParenthesis = letter.indexOf(")");
  let stringInsideParenthesis = letter.slice(
    getIndexofFirstParenthesis,
    getIndexofLastParenthesis
  );

  let regex = /[\{\}\[\]\(\)]/;

  if (getIndexofLastParenthesis !== -1) {
    if (regex.test(stringInsideParenthesis)) return false;
    if (stringInsideParenthesis.length) return true;
  }

  return false;
}
```
