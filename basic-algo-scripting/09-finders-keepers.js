// Finders Keepers.
const myArray = [1, 3, 5, 8, 9, 10];
const truthTest = (num) => num % 2 === 0;

function findElement(array, callback) {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      output.push(array[i]);
      break;
    }
  }

  return output.at(0);
}

const output = findElement(myArray, truthTest);
console.log(output);
