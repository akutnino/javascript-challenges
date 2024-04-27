// Challenge 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(string) {
	const finalArray = [];
	const wordsArray = [];
	let wordArray = [];

	for (let i = 0; i < [...string].length; i++) {
		if ([...string][i] === ' ') {
			wordsArray.push(wordArray.join(''));
			wordArray = [];
			continue;
		}
		wordArray.push([...string][i]);
	}

	if (wordArray.length > 0) {
		wordsArray.push(wordArray.join(''));
	}

	for (let j = 0; j < wordsArray.length; j++) {
		finalArray.push(wordsArray[j][0].toUpperCase() + wordsArray[j].slice(1));
	}

	return finalArray.join(' ');
}

const capitalizeLettersOutput = capitalizeLetters('i love javascript');
console.log(capitalizeLettersOutput);
