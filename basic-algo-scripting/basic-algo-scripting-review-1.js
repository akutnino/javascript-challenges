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
console.log(reverseStringOutput);

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
console.log(isPalindromeOutput);

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
console.log(reverseIntOutput);

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
console.log(capitalizeLettersOutput);

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
console.log(maxCharacterOutput);

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

FizzBuzz();
