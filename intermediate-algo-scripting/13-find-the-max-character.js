// Find The Max Character.
const myString = 'hello world';

// prettier-ignore
function maxCharacter(string) {
  const charArray = [...string].map((char) => char.toLowerCase());
  const filterArr = charArray.filter((char) => (char === ' ' ? false : true));
  const groupedObj = filterArr.reduce((acc, curr) => {
    if (acc[curr] == null) 
    acc[curr] = [];
    acc[curr].push(curr);

    return acc;
  }, {});
  const groupedArr = Object.values(groupedObj).sort(
    (a, b) => b.length - a.length
  );
  const maxCharArr = groupedArr.filter((element) => {
    if (element.length === groupedArr.at().length) return element;
    return false;
  });
  const output = maxCharArr.map((element) => element.at());

  return output;
}

const output = maxCharacter(myString);
console.log(output);
