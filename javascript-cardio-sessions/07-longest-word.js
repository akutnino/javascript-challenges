// Challenge 7: LONGEST WORD
// Return the longest word of a string
// If more then one longest word, put into an array
// ex. longestWord('Hello, my name is Nino') === 'hello'
// ex. longestWord('Hello there, my name is Nino') === ['hello', 'there']

function longestWord(string) {
	const upperCaseArray = [];
	const lowerCaseArray = [];

	for (let i = 'A'.charCodeAt(); i <= 'Z'.charCodeAt(); i++) {
		upperCaseArray.push(String.fromCharCode(i));
	}

	for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
		lowerCaseArray.push(String.fromCharCode(i));
	}

	const charArray = [...string].filter((char) => {
		const isLetter =
			upperCaseArray.includes(char) || lowerCaseArray.includes(char);

		return isLetter || char === ' ' ? true : false;
	});

	const wordsArray = [];
	let wordArray = [];

	for (let i = 0; i < charArray.length; i++) {
		if (charArray[i] === ' ') {
			wordsArray.push(wordArray.join(''));
			wordArray = [];
			continue;
		}

		wordArray.push(charArray[i]);
	}

	if (wordArray.length > 0) {
		wordsArray.push(wordArray.join(''));
		wordArray = [];
	}

	const lengthArray = wordsArray.map((string) => string.length);

	const largestLength = lengthArray.reduce((acc, curr) => {
		if (curr > acc) {
			acc = curr;
		}

		return acc;
	}, 0);

	const output = wordsArray.filter((word) =>
		word.length === largestLength ? true : false
	);

	return output.length > 1 ? output : output[0];
}

const longestWordOutput = longestWord(`Hello there, my name is Nino`);
console.log(longestWordOutput);
