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
