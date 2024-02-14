// Sum All Numbers in a Range.
const myArray = [5, 10];

function sumAll(array) {
  const maxNum = array[0] > array[1] ? array[0] : array[1];
  const minNum = array[1] > array[0] ? array[0] : array[1];
  const rangeArray = [];

  for (let i = minNum; i <= maxNum; i++) {
    rangeArray.push(i);
  }

  return rangeArray.reduce((acc, curr) => (acc += curr), 0);
}

const output = sumAll(myArray);
console.log(output);
