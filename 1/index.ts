interface typeOvejas {
  name: string;
  color: string;
}

const ovejas: typeOvejas[] = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

// function contarOvejas(objOvejas: typeOvejas[]): typeOvejas[] {
//   const newArrayOvejas: typeOvejas[] = [];

//   for (let obj of objOvejas) {
//     if (obj.color === "rojo") {
//       if (
//         obj.name.toLocaleLowerCase().includes("n") &&
//         obj.name.toLocaleLowerCase().includes("a")
//       ) {
//         newArrayOvejas.push({
//           name: obj.name,
//           color: obj.color,
//         });
//       }
//     }
//   }
//   return newArrayOvejas;
// }

function contarOvejas(objOvejas: typeOvejas[]): typeOvejas[] {
  return objOvejas.filter((val) => {
    if (val.color === "rojo") {
      if (
        val.name.toLocaleLowerCase().includes("a") &&
        val.name.toLocaleLowerCase().includes("n")
      ) {
        return val;
      }
    }
  });
}

console.log(contarOvejas(ovejas));
