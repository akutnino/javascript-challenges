// Letter Changes.
const myString = 'hello there';

function letterChanges(string) {
  const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
  const stringArray = [...string.toLowerCase()];
  const outputArray = stringArray.map((char) => {
    const nextChar = String.fromCharCode(char.charCodeAt() + 1);

    if (char === ' ') return char;
    if (char === 'z') return 'a';
    if (vowelsArray.includes(nextChar)) return nextChar.toUpperCase();

    return nextChar;
  });

  return outputArray.join('');
}

const output = letterChanges(myString);
console.log(output);
