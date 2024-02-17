// Anagrams.
const myString1 = 'DORmitORY';
const myString2 = 'dirty room##';

function isAnagram(str1, str2) {
  const lowercaseArray = [];
  const uppercaseArray = [];

  for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
    lowercaseArray.push(i);
  }

  for (let i = 'A'.charCodeAt(); i <= 'Z'.charCodeAt(); i++) {
    uppercaseArray.push(i);
  }

  const charCodes1 = [...str1]
    .map((char) => {
      const newChar = char.toLowerCase();
      const charIsIncluded =
        lowercaseArray.includes(char.charCodeAt()) ||
        uppercaseArray.includes(char.charCodeAt());

      if (charIsIncluded) return newChar;
      return false;
    })
    .filter((char) => char)
    .sort();

  const charCodes2 = [...str2]
    .map((char) => {
      const newChar = char.toLowerCase();
      const charIsIncluded =
        lowercaseArray.includes(char.charCodeAt()) ||
        uppercaseArray.includes(char.charCodeAt());

      if (charIsIncluded) return newChar;
      return false;
    })
    .filter((char) => char)
    .sort();

  const output = charCodes1.map((char) =>
    charCodes2.includes(char) ? true : false
  );

  return output.includes(false) ? false : true;
}

const output = isAnagram(myString1, myString2);
console.log(output);
