// Return Largest Numbers in Arrays.
const arr1 = [13, 27, 18, 26];
const arr2 = [4, 5, 1, 3];
const arr3 = [32, 35, 37, 39];
const arr4 = [1000, 1001, 857, 1];

function largestOfFour(...arrays) {
  const output = arrays.map((element) => {
    const value = element.toSorted((a, b) => (a < b ? 1 : -1));

    return value.at(0);
  });

  return output;
}

const output = largestOfFour(arr1, arr2, arr3, arr4);
console.log(output);
