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
