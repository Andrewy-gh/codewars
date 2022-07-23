// 6 kyu Help Kiyo きよ solve her problems LCM Fun!
// 17293% of 10969 of 284user8476848

//     JavaScript
//     Node v8.1.3

//         VIM
//         EMACS

// Instructions
// Output
// Help Kiyo きよ solve her problems LCM Fun!

// Kiyo has been given a series of problems and she needs your help to solve them!

// You will be given a two-dimensional array such as the one below.

// a =
// [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9]
// ]

// Remove everything but odd integers from each sub-array.

// Sum the remaining odd integers of each sub-array.

// Sum of odds ( a[0] = 1 + 3 + 5 + 7 + 9 ) = 25

// Find the Least common multiple of the arrays.

//  (25, 25, 25, 25, 25, 25, 25, 25, 25)
//   ^                                ^
//   |                                |
// a[0]-----------------------------a[8]

// example : lcm( 25, 25, 25, 25, 25, 25, 25, 25, 25 ) = 25

// example : lcm( 37, 29, 19, 38, 31, 28, 15, 24, 9 ) = 1592632440

// Integers are between 0 and 9. Sub-array size is always 9. The number of sub-arrays varies between 9 and 18.

// Watch out for non-integers mixed in the arrays. If all arrays are empty return 0.

// https://en.wikipedia.org/wiki/Least_common_multiple

function kiyoLcm(a) {
  if (a.every((e) => !e.length)) return 0;
  const gcd = (a, b) => (a ? gcd(b % a, a) : b);
  const lcm = (a, b) => (a * b) / gcd(a, b);
  const returnOdd = (a) => a.filter((e) => e % 2 === 1);

  return a
    .map((e) => returnOdd(e))
    .map((x) => x.reduce((p, c) => p + c, 0))
    .reduce(lcm);
}

const a1 = [
  [4, 3, 7, 8, 9, 2, 1, 5, 'c'],
  [6, 5, 6, 1, 'v', 1, 0, 5, 1],
  [4, 4, 'c', 7, 6, 6, 3, 6, 7],
  [1, 7, 7, 'l', 5, 8, 9, 5, 9],
  [0, 't', 8, 2, 8, 9, 0, 8, 0],
  [4, 6, 2, 6, 'o', 8, 4, 2, 4],
  [3, 6, 9, 2, 0, 8, 2, 3, 'u'],
  [9, 3, 1, 9, 4, 4, 'u', 7, 7],
  [0, 'n', 9, 0, 0, 0, 9, 2, 2],
];

console.log(kiyoLcm(a1) === 0);

const a2 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];

console.log(kiyoLcm(a2) === 25);

const a3 = [
  [1, 1, 5, 4, 4, 2, 5, 1, 5],
  [4, 2, 3, 5, 1, 4, 4, 2, 5],
  [4, 2, 1, 4, 5, 5, 4, 3, 3],
  [2, 1, 5, 1, 1, 1, 1, 2, 4],
  [5, 1, 3, 1, 3, 2, 4, 2, 1],
  [3, 1, 1, 2, 4, 2, 5, 3, 5],
  [5, 2, 5, 3, 3, 4, 3, 4, 1],
  [3, 4, 4, 5, 5, 5, 5, 4, 5],
  [3, 3, 5, 5, 3, 3, 3, 5, 2],
];

console.log(kiyoLcm(a3) === 21420);

const a4 = [
  [9, 4, 5, 8, 0, 9, 1, 1, 3],
  [5, 0, 8, 5, 4, 3, 4, 5, 5],
  [9, 5, 1, 6, 7, 8, 8, 9, 5],
  [9, 9, 7, 8, 6, 2, 0, 2, 9],
  [4, 7, 9, 3, 6, 6, 2, 6, 1],
  [0, 3, 5, 7, 0, 5, 1, 6, 2],
  [7, 8, 4, 1, 0, 1, 6, 0, 0],
  [0, 2, 1, 8, 8, 7, 6, 0, 1],
  [4, 3, 5, 6, 5, 4, 0, 3, 6],
];

console.log(kiyoLcm(a4) === 1970640);

const a5 = [
  [1, 7, 6, 6, 'm', 5, 1, 8, 0],
  [6, 2, 8, 'h', 0, 4, 6, 7, 3],
  [5, 5, 5, 7, 2, 1, 4, 'c', 3],
  [7, 0, 7, 1, 1, 1, 't', 9, 3],
  [8, 9, 2, 4, 4, 'v', 6, 2, 4],
  ['o', 1, 5, 1, 7, 6, 2, 4, 6],
  [8, 8, 8, 9, 4, 8, 9, 9, 'j'],
  [4, 9, 8, 'v', 3, 3, 5, 0, 6],
  [1, 8, 6, 8, 7, 'e', 8, 9, 0],
];

console.log(kiyoLcm(a5) === 24226020);

const a6 = [
  [6, 7, 2, 5, 1, 6, 9, 1, 4],
  [4, 4, 7, 1, 2, 9, 7, 6, 7],
  [8, 2, 7, 4, 5, 7, 1, 5, 4],
  [1, 9, 4, 8, 7, 7, 3, 1, 7],
  [9, 3, 9, 8, 1, 1, 5, 6, 7],
  [7, 4, 4, 1, 5, 8, 4, 1, 5],
  [8, 5, 5, 6, 1, 3, 7, 8, 4],
  [7, 2, 8, 6, 5, 7, 9, 5, 7],
  [9, 1, 1, 7, 9, 5, 7, 1, 9],
];

console.log(kiyoLcm(a6) === 398281800);

const a7 = [[], [], [], [], [], [], [], [], []];

console.log(kiyoLcm(a7) === 0);
