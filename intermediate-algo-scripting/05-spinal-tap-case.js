// Spinal Tap Case.
const myString = 'Look-atAll+the/small,and7Tall_ThingsAround?you';

function spinalCase(string) {
  const lowercaseStartCode = 'a'.charCodeAt();
  const lowercaseFinishCode = 'z'.charCodeAt();
  const lowercaseArray = [];

  for (let i = lowercaseStartCode; i <= lowercaseFinishCode; i++) {
    lowercaseArray.push(i);
  }

  const uppercaseStartCode = 'A'.charCodeAt();
  const uppercaseFinishCode = 'Z'.charCodeAt();
  const uppercaseArray = [];

  for (let j = uppercaseStartCode; j <= uppercaseFinishCode; j++) {
    uppercaseArray.push(j);
  }

  const stringArray = [...string].map((element) => {
    const elementIsNotPresent =
      lowercaseArray.includes(element.charCodeAt()) === false &&
      uppercaseArray.includes(element.charCodeAt()) === false;
    const elementIsLowerCase = lowercaseArray.includes(element.charCodeAt());
    const elementIsUpperCase = uppercaseArray.includes(element.charCodeAt());

    if (elementIsUpperCase || elementIsLowerCase) {
      return element;
    }

    if (elementIsNotPresent) {
      return ' ';
    }
  });

  const wordsArray = [];
  let chunckArray = [];

  for (let index = 0; index < stringArray.length; index++) {
    const elementIsLowerCase = lowercaseArray.includes(
      stringArray[index].charCodeAt()
    );
    const elementIsUpperCase = uppercaseArray.includes(
      stringArray[index].charCodeAt()
    );
    const elementIsNotPresent =
      lowercaseArray.includes(stringArray[index].charCodeAt()) === false &&
      uppercaseArray.includes(stringArray[index].charCodeAt()) === false;
    const firstCharacter =
      (elementIsUpperCase && index === 0) ||
      (elementIsLowerCase && index === 0);

    if (firstCharacter) {
      chunckArray.push(stringArray[index]);
    }

    if (elementIsLowerCase && index != 0) {
      chunckArray.push(stringArray[index]);
    }

    if (elementIsUpperCase && index != 0) {
      wordsArray.push(chunckArray);
      chunckArray = [];
      chunckArray.push(stringArray[index]);
    }

    if (elementIsNotPresent) {
      wordsArray.push(chunckArray);
      chunckArray = [];
      continue;
    }
  }

  if (chunckArray.length > 0) {
    wordsArray.push(chunckArray);
    chunckArray = [];
  }

  const finalOutput = wordsArray.map((element) => {
    return element.join('').toLowerCase();
  });

  return finalOutput.join('-');
}

const output = spinalCase(myString);
console.log(output);
