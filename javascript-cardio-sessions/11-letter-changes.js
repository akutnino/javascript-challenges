// CHALLENGE 11: LETTER CHANGES
// Change every letter of the string to the one that follows it
// and capitalize the vowels
// Z should be A
// ex. 'hello there' === 'Ifmmp, UIfsf'

function letterChanges(string) {
	const TOTAL_ALPHABET_LETTERS = 26;
	const FIRST_LETTER_UNICODE = 97;
	const vowelArray = ['a', 'e', 'i', 'o', 'u'];

	const alphabetArray = Array.from(Array(TOTAL_ALPHABET_LETTERS))
		.map((e, i) => i + FIRST_LETTER_UNICODE)
		.map((e) => String.fromCharCode(e));

	const charArray = [...string].map((char) =>
		alphabetArray.includes(char)
			? String.fromCharCode(char.charCodeAt() + 1)
			: char
	);

	const outputArray = charArray.map((char) =>
		vowelArray.includes(char) ? char.toUpperCase() : char
	);

	return outputArray.join('');
}

const letterChangesOutput = letterChanges('hello there');
console.log(letterChangesOutput);
