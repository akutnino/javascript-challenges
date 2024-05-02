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

// Seek and Destroy
function destroyer() {
	const seekArray = arguments[0];
	const destroyArray = Array.from(arguments).slice(1);

	return seekArray.filter((val) => (destroyArray.includes(val) ? false : true));
}

const destroyerOutput = destroyer(['tree', 'hamburger', 53], 'tree', 53);
console.log(destroyerOutput);

// Wherefore art thou
function whatIsInAName(collection, source) {
	const arr = [];

	collection.forEach((object) => {
		const objectKeysArray = Object.keys(object);
		const sourceKeysArray = Object.keys(source);
		const hasAllKeyValues = sourceKeysArray.every(
			(prop) => objectKeysArray.includes(prop) && object[prop] === source[prop]
		);

		if (hasAllKeyValues) arr.push(object);
	});

	return arr;
}

const whatIsInANameOutput = whatIsInAName(
	[
		{
			apple: 1,
			bat: 2
		},
		{
			bat: 2
		},
		{
			apple: 1,
			bat: 2,
			cookie: 2
		}
	],
	{
		apple: 1,
		bat: 2
	}
);
console.log(whatIsInANameOutput);

// Spinal Tap Case
function spinalCase(string) {
	const alphabetArray = Array.from(Array(26))
		.map((val, index) => 'a'.charCodeAt() + index)
		.map((val) => String.fromCharCode(val));

	const stringArray = [...string]
		.map((char) => (alphabetArray.includes(char.toLowerCase()) ? char : ' '))
		.join('')
		.split(' ');

	const splittedArray = stringArray
		.map((string) => {
			const charArray = [...string]
				.map((char, index) => {
					while (!alphabetArray.includes(char) && index > 0) {
						return [' ', char];
					}

					return char;
				})
				.flat()
				.join('');

			return charArray;
		})
		.join(' ');

	const spinalCaseString = splittedArray
		.split(' ')
		.map((string) => string.toLowerCase())
		.join('-');

	return spinalCaseString;
}

const spinalCaseOutput = spinalCase('AllThe-small Things');
console.log(spinalCaseOutput);
