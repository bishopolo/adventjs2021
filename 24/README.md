# 🎯 1️⃣

| [Link reto 🔗](https://2021.adventjs.dev/challenges/24) | [Solución 👨🏻‍💻](#solución) | [Inicio 🏠](../README.md) |
| ------------------------------------------------------- | ------------------------ | ------------------------- |

## Solución

```ts
function checkIsSameTree(treeA, treeB) {
  let treeOneArray = [];
  let treeTwoArray = [];

  function getTree(Tree, arr) {
    for (let tree in Tree) {
      if (Tree[tree] instanceof Object) {
        arr.push(`${tree}, object`);
        getTree(Tree[tree], arr);
      } else {
        arr.push(`${tree}, ${Tree[tree]}`);
      }
    }
  }

  getTree(treeA, treeOneArray);
  getTree(treeB, treeTwoArray);
  // console.log(treeTwoArray.length)
  for (let tree of treeTwoArray) {
    if (!treeOneArray.includes(tree)) {
      return false;
    }
  }
  return true;
}
```
