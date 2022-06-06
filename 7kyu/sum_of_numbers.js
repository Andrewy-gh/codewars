// 7 kyu Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a, b) {
  if (a === b) return a;
  const [start, end] = Array(a, b).sort((a, b) => a - b);
  return [...Array(end - start + 1).keys()]
    .map((x) => x + start)
    .reduce((acc, e) => acc + e, 0);
}

console.log(getSum(-1, 0)); //,-1);
console.log(getSum(0, 1)); //,1););
console.log(getSum(1, 0)); // --> 1 (1 + 0 = 1)
console.log(getSum(1, 2)); // --> 3 (1 + 2 = 3)
console.log(getSum(0, 1)); // --> 1 (0 + 1 = 1)
console.log(getSum(1, 1)); // --> 1 (1 since both are same)
console.log(getSum(-1, 0)); // --> -1 (-1 + 0 = -1)
console.log(getSum(-1, 2)); // --> 2 (-1 + 0 + 1 + 2 = 2)
