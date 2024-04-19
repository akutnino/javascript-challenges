// Convert Celsius to Fahrenheit.
const celsiusNumber = -30;

// prettier-ignore
function convertToF(celsius) {
  return Number((celsius * 9 / 5) + 32);
}

const output = convertToF(celsiusNumber);
console.log(output);
