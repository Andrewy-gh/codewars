// 6 kyu Difference of 2
// The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

// The result array should be sorted in ascending order of values.

// Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.
// Examples

// [1, 2, 3, 4]  should return [[1, 3], [2, 4]]

// [4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

// [1, 23, 3, 4, 7] should return [[1, 3]]

// [4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]

function twosDifference(input) {
  const getSubset = (input) => {
    let arr = []
    for (let i = 0; i < input.length - 1; i++) {
      const tail = input.slice(i + 1)
      for (let j = 0; j < tail.length; j++) {
        arr.push([input[i]].concat(tail[j]))
      }
    }
    return arr
  }
  input.sort((a,b) => a - b)
  return getSubset(input).filter(e => e[1] - e[0] === 2)
}

console.log(twosDifference([1,2,3,4]) === [[1,3],[2,4]]);
console.log(twosDifference([1,3,4,6]) === [[1,3],[4,6]]);