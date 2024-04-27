// Answer All Algo Scripting Questions from Stral Tech's YT playlist.

// Convert Celsius to Fahrenheit
function convertToF(celsius) {
	let fahrenheit = Number(celsius * (9 / 5) + 32);

	return fahrenheit;
}

const convertToFahrenOuput = convertToF(20);
console.log(convertToFahrenOuput);

// Reverse a String
function reverseString(string) {
	const outputString = [...string].toReversed().join('');

	return outputString;
}

const reverseStringOutput = reverseString('hello');
console.log(reverseStringOutput);

// Factorialize a Number
function factorialize(number) {
	const numberArray = Array.from(Array(number))
		.map((val, index) => index + 1)
		.reduce((acc, curr) => acc * curr, 1);

	return numberArray;
}

const factorializeOutput = factorialize(10);
console.log(factorializeOutput);

// Find the Longest Word in a String
function findLongestWordLength(string) {
	const outputLength = string
		.split(' ')
		.map((element) => element.length)
		.sort()
		.at(-1);

	return outputLength;
}

const findLongestWordLengthOutput = findLongestWordLength(
	'The quick brown fox jumped over the lazy dog'
);
console.log(findLongestWordLengthOutput);

// Return Largest Number in Arrays
function largestOfFour(array) {
	const largestNumbersArray = array.map((arr) =>
		arr.sort((a, b) => Number(b) - Number(a)).at()
	);

	return largestNumbersArray;
}

const largestOfFourOutput = largestOfFour([
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[1000, 1001, 857, 1]
]);
console.log(largestOfFourOutput);
