// Title Case a Sentence.
const myString = 'sHoRt AnD sToUt';

function titleCase(string) {
  const stringArray = string.split(' ');
  const output = stringArray.map((element) => {
    const firstChar = element.at(0).toUpperCase();
    const nextChars = element.slice(1).toLowerCase();

    return `${firstChar}${nextChars}`;
  });

  return output.join(' ');
}

const output = titleCase(myString);
console.log(output);
