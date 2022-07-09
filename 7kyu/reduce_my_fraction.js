// 7 kyu Reduce My Fraction
// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

// input:   [numerator, denominator]
// output:  [reduced numerator, reduced denominator]
// example: [45, 120] --> [3, 8]

// All numerators and denominators will be positive integers.

// Note: This is an introductory Kata for a series... coming soon!

// ! Euclids's Algorithm Calculator function
// ! https://www.calculatorsoup.com/calculators/math/gcf-euclids-algorithm.php
function getGcf(a, b) {
  var r = a % b;
  while (r !== 0) {
    a = b;
    b = r;
    r = a % b;
  }
  return b;
}

function reduce(fraction) {
  const gcf = getGcf(fraction[0], fraction[1]);
  const a = fraction[0] / gcf;
  const b = fraction[1] / gcf;
  return [a, b];
}

console.log(reduce([45, 120])); // [3, 8]
console.log(reduce([60, 20])); // [3, 1]
console.log(reduce([80, 120])); // [2, 3]
console.log(reduce([4, 2])); // [2, 1]
console.log(reduce([45, 120])); // [3, 8]
console.log(reduce([1000, 1])); // [1000, 1]
console.log(reduce([1, 1])); // [1, 1]
