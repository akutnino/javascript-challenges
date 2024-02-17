// Sort by Height.
const myArray = [-1, 150, 190, 170, -1, -1, 160, 180];

function sortByHeight(array) {
  const indexArray = array
    .map((value, index) => (value === -1 ? index : false))
    .filter((value) => Number.isInteger(value));

  const sortedArray = array
    .filter((value) => (value === -1 ? false : true))
    .sort();

  for (let i = 0; i < sortedArray.length; i++) {
    if (indexArray.includes(i)) sortedArray.splice(i, 0, -1);
  }

  return sortedArray;
}

const output = sortByHeight(myArray);
console.log(output);
