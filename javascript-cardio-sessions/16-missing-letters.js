// CHALLENGE 16: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are
// present, return undefined.
// ex. missingLetters('abce') === 'd'
// ex. missingLetters('abcdefghjklmno') === 'i'
// ex. missingLetters('abcdefghijklmnopqrstuvwxyz') === 'undefined'

function missingLetters(string) {
	const charArray = [...string];
	const firstChar = string.at(0);
	const lastChar = string.at(-1);
	const charOuputArray = [];

	for (let i = firstChar.charCodeAt(); i <= lastChar.charCodeAt(); i++) {
		charOuputArray.push(String.fromCharCode(i));
	}

	const outputArray = charOuputArray.filter((char) =>
		charArray.includes(char) ? false : true
	);

	return outputArray[0];
}

const missingLettersOutput = missingLetters('abcdefghjklmno');
console.log(missingLettersOutput);
