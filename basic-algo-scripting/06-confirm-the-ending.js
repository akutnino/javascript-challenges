// Confirm the Ending.
const myString = 'Congtratulation';
const charStr = 'on';

function confirmEnding(string, char) {
  const startIndex = [...string].length - [...char].length;
  const stringEnd = [...string].splice(startIndex, [...char].length).join('');
  const output = stringEnd === char ? true : false;

  return output;
}

const output = confirmEnding(myString, charStr);
console.log(output);
