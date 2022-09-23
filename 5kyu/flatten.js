// 5 kyu
// flatten()

// For this exercise you will create a global flatten method. The method takes in any number of arguments and flattens them into a single array. If any of the arguments passed in are an array then the individual objects within the array will be flattened so that they exist at the same level as the other arguments. Any nested arrays, no matter how deep, should be flattened into the single array result.

// The following are examples of how this function would be used and what the expected results would be:

// flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
// flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']

function flatten(...arr) {
  const flatDeep = (arr, d = 1) => {
  if (!Array.isArray(arr)) {
    return arr;
  }
  return d > 0
    ? arr.reduce((acc, val) => acc.concat(flatDeep(val, d - 1)), [])
    : arr.slice();
  }
  return flatDeep(arr, Infinity)
}

console.log(flatten(1, [2, 3], 4, 5, [6, [7, [8]]]) === [1,2,3,4,5,6,7,8])
console.log(flatten([[[[[1]]]]], ['a', [3,['b']]], null, 5, 'c') === [1,'a',3,'b',null,5,'c'])
