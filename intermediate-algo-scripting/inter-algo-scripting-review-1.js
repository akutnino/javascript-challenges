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
	const sourceKeys = Object.keys(source);

	collection.forEach((object) => {
		const objectKeys = Object.keys(object);
		const hasAllProps = sourceKeys.every(
			(key) => objectKeys.includes(key) && object[key] === source[key]
		);

		if (hasAllProps) arr.push(object);
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
	const TOTAL_ALPHABET_LETTERS = 26;

	const alphabetArray = Array.from(Array(TOTAL_ALPHABET_LETTERS))
		.map((val, index) => index + 'a'.charCodeAt())
		.map((val) => String.fromCharCode(val));

	const stringArray = [...string]
		.map((char) => (alphabetArray.includes(char.toLowerCase()) ? char : ' '))
		.join('')
		.split(' ');

	const splittedStringArray = stringArray
		.map((string) => {
			return [...string]
				.map((char, index) => {
					const charSplitNeeded = !alphabetArray.includes(char) && index !== 0;

					if (charSplitNeeded) return [' ', char];
					return char;
				})
				.flat()
				.join('');
		})
		.map((char) => char.split(' '))
		.flat();

	const spinalCaseOutput = splittedStringArray.join('-').toLowerCase();

	return spinalCaseOutput;
}

const spinalCaseOutput = spinalCase(
	'Look-atAll+the/small,and7Tall_ThingsAroundYou?Huh'
);
console.log(spinalCaseOutput);
