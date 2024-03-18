function contains(store, product) {
    var allProducts = [];
    function x(store, product) {
        for (var item in store) {
            var tmpItem = store[item];
            if (product === tmpItem) {
                allProducts.push(tmpItem);
            }
            if (typeof tmpItem === "object") {
                x(tmpItem, product);
            }
        }
    }
    x(store, product);
    return allProducts.includes(product) ? true : false;
    // the best solution, i found it on internet. 
    // for (let key in store) {
    //   if (typeof store[key] === "object") {
    //     if (contains(store[key], product)) {
    //       return true;
    //     }
    //   } else if (store[key] === product) {
    //     return true;
    //   }
    // }
    // return false;
}
var almacen = {
    estanteria1: {
        cajon1: {
            producto1: "coca-cola",
            producto2: "fanta",
            producto3: "sprite",
        },
    },
    estanteria2: {
        cajon1: "vacio",
        cajon2: {
            producto1: "pantalones",
            producto2: "camiseta",
        },
    },
};
console.log(contains(almacen, "camiseta")); // true
/*

esto genera un error, ya que solo da true si el uúltimo es el que deseamos si dda true, pero si estaá en otro lugar da false

let isProduct = false;
function contains(store: any, product:string):boolean {
  
   for (let item in store){
    let tmpItem = store[item];
    if (product === tmpItem) {
       isProduct = true;
    }else {
      isProduct = false;
    }
  
    if (typeof tmpItem === 'object'){
      contains(tmpItem, product)
    }
  }

  return isProduct;
}



*/
