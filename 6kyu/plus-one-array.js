// 6 kyu +1 Array

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

//     the array can't be empty
//     only non-negative, single digit integers are allowed

// Return nil (or your language's equivalent) for invalid inputs.
// Examples

// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

function upArray(arr) {
  if ((arr.some(e => ((e < 0) || (e > 9)))) || (!arr.length)) return null
  arr.reverse()
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === 9) && (i === arr.length - 1)) {
      arr[i] = 0
      arr.push(1)
      return arr.reverse()
    } else if (arr[i] === 9) {
      arr[i] = 0
    } else {
      arr[i] += 1
      return arr.reverse()
    }
  }
}

console.log(upArray([2,3,9]))// [2,4,0]
console.log(upArray([4,3,2,5]))// [4,3,2,6]
console.log(upArray([1,-9]))// null