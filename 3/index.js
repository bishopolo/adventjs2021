function isValid(letter) {
    var getIndexofFirstParenthesis = letter.indexOf("(") + 1;
    var getIndexofLastParenthesis = letter.indexOf(")");
    var stringInsideParenthesis = letter.slice(getIndexofFirstParenthesis, getIndexofLastParenthesis);
    var regex = /[\{\}\[\]\(\)]/;
    if (getIndexofLastParenthesis !== -1) {
        if (regex.test(stringInsideParenthesis))
            return false;
        if (stringInsideParenthesis.length)
            return true;
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
