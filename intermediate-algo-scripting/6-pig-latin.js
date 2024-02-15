// Pig Latin.
const myString = 'schwartz';

function translatePigLatin(string) {
  const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
  const stringArray = [...string];
  const firstIsVowel = vowelsArray.includes(stringArray[0]);
  const consonantArray = [];
  let vowelIndex = 0;

  if (firstIsVowel) return `${string}way`;

  for (let i = 0; i < stringArray.length; i++) {
    if (vowelsArray.includes(stringArray[i])) {
      vowelIndex = i;
      break;
    }

    consonantArray.push(stringArray[i]);
  }

  const vowelSlice = string.slice(vowelIndex);
  const output = [...vowelSlice];
  output.push(...consonantArray);

  return `${output.join('')}ay`;
}

const output = translatePigLatin(myString);
console.log(output);
