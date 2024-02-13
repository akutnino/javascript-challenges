// Slice and Splice.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const index = 1;

function frankenSplice(array1, array2, index) {
  const output = array2.toSpliced(index, 0, ...array1);
  return output;
}

const output = frankenSplice(arr1, arr2, index);
console.log(output);
