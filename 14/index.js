"use strict";
function missingReindeer(ids) {
    let newIds = ids.toSorted((a, b) => a - b);
    let missingNum = newIds.length;
    for (let i = 0; i < newIds.length; i++) {
        if (!newIds.includes(i))
            return i;
    }
    console.log(missingNum);
    return missingNum;
}
// console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])); // -> 4
// missingReindeer([0, 2, 3]) // -> 1
// missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
console.log(missingReindeer([1])); // -> 2 (¡es el último el que falta!)
// missingReindeer([3, 0, 1]) // -> 2
// console.log(missingReindeer([])) // -> 1 (¡es el último el que falta!)
/*


*/
