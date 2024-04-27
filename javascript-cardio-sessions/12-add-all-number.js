// CHALLENGE 12: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO Arrays
// ex. add(2, 5, 6, 7) === 20

function addAll(...params) {
	return params.reduce((acc, curr) => (acc += curr), 0);
}

const addAllOutput = addAll(2, 5, 6, 7);
console.log(addAllOutput);
