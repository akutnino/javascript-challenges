// Challenge 3: REVERSE AN INTEGER
// Return an interger in reverse
// ex. reverseInt(521) === 125

function reverseInt(interger) {
	const intArray = [];

	for (let i = [...String(interger)].length - 1; i >= 0; i--) {
		intArray.push([...String(interger)][i]);
	}

	return Number(intArray.join(''));
}

const reverseIntOutput = reverseInt(987654321);
console.log(reverseIntOutput);
