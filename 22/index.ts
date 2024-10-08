function countDecorations(bigTree: any) {
  // ¡No olvides compartir tu solución en redes!
  let total = 0;

  function getTotal(bigTree: any) {
    for (const key in bigTree) {
      // const { value, right, left } = bigTree[key];
      // console.log(value, right, left);
      if (key === "value") {
        // console.log(bigTree[key]);
        total += bigTree[key];
      }

      if (key === "left" && typeof bigTree[key] === "object") {
        getTotal(bigTree[key]);
      }

      if (key === "right" && typeof bigTree[key] === "object") {
        // console.log(key)
        getTotal(bigTree[key]);
      }
      // console.log(bigTree[key]);
    }
  }

  getTotal(bigTree);

  // console.log(total);
  return total;
}

const bigTree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 7,
      left: {
        value: 3,
        left: null,
        right: null,
      },
      right: null,
    },
    right: null,
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null,
    },
    right: {
      value: 1,
      left: null,
      right: null,
    },
  },
};

//         1
//       /   \
//      5     6
//     /     / \
//    7     5   1
//   /
//  3

console.log(
  countDecorations(bigTree) // 28
);

/* 

// tenemos el árbol en forma de objeto
const tree = {
  value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
  left: {
    value: 2, // el nodo izquierdo necesita dos decoraciones
    left: null, // no tiene más ramas
    right: null // no tiene más ramas
  },
  right: {
    value: 3, // el nodo de la derecha necesita tres decoraciones
    left: null, // no tiene más ramas
    right: null // no tiene más ramas
  }
}

 Gráficamente sería así:
    1
  /   \
 2     3

1 + 2 + 3 = 6

countDecorations(tree) // 6

const bigTree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 7,
      left: {
        value: 3,
        left: null,
        right: null
      },
      right: null
    },
    right: null
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null
    },
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}

        1
      /   \
     5     6
    /     / \
   7     5   1
  /
 3

countDecorations(bigTree) // 28

*/
