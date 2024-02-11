// Factorialize a Number.
const factorialNumber = 1;

function factorialize(number) {
  let accumulator;
  if (number >= 0) accumulator = 1;
  if (number < 0) throw new Error('n must be > or = to 0');

  const numberArray = [];

  for (let i = 1; i <= number; i++) {
    numberArray.push(i);
  }

  return numberArray.reduce((acc, curr) => acc * curr, accumulator);
}

const output = factorialize(factorialNumber);
console.log(output);
