// 6 kyu Estimating Amounts of Subsets
// Given a set of elements (integers or string characters) that may occur more than once, we need to know the amount of subsets that none of their values have repetitions. Let's see with an example:

// set numbers = {1, 2, 3, 4}

// The subsets are:

// {{1}, {2}, {3}, {4}, {1,2}, {1,3}, {1,4}, {2,3}, {2,4},{3,4}, {1,2,3}, {1,2,4}, {1,3,4}, {2,3,4}, {1,2,3,4}} (15 subsets, as you can see the empty set, {}, is not counted)

// Let's see an example with repetitions of an element:

// set letters= {a, b, c, d, d}

// The subsets for this case will be:

// {{a}, {b}, {c}, {d}, {a,b}, {a,c}, {a,d}, {b,c}, {b,d},{c,d}, {a,b,c}, {a,b,d}, {a,c,d}, {b,c,d}, {a,b,c,d}} (15 subsets, only the ones that have no repeated elements inside)

// The function est_subsets() (javascript: ``estSubsets()```) will calculate the number of these subsets. It will receive the array as an argument and according to its features will output the amount of different subsets without repetitions of its elements.

// est_subsets([1, 2, 3, 4]) == 15
// est_subsets(['a', 'b', 'c', 'd', 'd']) == 15

// Features of the random tests:

// Low Performance Tests: 40
// Length of the arrays between 6 and 15

// High Performance Tests: 80
// Length of the arrays between 15 and 100 (Python an Ruby) and between 15 and 50 javascript)

// Just do it!

function estSubsets(arr) {
  const mySet = new Set(arr)
  return Math.pow(2, mySet.size) - 1
}

console.log(estSubsets([1, 2, 3, 4]))//, 15);
console.log(estSubsets(['a', 'b', 'c', 'd', 'd']))//, 15);

var arr = [2, 3, 4, 5, 5, 6, 6, 7, 8, 8];
console.log(estSubsets(arr))//, 127);

arr = ['a', 'z', 'z', 'z', 'b', 'j', 'f', 'k', 'b', 'd',
  'j', 'j', 'n', 'm', 'm'];
console.log(estSubsets(arr))//, 511);

arr = [1, 1, 1, 1, 1, 1, 1, 1];
console.log(estSubsets(arr))//, 1);

arr = [];
console.log(estSubsets(arr))//, 0);