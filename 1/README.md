# 🎯 1 Contando ovejas para dormir 🐑🐑🐑


|[Link reto 🔗](https://2021.adventjs.dev/challenges/01)|[Solucion 👨🏻‍💻](#solución) |[Inicio 🏠](../README.md)|
|-|-|-|

Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color **rojo** y que además su nombre contenga tanto las letras **n** Y **a**, sin importar el orden, las mayúsculas o espacios.

Por ejemplo, si tenemos las ovejas:

```js
const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];
```

Al ejecutar el método debería devolver lo siguiente:

```js
const ovejasFiltradas = contarOvejas(ovejas);
console.log(ovejasFiltradas);

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
```

Recuerda. Debe contener las dos letras 'a' y 'n' en el nombre. No cuentes ovejas que sólo tenga una de las letras, debe tener ambas.

## Solución

1️⃣ Creamos una interface para que solo el objeto de ovejas tenga las dos propiedades **name**, **color** y ambas sean del tipo string, esto se lo pasamos al parámetro de la función que creamos y al retorno de la misma para que solo retorne un array de ese tipo de objetos

```ts
interface typeOvejas {
  name: string;
  color: string;
}

const ovejas: typeOvejas[] = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

function contarOvejas(objOvejas: typeOvejas[]): typeOvejas[] {
  return objOvejas;
}
```

2️⃣ Ahora vamos a recorrer el array de objetos usando un for of, y verificamos por la propiedad **color** que sea rojo, si es true entonces volvemos a verificar pero por la propiedad **name** que debe incluir las dos letras n y a

```ts
function contarOvejas(objOvejas: typeOvejas[]): typeOvejas[] {
  const newArrayOvejas: typeOvejas[] = [];

  for (let obj of objOvejas) {
    if (obj.color === "rojo") {
      if (
        obj.name.toLocaleLowerCase().includes("n") &&
        obj.name.toLocaleLowerCase().includes("a")
      ) {
        newArrayOvejas.push({
          name: obj.name,
          color: obj.color,
        });
      }
    }
  }
  return newArrayOvejas;
}

console.log(contarOvejas(ovejas));

/*
[
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' }
]
*/
```

3️⃣ Otra alternativa es hacer un filter, de esta forma es mas sencillo ya que no tenemos que crear un array nuevo y pushear los valores como lo hacíamos atras, con filter podemos retornar directamente

```ts
function contarOvejas(objOvejas: typeOvejas[]): typeOvejas[] {
  return objOvejas.filter((val) => {
    if (val.color === "rojo") {
      if (
        val.name.toLocaleLowerCase().includes("a") &&
        val.name.toLocaleLowerCase().includes("n")
      ) {
        return val;
      }
    }
  });
}

console.log(contarOvejas(ovejas));
```
