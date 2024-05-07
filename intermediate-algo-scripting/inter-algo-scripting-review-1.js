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
				.map((char, index) =>
					!alphabetArray.includes(char) && index !== 0 ? [' ', char] : char
				)
				.flat()
				.join('');
		})
		.map((char) => char.split(' '))
		.flat();

	return splittedStringArray.join('-').toLowerCase();
}

const spinalCaseOutput = spinalCase(
	'Look-atAll+the/small,and7Tall_ThingsAroundYou?Huh'
);
console.log(spinalCaseOutput);

// Pig Latin
function translatePigLatin(string) {
	const vowelArray = ['a', 'e', 'i', 'o', 'u'];
	const isVowel = vowelArray.includes([...string].at(0));

	if (isVowel) return [...string, 'way'].join('');

	const consonantCluster = [];

	for (let i = 0; i < [...string].length; i++) {
		if (!vowelArray.includes([...string][i])) {
			consonantCluster.push([...string][i]);
		} else {
			break;
		}
	}

	return [string.slice(consonantCluster.length), consonantCluster, 'ay']
		.flat()
		.join('');
}

const translatePigLatinOutput = translatePigLatin('schwartz');
console.log(translatePigLatinOutput);

// Search and Replace
function myReplace(string, before, after) {
	const alphabetArray = Array.from(Array(26))
		.map((val, index) => index + 'a'.charCodeAt())
		.map((val) => String.fromCharCode(val));

	return string
		.split(' ')
		.map((str) => {
			const isLowerCase = alphabetArray.includes(before.at());
			const lowerCased = after.at().toLowerCase() + after.slice(1);
			const upperCased = after.at().toUpperCase() + after.slice(1);

			if (str === before && isLowerCase) return lowerCased;
			if (str === before && !isLowerCase) return upperCased;

			return str;
		})
		.join(' ');
}

const myReplaceOutput = myReplace(
	'A quick brown fox Jumped over the lazy dog',
	'Jumped',
	'leaped'
);
console.log(myReplaceOutput);

// DNA Pairing
function pairElement(string) {
	const dnaPairArray = [...string].map((char) => {
		switch (char) {
			case 'A':
				return ['A', 'T'];
			case 'T':
				return ['T', 'A'];
			case 'C':
				return ['C', 'G'];
			case 'G':
				return ['G', 'C'];

			default:
				return 'Invalid';
		}
	});

	return dnaPairArray;
}

const pairElementOutput = pairElement('GCG');
console.log(pairElementOutput);

// Missing Letters
function fearNotLetter(string) {
	const charCodeArray = [...string].map((char) => char.charCodeAt());
	const completecharCode = [];

	for (let i = charCodeArray.at(); i <= charCodeArray.at(-1); i++) {
		completecharCode.push(i);
	}

	const missingLetters = completecharCode
		.filter((char) => !charCodeArray.includes(char))
		.map((val) => String.fromCharCode(val))
		.join('');

	return missingLetters.length === 0 ? undefined : missingLetters;
}

const fearNotLetterOutput = fearNotLetter('abcdefghijklmnopqrstuvwxz');
console.log(fearNotLetterOutput);

// Sorted Union
function uniteUnique(...arr) {
	return arr.reduce((acc, curr) => {
		curr.forEach((val) => {
			if (!acc.includes(val)) acc.push(val);
		});

		return acc;
	}, []);
}

const uniteUniqueOutput = uniteUnique(
	[1, 2, 3],
	[5, 2, 1, 4],
	[2, 1],
	[6, 7, 8]
);
console.log(uniteUniqueOutput);

// Convert HTML Entities
function convertHTML(string) {
	return [...string]
		.map((char, index, array) => {
			switch (char) {
				case '&':
					return '&amp;';
				case '<':
					return '&lt;';
				case '>':
					return '&gt;';
				case `'`:
					return '&apos;';
				case `"`:
					return index > 0 && array[0] !== `"` ? '&quot;' : '';
				default:
					return char;
			}
		})
		.join('');
}

const convertHTMLOutput = convertHTML(`Stuff in "quotation marks"`);
console.log(convertHTMLOutput);

// Sum All Odd Fibonacci Numbers
function sumFibs(nums) {
	const fiblsArray = [0, 1];

	for (let i = 0; i <= nums; i++) {
		if (fiblsArray[i] + fiblsArray[i + 1] > nums) break;
		fiblsArray.push(fiblsArray[i] + fiblsArray[i + 1]);
	}

	return fiblsArray.reduce(
		(acc, curr) => (curr % 2 !== 0 ? (acc += curr) : (acc += 0)),
		0
	);
}

const sumFibsOutput = sumFibs(75024);
console.log(sumFibsOutput);

// Sum All Primes
function sumPrimes(num) {
	return Array.from(Array(num))
		.map((val, index) => index + 1)
		.filter((val) => {
			if (val < 2) return;

			for (let i = 2; i < val; i++) {
				if (val % i === 0) return;
			}

			return true;
		})
		.reduce((acc, curr) => (acc += curr), 0);
}

const sumPrimesOutput = sumPrimes(977);
console.log(sumPrimesOutput);
