# 🎯 1️⃣1️⃣ ¿Vale la pena la tarjeta fidelidad del cine? 🎫🎫🎫

| [Link reto 🔗](https://2021.adventjs.dev/challenges/11) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

Este mes de diciembre hay películas super interesantes en el cine... y tengo que optimizar cómo gasto el dinero.

Mi cine favorito tiene dos posibilidades:

• Entrada de un sólo uso: Cuesta 12$ por cada película.

• Tarjeta de fidelidad: Cuesta 250$ pero que cada vez que vas pagas sólo el 75% del precio del ticket. ¡Lo mejor es que se acumula! Y cada vez que vas, se paga el 75% del precio del ticket que pagaste la última vez.
Ejemplo de cada una al comprar 3 entradas y el precio que pagaría en total:

```ts
// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$
```

Necesito una función que, al pasarle las veces que voy a ir al cine, me diga si vale la pena comprar la tarjeta fidelidad o no.

```ts
shouldBuyFidelity(1); // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100); // true -> Mejor comprar tarjeta fidelidad
```

La dificultad del reto está en encontrar una fórmula sencilla que nos diga el precio con descuento acumulado para la tarjeta fidelidad. 😜

## Solución

1️⃣ creamos 3 variables la primera es la del precio normal del ticket, la segunda el valor que tiene la tarjeta y la ultima es el primer precio de la boleta con descuento

```ts
function shouldBuyFidelity(times: number) {
  let normalTicket = 12 * times;
  let fidelityCard = 250;
  let tmpValue = 12 * 0.75;
}
```

2️⃣ luego creamos un bucle for para iterar sobre la cantidad de tickets y le vamos sumando a la variable del valor de la tarjeta el descuento que vamos teniendo de cada ticket, ya que en cada iteracion vamos obteniendo el 75% de cada ticket anterior, ya devolvemos true si el valor con la tarjeta de fidelidad es menor al valor de un ticket normal

```ts
function shouldBuyFidelity(times: number) {
  let normalTicket = 12 * times;
  let fidelityCard = 250;
  let tmpValue = 12 * 0.75;

  for (let i = 1; i <= times; i++) {
    // console.log(tmpValue)
    fidelityCard += tmpValue;
    tmpValue *= 0.75;
  }
  // console.log(fidelityCard, normalTicket);
  return fidelityCard < normalTicket ? true : false;
}
```

