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
