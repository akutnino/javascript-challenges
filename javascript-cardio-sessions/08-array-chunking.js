// CHALLENGE 8: ARRAY CHUNKING
// Split an array into chuncked arrays of a specific length
// ex. chunckArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]]

function chunkArray(array, length) {
	const ouptutArray = [];
	let chunckArray = [];

	for (let i = 0; i < array.length; i++) {
		if (chunckArray.length === length) {
			ouptutArray.push(chunckArray);
			chunckArray = [];
		}

		chunckArray.push(array[i]);
	}

	if (chunckArray.length > 0) {
		ouptutArray.push(chunckArray);
		chunckArray = [];
	}

	return ouptutArray;
}

const chunckArrayOutput = chunkArray([1, 2, 3, 4, 5, 6, 7], 4);
console.log(chunckArrayOutput);
