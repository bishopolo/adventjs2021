function isValid(letter: string): boolean {
  let getIndexofFirstParenthesis = letter.indexOf("(") + 1;
  let getIndexofLastParenthesis = letter.indexOf(")");
  let stringInsideParenthesis = letter.slice(
    getIndexofFirstParenthesis,
    getIndexofLastParenthesis
  );

  let regex = /[\{\}\[\]\(\)]/;

  if (getIndexofLastParenthesis !== -1) {
    if (regex.test(stringInsideParenthesis)) return false;
    if (stringInsideParenthesis.length) return true;
  }

  return false;
}

console.log(isValid("peluche bici coche bici coche balón"));

/*
"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
"(()) bici" 
*/
