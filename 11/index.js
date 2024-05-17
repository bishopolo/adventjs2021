"use strict";
function shouldBuyFidelity(times) {
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
/*
// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$
*/
console.log(shouldBuyFidelity(3));
