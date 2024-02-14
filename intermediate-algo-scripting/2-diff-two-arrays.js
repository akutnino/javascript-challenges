// Diff Two Arrays.
const arrayOne = [1, 2, 3];
const arrayTwo = [1, 2, 3, 4];

function diffArray(arr1, arr2) {
  const maxLengthArray = arr1.length > arr2.length ? arr1 : arr2;
  const minLengthArray = arr1.length < arr2.length ? arr1 : arr2;
  const output = [];

  for (let i = 0; i < maxLengthArray.length; i++) {
    if (minLengthArray.includes(maxLengthArray[i]) === false) {
      output.push(maxLengthArray[i]);
    }
  }

  return output;
}

const output = diffArray(arrayOne, arrayTwo);
console.log(output);
