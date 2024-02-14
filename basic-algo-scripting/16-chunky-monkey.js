// Chunky Monkey.
const myArray = ['a', true, 'c', 10, 'e', false];
const index = 2;

function chunkArrayInGroups(array, size) {
  const outputArray = [];
  let chunkArray = [];

  for (let i = 0; i < array.length; i++) {
    if (chunkArray.length < size) {
      chunkArray.push(array[i]);
    }
    if (chunkArray.length === size) {
      outputArray.push(chunkArray);
      chunkArray = [];
    }
  }

  if (chunkArray.length > 0) {
    outputArray.push(chunkArray);
    chunkArray = [];
  }

  return outputArray;
}

const output = chunkArrayInGroups(myArray, index);
console.log(output);
