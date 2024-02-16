// Flatten Array.
const myArray = [[1, 2], [3, 4], [5, 6, 7], [8]];

function flattenArray(array) {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      output.push(array[i][j]);
    }
  }

  return output;
}

const output = flattenArray(myArray);
console.log(output);
