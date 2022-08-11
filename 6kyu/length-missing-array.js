// 6 kyu Length of missing array
// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3


// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

function getLengthOfMissingArray(arrayOfArrays) {
  if ((arrayOfArrays === null) || (!arrayOfArrays.length)) return 0
  for (const i of arrayOfArrays) {
    if ((i === null) || (!i.length)) return 0
  }
  const lengths = arrayOfArrays.map(e => e.length).sort((a, b) => a - b)
  const d = (lengths[lengths.length - 1] - lengths[0]) / lengths.length;
  for (let i = 0; i < lengths.length; i++) {
    if (lengths[i + 1] - lengths[i] !== d) {
      return (lengths[i] += d)
    }
  }
}

console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ))// 3
console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ))// 2
console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ))// 2
console.log(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ))// 5
      
console.log(getLengthOfMissingArray([ ]))// 0