// DNA Pairing.
const myString = 'TTGAG';

function pairElement(string) {
  const stringArray = [...string];
  const outputArray = [];

  stringArray.forEach((element) => {
    if (element === 'C') outputArray.push([element, 'G']);
    if (element === 'G') outputArray.push([element, 'C']);
    if (element === 'A') outputArray.push([element, 'T']);
    if (element === 'T') outputArray.push([element, 'A']);
  });

  return outputArray;
}

const output = pairElement(myString);
console.log(output);
