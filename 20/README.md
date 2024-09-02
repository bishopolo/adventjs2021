# 🎯 1️⃣

| [Link reto 🔗](https://2021.adventjs.dev/challenges/20) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

## Solución

```ts
function pangram(letter: string) {
  letter = letter.toLowerCase();

  const alphabet = "abcdefghijklmnñopqrstuvwxyz";
  const specialChars = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    ü: "u",
    ä: "a",
    ë: "e",
    ï: "i",
    ö: "o",
  };

  for (let char in specialChars) {
    if (letter.includes(char)) {
      letter = letter.replaceAll(char, specialChars[char]);
    }
  }

  for (let char of alphabet) {
    if (!letter.includes(char)) {
      return false;
    }
  }

  return true;
}
```
