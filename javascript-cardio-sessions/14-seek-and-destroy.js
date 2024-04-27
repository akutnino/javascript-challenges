// CHALLENGE 14: SEEK AND DESTROY
// Remove from the array whatever is in the following arguments. Return the leftoever values
// in the array. NOTE: you need to use the 'arguments' object.
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) = [3, 4, 'hello']

function seekAndDestroy(array) {
	const seekArray = array;
	const destroyArray = Array.from(arguments).splice(1);

	const outputArray = seekArray.filter((value) =>
		destroyArray.includes(value) ? false : true
	);

	return outputArray;
}

const seekAndDestroyOutput = seekAndDestroy(
	[2, 3, 4, 6, 6, 'hello'],
	2,
	6,
	'hello'
);
console.log(seekAndDestroyOutput);
