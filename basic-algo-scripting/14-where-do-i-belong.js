// Where do I Belong.
const myArray = [10, 20, 30, 40, 50];
const index = 35;

function getIndexToIns(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < number) {
      continue;
    } else {
      return i;
    }
  }
}

const output = getIndexToIns(myArray, index);
console.log(output);
