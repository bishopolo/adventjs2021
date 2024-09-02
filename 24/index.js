"use strict";
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
const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};
const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
};
console.log(
  checkIsSameTree(tree, tree2) // true
);
/*

18 de agosto

checkIsSameTree(tree, tree2) // false
checkIsSameTree(tree2, tree2) // true

*/