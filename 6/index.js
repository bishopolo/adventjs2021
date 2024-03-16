function sumPairs(numbers, result) {
    var lengthArray = numbers.length - 1;
    var finalArray = [];
    for (var i = 0; i <= lengthArray; i++) {
        for (var j = i + 1; j <= lengthArray; j++) {
            if (numbers[i] + numbers[j] === result) {
                finalArray.push(numbers[i]);
                finalArray.push(numbers[j]);
            }
        }
        if (finalArray.length === 2)
            break;
    }
    return finalArray.length ? finalArray : null;
}
sumPairs([-3, -2, 7, -5], 10); // null
sumPairs([3, 5, 7, 2], 10); // [3, 7]
/*
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([3, 5, 7, 2], 10) // [3, 7]
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([2, 2, 3, 1], 4) // [2, 2]
sumPairs([6, 7, 1, 2], 8) // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]

*/
