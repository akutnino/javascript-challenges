// Validate Palindromes.
const myString = 'racecar';

function isPalindrome(string) {
  const stringArray = [...string].map((char) => char.toLowerCase());
  return stringArray.join('') === stringArray.toReversed().join('')
    ? true
    : false;
}

const output = isPalindrome(myString);
console.log(output);
