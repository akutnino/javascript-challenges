// Answer All Algo Scripting Questions from Chris Cooper YT playlist.

// Challenge 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(string) {
	const output = [];

	for (let i = [...string].length; i >= 0; i--) {
		output.push([...string][i]);
	}

	return output.join('');
}

const reverseStringOutput = reverseString('hello');
// console.log(reverseStringOutput);

// Challenge 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') === false

function isPalindrome(string) {
	const charArrayOne = [];

	for (let i = [...string].length; i >= 0; i--) {
		charArrayOne.push([...string][i]);
	}
	return string === charArrayOne.join('');
}

const isPalindromeOutput = isPalindrome('racecar');
// console.log(isPalindromeOutput);

// Challenge 3: REVERSE AN INTEGER
// Return an interger in reverse
// ex. reverseInt(521) === 125

function reverseInt(interger) {
	const intArray = [];

	for (let i = [...String(interger)].length - 1; i >= 0; i--) {
		intArray.push([...String(interger)][i]);
	}

	return Number(intArray.join(''));
}

const reverseIntOutput = reverseInt(987654321);
// console.log(reverseIntOutput);

// Challenge 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(string) {
	const finalArray = [];
	const wordsArray = [];
	let wordArray = [];

	for (let i = 0; i < [...string].length; i++) {
		if ([...string][i] === ' ') {
			wordsArray.push(wordArray.join(''));
			wordArray = [];
			continue;
		}
		wordArray.push([...string][i]);
	}

	if (wordArray.length > 0) {
		wordsArray.push(wordArray.join(''));
	}

	for (let j = 0; j < wordsArray.length; j++) {
		finalArray.push(wordsArray[j][0].toUpperCase() + wordsArray[j].slice(1));
	}

	return finalArray.join(' ');
}

const capitalizeLettersOutput = capitalizeLetters('i love javascript');
// console.log(capitalizeLettersOutput);

// Challenge 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') === 'a'

function maxCharacter(string) {
	const charArray = [...string.toLowerCase()].filter((char) =>
		char === ' ' ? false : true
	);

	const charObject = charArray.reduce((acc, curr) => {
		if (acc[curr] == null) acc[curr] = [];
		acc[curr].push(curr);

		return acc;
	}, {});

	const groupedCharArray = Object.values(charObject);

	const sortedByLength = groupedCharArray.sort((a, b) => b.length - a.length);

	const maxCharQuantity = sortedByLength.reduce((acc, curr) => {
		if (curr.length > acc) {
			acc = curr.length;
		}

		return acc;
	}, 0);

	const output = sortedByLength.reduce((acc, curr) => {
		if (curr.length === maxCharQuantity) {
			acc.push(curr[0]);
		}

		return acc;
	}, []);

	return output.length === 1 ? output[0] : output;
}

const maxCharacterOutput = maxCharacter('aaabbbbcccd');
// console.log(maxCharacterOutput);

// Challenge 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. OK
// For Multiples of 3, print 'Fizz', OK
// for multiple of 5 print 'Buzz'. OK
// For numbers whitch are multiples of both 3 and 5, print 'FizzBuzz'.

function FizzBuzz() {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('FizzBuzz');
			continue;
		}

		if (i % 3 === 0) {
			console.log('Fizz');
			continue;
		}

		if (i % 5 === 0) {
			console.log('Buzz');
			continue;
		}

		console.log(i);
	}
}

// FizzBuzz();

// Challenge 7: LONGEST WORD
// Return the longest word of a string
// If more then one longest word, put into an array
// ex. longestWord('Hello, my name is Nino') === 'hello'
// ex. longestWord('Hello there, my name is Nino') === ['hello', 'there']

function longestWord(string) {
	const upperCaseArray = [];
	const lowerCaseArray = [];

	for (let i = 'A'.charCodeAt(); i <= 'Z'.charCodeAt(); i++) {
		upperCaseArray.push(String.fromCharCode(i));
	}

	for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
		lowerCaseArray.push(String.fromCharCode(i));
	}

	const charArray = [...string].filter((char) => {
		const isLetter =
			upperCaseArray.includes(char) || lowerCaseArray.includes(char);

		return isLetter || char === ' ' ? true : false;
	});

	const wordsArray = [];
	let wordArray = [];

	for (let i = 0; i < charArray.length; i++) {
		if (charArray[i] === ' ') {
			wordsArray.push(wordArray.join(''));
			wordArray = [];
			continue;
		}

		wordArray.push(charArray[i]);
	}

	if (wordArray.length > 0) {
		wordsArray.push(wordArray.join(''));
		wordArray = [];
	}

	const lengthArray = wordsArray.map((string) => string.length);

	const largestLength = lengthArray.reduce((acc, curr) => {
		if (curr > acc) {
			acc = curr;
		}

		return acc;
	}, 0);

	const output = wordsArray.filter((word) =>
		word.length === largestLength ? true : false
	);

	return output.length > 1 ? output : output[0];
}

const longestWordOutput = longestWord(`Hello there, my name is Nino`);
// console.log(longestWordOutput);

// CHALLENGE 8: ARRAY CHUNKING
// Split an array into chuncked arrays of a specific length
// ex. chunckArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]]

function chunkArray(array, length) {
	const ouptutArray = [];
	let chunckArray = [];

	for (let i = 0; i < array.length; i++) {
		if (chunckArray.length === length) {
			ouptutArray.push(chunckArray);
			chunckArray = [];
		}

		chunckArray.push(array[i]);
	}

	if (chunckArray.length > 0) {
		ouptutArray.push(chunckArray);
		chunckArray = [];
	}

	return ouptutArray;
}

const chunckArrayOutput = chunkArray([1, 2, 3, 4, 5, 6, 7], 4);
// console.log(chunckArrayOutput);

// CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6]] === [1, 2, 3, 4, 5, 6, 7]

function flattenArray(array) {
	let myArray = array;
	let myDepth = 1;

	while (myArray.some((element) => typeof element === 'object')) {
		myArray = myArray.flat(myDepth);
		myDepth = myDepth + 1;
	}

	return myArray;
}

const flattenArrayOutput = flattenArray([
	[[1], 2],
	[[3, 4], 5],
	[6, [7, [8, 9]], 10]
]);
// console.log(flattenArrayOutput);

// CHALLENGE 10: ANAGRAM
// Return true if anagram and false is not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(string1, string2) {
	const lowercaseArray = [];

	for (let index = 'a'.charCodeAt(); index < 'z'.charCodeAt(); index++) {
		lowercaseArray.push(String.fromCharCode(index));
	}

	const charArrayOne = [...string1.toLowerCase()]
		.filter((char) => (lowercaseArray.includes(char) ? true : false))
		.sort();

	const charArrayTwo = [...string2.toLowerCase()]
		.filter((char) => (lowercaseArray.includes(char) ? true : false))
		.sort();

	return charArrayOne.join('') === charArrayTwo.join('');
}

const isAnagramOutput = isAnagram('Dormitory', 'dirty room##');
// console.log(isAnagramOutput);

// CHALLENGE 11: LETTER CHANGES
// Change every letter of the string to the one that follows it
// and capitalize the vowels
// Z should be A
// ex. 'hello there' === 'Ifmmp, UIfsf'

function letterChanges(string) {
	const TOTAL_ALPHABET_LETTERS = 26;
	const FIRST_LETTER_UNICODE = 97;
	const vowelArray = ['a', 'e', 'i', 'o', 'u'];

	const alphabetArray = Array.from(Array(TOTAL_ALPHABET_LETTERS))
		.map((e, i) => i + FIRST_LETTER_UNICODE)
		.map((e) => String.fromCharCode(e));

	const charArray = [...string].map((char) =>
		alphabetArray.includes(char)
			? String.fromCharCode(char.charCodeAt() + 1)
			: char
	);

	const outputArray = charArray.map((char) =>
		vowelArray.includes(char) ? char.toUpperCase() : char
	);

	return outputArray.join('');
}

const letterChangesOutput = letterChanges('hello there');
// console.log(letterChangesOutput);

// CHALLENGE 12: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO Arrays
// ex. add(2, 5, 6, 7) === 20

function addAll(...params) {
	return params.reduce((acc, curr) => (acc += curr), 0);
}

const addAllOutput = addAll(2, 5, 6, 7);
console.log(addAllOutput);

// CHALLENGE 13: SUM ALL PRIMES
// Pass in a number to loop to and add all of the prime numbers.
// A prime number is a whole number greater than 1 whose only factors
// are 1 and itself
// ex. sumAllPrimes(10) === 17

function sumAllPrimes(number) {
	const primeNumbers = [];

	function checkIfPrime(i) {
		if (i < 2) return false;

		for (let j = 2; j < i; j++) {
			if (i % j === 0) return false;
		}

		return true;
	}

	for (let i = 1; i <= number; i++) {
		if (checkIfPrime(i)) primeNumbers.push(i);
	}

	return primeNumbers.reduce((acc, curr) => (acc += curr), 0);
}

const sumAllPrimesOutput = sumAllPrimes(100);
console.log(sumAllPrimesOutput);

// CHALLENGE 14: SEEK AND DESTROY
// Remove from the array whatever is in the following arguments. Return the leftoever values
// in the array. NOTE: you need to use the 'arguments' object.
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) = [3, 4, 'hello']

function seekAndDestroy(array) {
	const seekArray = array;
	const destroyArray = Array.from(arguments).splice(1);

	const outputArray = seekArray.filter((value) =>
		destroyArray.includes(value) ? false : true
	);

	return outputArray;
}

const seekAndDestroyOutput = seekAndDestroy(
	[2, 3, 4, 6, 6, 'hello'],
	2,
	6,
	'hello'
);
console.log(seekAndDestroyOutput);

// CHALLENGE 15: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which
// cannot be moved. Your task is to rearrange the people by their heights in a
// non-descending order without moving the trees.
// ex. a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(array) {
	const indexArray = [];
	const numbersArray = [];

	for (let i = 0; i < array.length; i++) {
		if (array[i] === -1) indexArray.push(i);
		if (array[i] !== -1) numbersArray.push(array[i]);
	}

	const sortedArray = Array.from(numbersArray).sort();

	for (let j = 0; j < sortedArray.length; j++) {
		if (indexArray.includes(j)) sortedArray.splice(j, 0, -1);
	}

	return sortedArray;
}

const sortByHeightOutput = sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
console.log(sortByHeightOutput);

// CHALLENGE 16: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are
// present, return undefined.
// ex. missingLetters('abce') === 'd'
// ex. missingLetters('abcdefghjklmno') === 'i'
// ex. missingLetters('abcdefghijklmnopqrstuvwxyz') === 'undefined'

function missingLetters(string) {
	const charArray = [...string];
	const firstChar = string.at(0);
	const lastChar = string.at(-1);
	const charOuputArray = [];

	for (let i = firstChar.charCodeAt(); i <= lastChar.charCodeAt(); i++) {
		charOuputArray.push(String.fromCharCode(i));
	}

	const outputArray = charOuputArray.filter((char) =>
		charArray.includes(char) ? false : true
	);

	return outputArray[0];
}

const missingLettersOutput = missingLetters('abcdefghjklmno');
console.log(missingLettersOutput);

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
