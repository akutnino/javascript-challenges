// Reverse a String.
const myString = 'hello';

function reverseString(string) {
  return [...string].reverse().join('');
}

const output = reverseString(myString);
console.log(output);

// Other Solutions...
function solutionTwo(string) {
  const charArray = [];

  for (let i = 0; i < [...string].length; i++) {
    charArray.unshift(string[i]);
  }

  return charArray.join('');
}
