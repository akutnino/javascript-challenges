// Answer All Algo Scripting Questions from Chris Cooper YT playlist.

// Sum All Numbers in a Range
function sumAll(array) {
	const NEEDED_INDEX = 1;
	const [firstNumber, secondNumber] = array;
	const smallNumber = firstNumber < secondNumber ? firstNumber : secondNumber;
	const largeNumber = secondNumber > firstNumber ? secondNumber : firstNumber;
	const totalValues = largeNumber - smallNumber + NEEDED_INDEX;

	const sumTotal = Array.from(Array(totalValues))
		.map((val, index) => index + smallNumber)
		.reduce((acc, curr) => (acc += curr), 0);

	return sumTotal;
}

const sumAllOutput = sumAll([5, 10]);
console.log(sumAllOutput);

// Diff Two Arrays
function diffArray(array1, array2) {
	return array2.filter((val) => (array1.includes(val) ? false : true));
}

const diffArrayOutput = diffArray(
	['diorite', 'grass', 'dirt'],
	['diorite', 'andesite', 'grass', 'dirt']
);
console.log(diffArrayOutput);
