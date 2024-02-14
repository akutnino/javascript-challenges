// Wherefore art thou.
const myArray = [
  { first: 'Romeo', last: 'Montague' },
  { first: 'Mercutio', last: null },
  { first: 'Tybalt', last: 'Capulet' },
];
const myObject = { last: 'Capulet' };

// prettier-ignore
function whatIsInName(collection, source) {
  const [sourceKey, sourceValue] = Object.entries(source).flat();
  
  // entriesArray - Returns a flatted array of arrays of the (collection) parameter.
  const entriesArray = collection.map((element) =>
    Object.entries(element).flat()
  );

  const index = entriesArray.map((element, index) => {
    if (element.includes(sourceKey && sourceValue)) return index;
    return false;
  }).filter(value => Number.isInteger(value));

  return [collection.at(index)];
}

const output = whatIsInName(myArray, myObject);
console.log(output);
