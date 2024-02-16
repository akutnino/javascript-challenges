// Sum All Primes.
const myNumber = 977;

function sumPrimes(number) {
  const primeArray = [];

  function checkPrime(iteration) {
    for (let i = 2; i < iteration; i++) {
      if (iteration % i === 0) return false;
    }

    return true;
  }

  for (let i = 2; i <= number; i++) {
    if (checkPrime(i)) primeArray.push(i);
  }

  return primeArray.reduce((acc, curr) => (acc += curr), 0);
}

const output = sumPrimes(myNumber);
console.log(output);
