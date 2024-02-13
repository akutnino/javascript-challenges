// Falsy Bouncer.
const myArray = [7, 'ate', '', false, 9];

function bouncer(array) {
  const output = array.filter((element) => element);
  return output;
}

const output = bouncer(myArray);
console.log(output);
