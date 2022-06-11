// 7 kyu Sum of all the multiples of 3 or 5
// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
  if (n < 3) return 0;
  return [...Array(n + 1).keys()]
    .filter((e) => e % 3 === 0 || e % 5 === 0)
    .reduce((p, c) => p + c, 0);
}

console.log(findSum(5)); //, 8);
console.log(findSum(10)); //, 33);
