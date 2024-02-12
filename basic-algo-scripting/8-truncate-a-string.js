// Truncate a String.
const myString = 'A-tisket a-tasket A green and yellow basket';
const myNumber = 8;

function truncateString(string, num) {
  const stringArray = string.split(' ');
  const truncated = `${stringArray.at(0)}...`;

  const output = string.length > num ? truncated : string;
  return output;
}

const output = truncateString(myString, myNumber);
console.log(output);
