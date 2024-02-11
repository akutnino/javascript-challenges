// Find the Longest Word in a String.
const myString = 'The quick brown fox jumped over the lazy dog';

function findLongestWordLength(string) {
  const wordArray = string.split(' ');
  const wordLengthArray = wordArray.map((string) => string.length);

  return wordLengthArray.toSorted().at(-1);
}

const output = findLongestWordLength(myString);
console.log(output);
