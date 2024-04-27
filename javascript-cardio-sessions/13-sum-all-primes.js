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
