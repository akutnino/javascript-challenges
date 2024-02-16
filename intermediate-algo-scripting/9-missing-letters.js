// Missing letters.
const myString = 'az';

function fearNoLetter(string) {
  const firstCode = string.charCodeAt();
  const lastCode = string.at(-1).charCodeAt();
  const allCodesArray = [];
  const charCodeArray = [];
  const missingLetters = [];

  [...string].forEach((element) => {
    charCodeArray.push(element.charCodeAt());
  });

  for (let i = firstCode; i <= lastCode; i++) {
    allCodesArray.push(i);
  }

  const missingCodes = allCodesArray.filter((element) => {
    const notIncluded = charCodeArray.includes(element) === false;
    if (notIncluded) return element;
    return false;
  });

  missingCodes.forEach((element) => {
    missingLetters.push(String.fromCharCode(element));
  });

  return missingLetters.join('');
}

const output = fearNoLetter(myString);
console.log(output);
