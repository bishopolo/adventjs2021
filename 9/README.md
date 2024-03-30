# 🎯 9️⃣ Agrupando cosas automáticas 📦📦📦

| [Link reto 🔗](https://2021.adventjs.dev/challenges/09) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

En la fábrica de Papa Noél 🎅 se acerca el día especial... y todavía tenemos un montón de cosas por contar. 😅

Por suerte a Mark Zucktheelf 🧝 se le ha ocurrido crear una función que permita agrupar un array, que puede ser de valores u objetos, a través de una función o de una propiedad.

Nos trae un montón de ejemplos:

```ts
groupBy([6.1, 4.2, 6.3], Math.floor); // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(["one", "two", "three"], "length"); // { 3: ['one', 'two'], 5: ['three'] }
groupBy([{ age: 23 }, { age: 24 }], "age"); // { 23: [{age: 23}], 24: [{age: 24}] }

groupBy([1397639141184, 1363223700000], (timestamp) =>
  new Date(timestamp).getFullYear()
);
// { 2013: [1363223700000], 2014: [1397639141184] }

groupBy(
  [
    { title: "JavaScript: The Good Parts", rating: 8 },
    { title: "Aprendiendo Git", rating: 10 },
    { title: "Clean Code", rating: 9 },
  ],
  "rating"
);
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }
```

Como ves, la función groupBy recibe una colección (array) y una función o una propiedad, y devuelve un objeto con claves que son los valores de la función ejecutada pasando como argumento cada elemento o de la propiedad por cada elemento. Luego los valores son un array de los valores que tengan la misma llave.

La dificultad del reto está más en comprender la función que en la implementación. ¡Suerte!.

## Solución

```ts
function groupBy(collection: any, it: any) {
  let obj: any = {};
  let isFunction = typeof it === "function" ? true : false;

  for (let prop of collection) {
    if (isFunction) {
      if (it(prop) in obj) {
        obj[it(prop)] = [...obj[it(prop)], prop];
      } else {
        // console.log(prop);
        obj[it(prop)] = [prop];
      }
    } else if (it === "length") {
      if (prop.length in obj) {
        // console.log(prop)
        obj[prop.length] = [...obj[prop.length], prop];
      } else {
        obj[prop.length] = [prop];
      }
    } else {
      if (typeof prop === "object") {
        let tmp: any = {};
        for (let key in prop) {
          tmp[key] = prop[key];
          if (typeof prop[key] === "number") {
            obj[prop[key]] = [];
            obj[prop[key]].push(tmp);
          }
        }
      }
    }
  }

  // console.log(obj);
  return obj;
}
```
