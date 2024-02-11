// Reverse a String.
const myString = 'hello';

function reverseString(string) {
  return [...string].reverse().join('');
}

const output = reverseString(myString);
console.log(output);
