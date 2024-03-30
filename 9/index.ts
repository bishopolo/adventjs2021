function groupBy(collection: any, it: any) {
  let obj: any = {};
  let isFunction = typeof it === "function" ? true : false;

  for (let prop of collection) {

    if (isFunction) {
      if (it(prop) in obj){
        obj[it(prop)] = [...obj[it(prop)], prop];
      }else {
        // console.log(prop);
        obj[it(prop)] = [prop];
      }
    } else if (it === 'length'){

      if (prop.length in obj){
        // console.log(prop)
        obj[prop.length] = [...obj[prop.length], prop]
      }else {
        obj[prop.length] = [prop]
      }

    } else {
      if (typeof prop === 'object'){
        let tmp:any = {}
        for (let key in prop){
          tmp[key] = prop[key];
          if (typeof prop[key] === 'number'){
            obj[prop[key]] = []
            obj[prop[key]].push(tmp)
          }
        }
      }

    }

  }

  // console.log(obj);
  return obj;
}

// groupBy([6.1, 4.2, 6.3], Math.floor); // { 6: [6.1, 6.3], 4: [4.2] }
// groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
// groupBy([{age: 23}, {age: 24}], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }
// groupBy([
//   { title: 'JavaScript: The Good Parts', rating: 8 },
//   { title: 'Aprendiendo Git', rating: 10 },
//   { title: 'Clean Code', rating: 9 },
// ], 'rating')
// groupBy(
//   [1397639141184, 1363223700000],
//   timestamp => new Date(timestamp).getFullYear()
// )
// { 2013: [1363223700000], 2014: [1397639141184] }


/* 
groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
groupBy([{age: 23}, {age: 24}], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }

groupBy(
  [1397639141184, 1363223700000],
  timestamp => new Date(timestamp).getFullYear()
)
// { 2013: [1363223700000], 2014: [1397639141184] }

groupBy([
  { title: 'JavaScript: The Good Parts', rating: 8 },
  { title: 'Aprendiendo Git', rating: 10 },
  { title: 'Clean Code', rating: 9 },
], 'rating')
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] 
}

*/
