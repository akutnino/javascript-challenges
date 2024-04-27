// CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6]] === [1, 2, 3, 4, 5, 6, 7]

function flattenArray(array) {
	let myArray = array;
	let myDepth = 1;

	while (myArray.some((element) => typeof element === 'object')) {
		myArray = myArray.flat(myDepth);
		myDepth = myDepth + 1;
	}

	return myArray;
}

const flattenArrayOutput = flattenArray([
	[[1], 2],
	[[3, 4], 5],
	[6, [7, [8, 9]], 10]
]);
console.log(flattenArrayOutput);
