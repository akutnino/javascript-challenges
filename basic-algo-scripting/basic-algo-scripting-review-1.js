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

	return charArray;
}

const longestWordOutput = longestWord(`Hello there, my name is Nino`);
console.log(longestWordOutput);

// CHALLENGE 9: ARRAY CHUNKING
// Split an array into chuncked arrays of a specific length
// ex. chunckArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]]

function chunkArray(array, length) {
	return;
}

// CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6]] === [1, 2, 3, 4, 5, 6, 7]

function flattenArray(array) {
	return;
}

const flattenArrayOutput = flattenArray();

// CHALLENGE 10: ANAGRAM
