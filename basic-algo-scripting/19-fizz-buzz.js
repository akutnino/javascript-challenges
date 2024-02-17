// FizzBuzz.
const myNumber = 100;

function fizzbuzz(number) {
  for (let i = 1; i <= number; i++) {
    let word = '';
    if (i % 3 === 0) word = 'Fizz';
    if (i % 5 === 0) word = 'Buzz';
    if (i % 3 === 0 && i % 5 === 0) word = 'FizzBuzz';

    console.log(word || i);
  }
}

fizzbuzz(myNumber);
