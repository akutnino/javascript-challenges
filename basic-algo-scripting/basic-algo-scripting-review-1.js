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

// Confirm the Ending
function confirmEnding(string, target) {
	const lastCharacter = string.substring(string.length - 1);

	return lastCharacter === target;
}

const confirmEndingOutput = confirmEnding('Bastian', 'n');
console.log(confirmEndingOutput);

// Repeat a String Repeat a String
function repeatStringNumTimes(string, number) {
	if (number <= 0) return `''`;
	return Array.from(Array(number))
		.map(() => string)
		.join('');
}

const repeatStringNumTimesOutput = repeatStringNumTimes('abc', 3);
console.log(repeatStringNumTimesOutput);

// Truncate a String
function truncateString(string, number) {
	return string.length > number ? `${string.slice(0, number)}...` : string;
}

const truncateStringOutput = truncateString(
	'A-tisket a-tasket A green and yellow basket',
	8
);
console.log(truncateStringOutput);

// Finders Keepers
function findElement(array, callback) {
	let num = 0;

	for (let i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			num = array[i];
			break;
		} else {
			continue;
		}
	}

	return num === 0 ? undefined : num;
}

const findElementOutput = findElement(
	[1, 3, 5, 8, 9, 10],
	(num) => num % 2 === 0
);
console.log(findElementOutput);

// Boo who
function booWho(bool) {
	return bool === true || bool === false ? true : false;
}

const booWhoOutput = booWho(true);
console.log(booWhoOutput);
