// 6kyu Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

const findMissingLetter = (array) => {
  const arr = array.map((e) => e.charCodeAt(0));
  const expectedSum =
    ((arr[arr.length - 1] - arr[0] + 1) / 2) * (arr[0] + arr[arr.length - 1]);
  const actualSum = arr.reduce((p, c) => p + c, 0);
  return String.fromCharCode(expectedSum - actualSum);
};

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])); // 'e'
console.log(findMissingLetter(['O', 'Q', 'R', 'S'])); // 'P'
