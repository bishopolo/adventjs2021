# 🎯 5️⃣ Contando los días para los regalos ⏰⏱️⏳

| [Link reto 🔗](https://2021.adventjs.dev/challenges/05) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆.

Para ayudar a esto, vamos a crear una función que pasándole una instancia de `Date` nos diga el número de días que faltan.

Veamos unos ejemplos:

```ts
const date1 = new Date("Dec 1, 2021");
daysToXmas(date1); // 24
const date2 = new Date("Dec 24, 2021 00:00:01");
daysToXmas(date2); // 1
const date3 = new Date("Dec 24, 2021 23:59:59");
daysToXmas(date3); // 1
const date4 = new Date("December 20, 2021 03:24:00");
daysToXmas(date4); // 5
```

El resultado tiene que ser un número entero y, como ves, aunque falte un segundo hasta el siguiente día, se entiende que todavía falta un día.

¡Pero ojo! También hay que indicar si la fecha es del mismo día (devolveríamos `0`) o si es una fecha futura (devolveríamos el número de días en negativo `-`):

```ts
const date = new Date("Dec 25, 2021");
daysToXmas(date); // 0
const date1 = new Date("Dec 26, 2021");
daysToXmas(date1); // -1
const date2 = new Date("Dec 31, 2021");
daysToXmas(date2); // -6
const date3 = new Date("Jan 1, 2022 00:00:01");
daysToXmas(date3); // -7
const date4 = new Date("Jan 1, 2022 23:59:59");
daysToXmas(date4); // -7
```

Por cierto, la fecha de referencia para saber si es 25 de diciembre es `Dec 25, 2021`.

## Solución

1️⃣ primero creamos la fecha objetivo que es el 25 de diciembre

```ts
function daysToXmas(date: Date): number {
  let targetDate = new Date("Dec 25, 2021");
}
```

2️⃣ luego vamos a restar la fecha objetivo con la que nos dan, yo hago un casteo a number usando`+` pero tambien se puede usar `Number()` para obtener los milisegundos de esta resta, ya que TS me marca error si no hago ese casteo, en js no hay que hacerlo, también se puede hacer con `getTime()`

```ts
function daysToXmas(date: Date): number {
  let targetDate = new Date("Dec 25, 2021");
  let miliseconds = +targetDate - +date;
}
```

3️⃣ con los milisegundos obtenidos ya empezamos a hacer las operaciones para obtener los días que hacen falta o los que ya pasaron, hice todo directo en el return, para no hacer esto en más variables, pero es sencillo.

- divido por `/ 1000` que esto es un milisegundo, esto me devuelve los `segundos`
- divido por `/ 60` que esto son los segundos que hay en un minuto, obtengo los `minutos`
- divido por `/ 60` que esto son los minutos que hay en una hora, obtengo las `horas`
- divido por `/ 24` que esto son las horas que hay en un día, obtengo los `días`
- todo esto lo envuelvo en `Math.ceil` ya que si me dan un fecha con horas, por ejemplo: `Dec 23, 2021 15:30:00` esto me devuelve decimales que indican las horas que hacen falta para llegar al día 24 y un día para el `25`, entonces con esto lo que hago es que devuelve el número que le sigue que en este caso es el 2

```ts
function daysToXmas(date: Date): number {
  let targetDate = new Date("Dec 25, 2021");
  let miliseconds = +targetDate - +date;

  return Math.ceil(miliseconds / 1000 / 60 / 60 / 24);
}

const date1 = new Date("Dec 23, 2021 23:59:59");
console.log(daysToXmas(date1)); // 2
```
