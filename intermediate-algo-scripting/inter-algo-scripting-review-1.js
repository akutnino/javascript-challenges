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

		if (hasAllKeyValues) {
			arr.push(object);
		}
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
