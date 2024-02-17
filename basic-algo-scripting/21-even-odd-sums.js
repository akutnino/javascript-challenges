// Even and Odd Sums.
const myArray = [50, 60, 60, 45, 71];

function evenOddSums(array) {
  const evenSum = array.reduce((acc, curr) => {
    if (curr % 2 === 0) acc += curr;

    return acc;
  }, 0);

  const oddSum = array.reduce((acc, curr) => {
    if (curr % 2 != 0) acc += curr;

    return acc;
  }, 0);

  return [evenSum, oddSum];
}

const output = evenOddSums(myArray);
console.log(output);
