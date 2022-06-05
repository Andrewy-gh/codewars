// 7 kyu Sort with a sorting array
// Sort an array according to the indices in another array. It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

// initialArray = ['x', 'y', 'z'] sortingArray = [ 1, 2, 0]

// sort(initialArray, sortingArray) => ['z', 'x', 'y']

// sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']

function sort(initialArray, sortingArray) {
  const result = new Array(initialArray.length).fill();
  for (let i = 0; i < result.length; i++) {
    result[[sortingArray[i]]] = initialArray[i];
  }
  return result;
}

console.log(sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3])); //, [1, 3, 2, 5, 4])
console.log(sort(['x', 'y', 'z'], [1, 2, 0])); // ['z', 'x', 'y']
console.log(sort(['z', 'x', 'y'], [0, 2, 1])); // ['z', 'y', 'x']
