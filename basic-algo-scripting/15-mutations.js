// Mutations.
const string1 = 'basKetBall';
const string2 = 'ask';

function mutations(str1, str2) {
  const arrayOne = [...str1.toLowerCase()];
  const arrayTwo = [...str2.toLowerCase()];
  const output = [];

  for (let i = 0; i < arrayTwo.length; i++) {
    if (arrayOne.includes(arrayTwo[i])) {
      output.push(true);
    } else {
      output.push(false);
    }
  }

  return output.every((value) => value);
}

const output = mutations(string1, string2);
console.log(output);
