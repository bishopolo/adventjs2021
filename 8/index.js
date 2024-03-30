"use strict";
function maxProfit(prices) {
    let profits = [];
    for (let i = 0; i < prices.length; i++) {
        for (let j = i; j < prices.length; j++) {
            if (prices[j] > prices[i]) {
                profits.push(prices[j] - prices[i]);
            }
        }
    }
    return (profits.length >= 1 ? Math.max(...profits) : -1);
}
const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
maxProfit(pricesBtc); // -> 16 (compra a 18, vende a 34)
const pricesEth = [10, 20, 30, 40, 50, 60, 70];
maxProfit(pricesEth); // -> 60 (compra a 10, vende a 70)
