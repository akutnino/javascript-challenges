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
