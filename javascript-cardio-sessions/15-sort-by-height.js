// CHALLENGE 15: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which
// cannot be moved. Your task is to rearrange the people by their heights in a
// non-descending order without moving the trees.
// ex. a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(array) {
	const indexArray = [];
	const numbersArray = [];

	for (let i = 0; i < array.length; i++) {
		if (array[i] === -1) indexArray.push(i);
		if (array[i] !== -1) numbersArray.push(array[i]);
	}

	const sortedArray = Array.from(numbersArray).sort();

	for (let j = 0; j < sortedArray.length; j++) {
		if (indexArray.includes(j)) sortedArray.splice(j, 0, -1);
	}

	return sortedArray;
}

const sortByHeightOutput = sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
console.log(sortByHeightOutput);
