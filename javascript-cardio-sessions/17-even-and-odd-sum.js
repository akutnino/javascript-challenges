// CHALLENGE 17: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex. evenOddSums([50, 60, 60, 45, 71]) === [170, 116]

function evenOddSums(array) {
	const evenSum = array.reduce(
		(acc, curr) => (curr % 2 === 0 ? (acc += curr) : (acc += 0)),
		0
	);

	const oddSum = array.reduce(
		(acc, curr) => (curr % 2 !== 0 ? (acc += curr) : (acc += 0)),
		0
	);

	return [evenSum, oddSum];
}

const evenOddSumsOutput = evenOddSums([50, 60, 60, 45, 71]);
console.log(evenOddSumsOutput);
