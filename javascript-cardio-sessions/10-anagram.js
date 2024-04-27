// CHALLENGE 10: ANAGRAM
// Return true if anagram and false is not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(string1, string2) {
	const lowercaseArray = [];

	for (let index = 'a'.charCodeAt(); index < 'z'.charCodeAt(); index++) {
		lowercaseArray.push(String.fromCharCode(index));
	}

	const charArrayOne = [...string1.toLowerCase()]
		.filter((char) => (lowercaseArray.includes(char) ? true : false))
		.sort();

	const charArrayTwo = [...string2.toLowerCase()]
		.filter((char) => (lowercaseArray.includes(char) ? true : false))
		.sort();

	return charArrayOne.join('') === charArrayTwo.join('');
}

const isAnagramOutput = isAnagram('Dormitory', 'dirty room##');
console.log(isAnagramOutput);
