"use strict";
function canReconfigure(from, to) {
    if (from.length !== to.length)
        return false;
    const mapFromTo = new Map();
    const mapToFrom = new Map();
    for (let i = 0; i < from.length; i++) {
        const fromChar = from[i];
        const toChar = to[i];
        if ((mapFromTo.has(fromChar) && mapFromTo.get(fromChar) !== toChar) ||
            (mapToFrom.has(toChar) && mapToFrom.get(toChar) !== fromChar)) {
            return false;
        }
        mapFromTo.set(fromChar, toChar);
        mapToFrom.set(toChar, fromChar);
    }
    return true;
}
const from = "BAL";
const to = "LIB";
canReconfigure(from, to); // true
/*
const from = "CON";
const to = "JUU";
canReconfigure(from, to); // false

B -> L
A -> I
L -> B

C -> J
O -> U
N -> FALLO

*/
