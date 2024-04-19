// Repeat a String Repeat a String.
const myString = 'abc';
const myNumber = 3;

function repeatStringNumTimes(string, num) {
  const output = [];

  for (let i = 0; i < num; i++) {
    output.push(string);
  }

  return output.join('');
}

const output = repeatStringNumTimes(myString, myNumber);
console.log(output);
