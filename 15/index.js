"use strict";
function checkSledJump(heights) {
    let maxNumber = Math.max(...heights);
    let minNumber = Math.min(...heights);
    let maxIndexNumber = heights.indexOf(maxNumber);
    let secondIndexMinNumher = heights.indexOf(minNumber, maxIndexNumber);
    // console.log({maxIndexNumber, secondIndexMinNumher})
    if (heights[secondIndexMinNumher] <= heights[secondIndexMinNumher + 1])
        return false;
    if (heights[heights.length - 1] === maxNumber)
        return false;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] === heights[i + 1])
            return false;
    }
    return true;
}
console.log(checkSledJump([1, 2, 3, 2, 1, 2]));
// console.log(checkSledJump([0, 3, 2, 1]));
/*

done 29 julio 2024

checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
checkSledJump([1, 2, 3]) // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!

*/
