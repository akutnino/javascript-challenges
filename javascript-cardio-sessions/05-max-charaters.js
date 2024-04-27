// Challenge 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') === 'a'

function maxCharacter(string) {
	const charArray = [...string.toLowerCase()].filter((char) =>
		char === ' ' ? false : true
	);

	const charObject = charArray.reduce((acc, curr) => {
		if (acc[curr] == null) acc[curr] = [];
		acc[curr].push(curr);

		return acc;
	}, {});

	const groupedCharArray = Object.values(charObject);

	const sortedByLength = groupedCharArray.sort((a, b) => b.length - a.length);

	const maxCharQuantity = sortedByLength.reduce((acc, curr) => {
		if (curr.length > acc) {
			acc = curr.length;
		}

		return acc;
	}, 0);

	const output = sortedByLength.reduce((acc, curr) => {
		if (curr.length === maxCharQuantity) {
			acc.push(curr[0]);
		}

		return acc;
	}, []);

	return output.length === 1 ? output[0] : output;
}

const maxCharacterOutput = maxCharacter('aaabbbbcccd');
console.log(maxCharacterOutput);
