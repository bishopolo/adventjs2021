function createXmasTree(height: number) {
  let tree = "";
  let odd:number[] = [];

  for (let i = 0, j = 1; i < 99; i++, j+=2){
    odd.push(j)
  }

  let getMaxLines = odd[height - 1]

  for (let i = 0, a = 1; i < height; i++, a += 2) {
    let content = '';
    let ltp = (getMaxLines - a) / 2;
    let tmp = 1;
    for (let j = 1; j <= getMaxLines; j++) {

      if (j <= ltp){
        content = '_'
      }
      else {
        if (tmp <= a){
          content = '*'
          tmp++;
        } else {
          content = '_'
        }
      }
      tree += content;
    }
     tree += "\n";
  }

  for (let i = 0; i < 2; i++){
    let content = '';
    let ltp = (getMaxLines - 1) / 2;
    let tmp = 1;
    for (let j = 1; j <= getMaxLines; j++){
      if ( j <= ltp){
        content = '_'
      }
      else {
        if (tmp === 1){
          content = '#'
          tmp = 0;
        }
        else {
          content = '_'
        }
      }

      tree += content;
    }

    if (i <= 0 ) tree += "\n";

  }

  return tree
}

console.log(createXmasTree(10))
/* 
__*__
_***_
*****
__#__
__#__

*/
