// Sorted Union.
const arr1 = [1, 2, 3];
const arr2 = [5, 2, 1, 4];
const arr3 = [2, 1];
const arr4 = [6, 7, 8];

function uniteUnique(...array) {
  const mainArray = array.flat();
  const outputArr = [];

  mainArray.forEach((element) => {
    const unique = outputArr.includes(element) === false;
    if (unique) outputArr.push(element);
  });

  return outputArr;
}

const output = uniteUnique(arr1, arr2, arr3, arr4);
console.log(output);
