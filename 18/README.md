# 🎯 1️⃣

| [Link reto 🔗](https://2021.adventjs.dev/challenges/18) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

## Solución

```ts
function fixFiles(files: any): string[] {
  let filesObj: Record<string, number> = {};
  let arrFiles: string[] = [];

  for (let file of files) {
    if (!(file in filesObj)) {
      filesObj[file] = 1;
      arrFiles.push(file);
    } else {
      arrFiles.push(`${file}(${filesObj[file]})`);
      filesObj[file] += 1;
    }
  }
  //   console.log(filesObj);
  return arrFiles;
}
```
