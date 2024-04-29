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

// Title Case a Sentence
function titleCase(string) {
	return string
		.split(' ')
		.map((string) => string.at().toUpperCase() + string.slice(1).toLowerCase())
		.join(' ');
}

const titleCaseOutput = titleCase(`sHoRt AnD sToUt`);
console.log(titleCaseOutput);

// Slice and Splice
function frankenSplice(array1, array2, number) {
	return array2.toSpliced(number, 0, array1).flat();
}

const frankenSpliceOutput = frankenSplice([1, 2, 3], [4, 5], 1);
console.log(frankenSpliceOutput);

// Falsy Bouncer
function bouncer(array) {
	return array.filter((element) => element);
}

const bouncerOutput = bouncer([7, 'ate', '', false, 9]);
console.log(bouncerOutput);

// Where do I Belong
function getIndexToTns(array, number) {
	return [...array, number]
		.sort((a, b) => Number(a) - Number(b))
		.reduce(
			(acc, curr, index) => (curr === number ? (acc = index) : (acc += 0)),
			0
		);
}

const getIndexToTnsOutput = getIndexToTns([10, 20, 30, 40, 50], 35);
console.log(getIndexToTnsOutput);

// Mutations
function mutations(array) {
	const arrayOne = [...array[0].toLowerCase()];
	const arrayTwo = [...array[1].toLowerCase()];

	return arrayTwo.every((val) => arrayOne.includes(val));
}

const mutationsOutput = mutations(['Hello', 'hello']);
console.log(mutationsOutput);

// Chuncky Monkey
function chunckArrayInGroups(array, size) {
	const chunckArray = [];

	for (let i = 0; i < array.length; i += size) {
		chunckArray.push(array.slice(i, i + size));
	}

	return chunckArray;
}

const chunckArrayInGroupsOutput = chunckArrayInGroups(
	['a', 'b', 'c', 'd', 'f'],
	3
);
console.log(chunckArrayInGroupsOutput);

// Combine two array with alternating values
function combineArrays(array1, array2) {
	const combinedArray = [];
	let arrayOneIndex = 0;
	let arrayTwoIndex = 0;
	let combinedArrayIndex = 0;

	for (let i = 0; i < array1.length + array2.length; i++) {
		if (arrayOneIndex > arrayTwoIndex) {
			combinedArray[combinedArrayIndex] = array2[arrayTwoIndex];
			arrayTwoIndex++;
		} else {
			combinedArray[combinedArrayIndex] = array1[arrayOneIndex];
			arrayOneIndex++;
		}
		combinedArrayIndex++;
	}

	return combinedArray;
}

const combineArraysOutput = combineArrays(
	['renzo', 'nino', 'kim'],
	[10, 20, 30]
);
console.log(combineArraysOutput);
