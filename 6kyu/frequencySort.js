// 6 kyu Simple frequency sort

// In this Kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// --we sort by highest frequency to lowest frequency. If two elements have same frequency, we sort by increasing value

// More examples in test cases.

// Good luck!

// Please also try Simple time difference


function solve(arr) {
  const frequency = arr.reduce((obj, item) => {
    if (!obj[item]) obj[item] = 0
    obj[item]++
    return obj
  },{})
  return arr.sort((a,b) => {
    if (frequency[a] > frequency[b]) return -1
    else if ((frequency[a] === frequency[b]) && a < b) return -1
    else return 1
  })
}

console.log(solve([2,3,5,3,7,9,5,3,7]))// [3,3,3,5,5,7,7,2,9]
console.log(solve([1,2,3,0,5,0,1,6,8,8,6,9,1]))// [1,1,1,0,0,6,6,8,8,2,3,5,9]
console.log(solve([5,9,6,9,6,5,9,9,4,4]))// [9,9,9,9,4,4,5,5,6,6]
console.log(solve([4,4,2,5,1,1,3,3,2,8]))// [1,1,2,2,3,3,4,4,5,8]
