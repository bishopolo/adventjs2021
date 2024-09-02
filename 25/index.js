"use strict";
function canMouseEat(direction, game) {
    let mousePositions = [];
    for (let i = 0; i < game.length; i++) {
        for (let j = 0; j < game[i].length; j++) {
            if (game[i][j] === "m") {
                mousePositions.push(i, j);
            }
            // console.log(game[i][j]);
        }
    }
    const directions = {
        up: () => (mousePositions[0] -= 1),
        left: () => (mousePositions[1] -= 1),
        right: () => (mousePositions[1] += 1),
        down: () => (mousePositions[0] += 1),
    };
    directions[direction]();
    const [row, column] = mousePositions;
    // console.log(mousePositions)
    return (row >= 0 &&
        row < game.length &&
        column >= 0 &&
        column < game[row].length &&
        game[row][column] === "*");
}
const room = [
    [" ", " ", " "],
    [" ", " ", "m"],
    [" ", " ", "*"],
];
console.log(canMouseEat("up", room), // false
canMouseEat("down", room), // true
canMouseEat("right", room), // false
canMouseEat("left", room) // false
);
const room2 = [
    ["*", " ", " ", " "],
    [" ", "m", "*", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", "*"],
];
console.log(canMouseEat("up", room2), // false
canMouseEat("down", room2), // false
canMouseEat("right", room2), // true
canMouseEat("left", room2) // false
);
/*



*/
