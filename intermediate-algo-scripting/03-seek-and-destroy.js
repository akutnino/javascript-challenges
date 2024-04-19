// Seek and Destroy.
const myArray = ['tree', 'ham', 53];
const seek = ['tree', 53];

// prettier-ignore
function destroyer(mainArray, seekArray) {
  const indexArray = seekArray.map(element => {
    const indexes = [];

    for (let i = 0; i < mainArray.length; i++) {
      if (element === mainArray[i]) {
        indexes.push(i);
      }
    }

    return indexes;
  }).flat();

  const outputArray = mainArray.filter((element, index) => {
    for (let i = 0; i < indexArray.length; i++) {
      if (index === indexArray[i]) {
        return false;
      }
    }

    return element;
  });

  return outputArray;
}

const output = destroyer(myArray, seek);
console.log(output);
