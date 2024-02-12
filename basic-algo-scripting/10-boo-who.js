// Boo who.
const myVariable = false;

function booWho(bool) {
  const output = bool === true || bool === false ? true : false;
  return output;
}

const output = booWho(myVariable);
console.log(output);

// Other Solutions...
function solutionTwo(bool) {
  if (bool === true || bool === false) {
    return true;
  } else {
    return false;
  }
}
