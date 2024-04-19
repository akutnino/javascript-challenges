// Search and Replace.
const myString = 'A quick brown fox Jumped over the lazy dog';
const searchString = 'Jumped';
const replaceString = 'leaped';

function myReplace(string, searchStr, newStr) {
  const newString =
    searchStr[0] === searchStr[0].toLowerCase()
      ? newStr[0].toLowerCase() + newStr.slice(1)
      : newStr[0].toUpperCase() + newStr.slice(1);
  const output = string
    .split(' ')
    .map((str) => (str === searchStr ? newString : str));
  return output.join(' ');
}

const output = myReplace(myString, searchString, replaceString);
console.log(output);
