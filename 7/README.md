# 🎯 7️⃣ Buscando en el almacén 🏪🏪🏪

| [Link reto 🔗](https://2021.adventjs.dev/challenges/07) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos unos ejemplos:

```ts
const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}
            
contains(almacen, 'camiseta') // true

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}
```
  
contains(otroAlmacen, 'gameboy') // false
Ten en cuenta que la tienda es enorme. Tiene diferentes almacenes y, como has visto en los ejemplos, cada uno puede tener diferentes organizaciones.Lo importante es buscar que el producto está en los almacenes.

## Solución

primero aclarar que este ejercicio se me hizo complicado ya que la forma mas óptima que pensaba era recursividad, pero no podia solucionarlo porque si lo hacia como pensaba tenia que crear una variable por fuera de la funcioón porque si la creaba adentro se volvia a crear de nuevo, entonces hice fue crear un `clousure`

1️⃣ crear una variable que contiene un array donde vamos a ir guardando los valores que vamos encontrando en el objeto

```ts
function contains(store: any, product: string) {
  let allProducts: string[] = [];
}
```

2️⃣ procedemos a crear una función que es la que vamos a llamar de forma recursiva, dentro de esta creamor un `for in` para recorrer cada propiedad del objeto

```ts
function x(store: any, product: string) {
  for (let item in store) {
  }
}
```

3️⃣ creo una variable que va a contener el valor de cada propiedad por la que se vaya iterando, luego dentro de un `if` valido si ese valor es igual al que estoy buscando, si es true, ese valor lo agrego al array que se creó al incio, caso contrario valido si ese valor es un `objeto`, en caso de serlo llamo de nuevo a la función con el nuevo objeto para que lo itere, esto se repetirá hasta que recorra todas las propiedades del objeto, si encuentra el valor que deseo lo agrega al array, caso contrario no agrega nada.

```ts
function contains(store: any, product: string) {
  let allProducts: string[] = [];
  function x(store: any, product: string) {
    for (let item in store) {
      let tmpItem = store[item];
      if (product === tmpItem) {
        allProducts.push(tmpItem);
      }
      if (typeof tmpItem === "object") {
        x(tmpItem, product);
      }
    }
  }
}
```

4️⃣ por fuera de la función proceso a llamarla con los mismos parámetros, en el return ya lo que hago es mirar si el array incluye el producto que buscamos, si es correcto retorno true, caso contrario false

```ts
function contains(store: any, product: string) {
  let allProducts: string[] = [];

  function x(store: any, product: string) {
    for (let item in store) {
      let tmpItem = store[item];
      if (product === tmpItem) {
        allProducts.push(tmpItem);
      }
      if (typeof tmpItem === "object") {
        x(tmpItem, product);
      }
    }
  }
  x(store, product);

  return allProducts.includes(product) ? true : false;
}
```
