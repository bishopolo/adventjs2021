function canCarry(capacity: number, trip: number[][]) {
  let gifts = 0;
  let events = [];

  // Crear eventos de recogida y entrega
  for (let [count, pickup, drop] of trip) {
    // donde recoge y cuantos recoge
    events.push([pickup, count]);
    // donde entrega y la cantidad entregada
    events.push([drop, -count]);
  }
  //    console.log(events)

  // Ordenar eventos de menor a mayor ya que puede recoger un paquete y entregarlo ahí mismo o recoger mas pequetes antes de que entregue alguno entonces puede que ya haya recogido mas paquetes de los que puede cargar
  events.sort((a, b) => a[0] - b[0]);
  // console.log(events)

  for (let [_, change] of events) {
    // sumamos los paquetes que recoge y cuando los entrega como es número negativo que es el que agregamos -count, entonces lleva la cuenta de cuantos recoge y cuantos entrega, y verificamos si supera el límite
    gifts += change;
    console.log(gifts);
    if (gifts > capacity) {
      return false;
    }
  }

  return true;
}

canCarry(4, [
  [2, 5, 8],
  [3, 6, 10],
]); // false
/* 
canCarry(4, [[2, 5, 8], [3, 6, 10]]) // false
// En el punto 5 recoge 2 regalos...
// En el punto 6 recoge 3 regalos...
// Del punto 6 al 8 tendría 5 regalos en total
// Y su capacidad es 4... así que ¡no podría!

canCarry(3, [[1, 1, 5], [2, 2, 10]]) // true
// En el punto 1 recoge 1 regalo...
// En el punto 2 recoge 2 regalos...
// En el punto 5 entrega 1 regalo...
// En el punto 10 entrega 2 regalos...
// ¡Sí puede! Nunca superó la carga máxima de 3 regalos

canCarry(3, [[2, 1, 5],[3, 5, 7]]) // true -> nunca supera el máximo de capacidad
canCarry(4, [[2, 3, 8],[2, 5, 7]]) // true -> del punto 5 al 7 lleva 4 regalos y no supera el máximo

canCarry(1, [[2, 3, 8]]) // false -> no podría ni con el primer viaje
canCarry(2, [[1, 2, 4], [2, 3, 8]]) // false -> del punto 3 al 4 supera la capacidad máxima porque llevaría 3 regalos

*/
