// Sum All Odd Fibonacci Numbers.
const myNumber = 4000000;

function sumFibs(number) {
  const fiboArray = [0, 1];

  for (let i = 0; i <= number; i++) {
    const nextFibo = fiboArray[i] + fiboArray[i + 1];
    if (nextFibo > number) break;
    fiboArray.push(nextFibo);
  }

  const output = fiboArray.reduce((acc, curr) => {
    if (curr % 2 != 0) acc += curr;

    return acc;
  }, 0);

  return output;
}

const output = sumFibs(myNumber);
console.log(output);
