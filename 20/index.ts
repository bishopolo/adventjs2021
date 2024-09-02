function pangram(letter: string) {
  letter = letter.toLowerCase();

  const alphabet = "abcdefghijklmnñopqrstuvwxyz";
  const specialChars: Record<string, string> = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    ü: "u",
    ä: "a",
    ë: "e",
    ï: "i",
    ö: "o",
  };

  for (let char in specialChars) {
    if (letter.includes(char)) {
      letter = letter.replaceAll(char, specialChars[char]);
    }
  }

  for (let char of alphabet) {
    if (!letter.includes(char)) {
      return false;
    }
  }

  return true;
}

pangram("Extraño pan de col y kiwi se quemó bajo fugaz vahoÁ"); // true
// pangram("Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!"); // true

/* 


Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por ejemplo la á y la ä cuenta como una a.

pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false*/
