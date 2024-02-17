// Combine Arrays.
const arrayOne = [1, 2, 3];
const arrayTwo = ['a', 'b', 'c'];

function combineArrays(arr1, arr2) {
  const totalLength = arr1.length + arr2.length;
  const outputArray = [];
  let outputArrayIndex = 0;
  let arrayOneIndex = 0;
  let arrayTwoIndex = 0;

  for (let i = 0; i < totalLength; i++) {
    if (arrayOneIndex > arrayTwoIndex) {
      outputArray[outputArrayIndex] = arr2[arrayTwoIndex];
      arrayTwoIndex++;
    } else {
      outputArray[outputArrayIndex] = arr1[arrayOneIndex];
      arrayOneIndex++;
    }

    outputArrayIndex++;
  }

  return outputArray;
}

const output = combineArrays(arrayOne, arrayTwo);
console.log(output);
