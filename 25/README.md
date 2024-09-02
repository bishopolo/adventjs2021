# 🎯 1️⃣

| [Link reto 🔗](https://2021.adventjs.dev/challenges/25) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

## Solución

```ts
type directionsTypes = "up" | "right" | "left" | "down";

function canMouseEat(direction: directionsTypes, game: string[][]) {
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

  return (
    row >= 0 &&
    row < game.length &&
    column >= 0 &&
    column < game[row].length &&
    game[row][column] === "*"
  );
}
```
