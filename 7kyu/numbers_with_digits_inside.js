// 7kyu Numbers with this digit inside
// You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
// The value of d will always be 0 - 9.
// The value of x will always be greater than 0.

// You have to return as an array

//     the count of these numbers,
//     their sum
//     and their product.

//     For example:

// x = 11
// d = 1
// ->
// Numbers: 1, 10, 11
// Return: [3, 22, 110]

// If there are no numbers, which include the digit, return [0,0,0].

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

function numbersWithDigitInside(x, d) {
  const range = [...Array(x).keys()].map((x) => x + 1);
  const count = range.filter((e) => String(e).includes(d));
  const sum = count.reduce((p, c) => p + c, 0);
  const product = count.reduce((p, c) => p * c, 1);
  return count.length ? [count.length, sum, product] : [0, 0, 0];
}

console.log(numbersWithDigitInside(11, 1)); // [3, 22, 110]
console.log(numbersWithDigitInside(5, 6)); // [ 0, 0, 0 ]
console.log(numbersWithDigitInside(1, 0)); // [ 0, 0, 0 ]
console.log(numbersWithDigitInside(7, 6)); // [ 1, 6, 6 ]
console.log(numbersWithDigitInside(11, 1)); // [ 3, 22, 110 ]
console.log(numbersWithDigitInside(20, 0)); // [ 2, 30, 200 ]
console.log(numbersWithDigitInside(44, 4)); // [ 9, 286, 5955146588160 ]
