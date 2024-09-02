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
// 12 agosto 2024
// const files = ["photo", "postcard", "photo", "photo", "video"];
// console.log(fixFiles(files)); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']
const files2 = ["file", "file", "file", "game", "game"];
console.log(fixFiles(files2)); //['file', 'file(1)', 'file(2)', 'game', 'game(1)']

const files3 = ["file", "file(1)", "icon", "icon(1)", "icon(1)"];
console.log(fixFiles(files3)); // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
/* 


// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
*/
