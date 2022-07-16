// 7 kyu Divide and Conquer
// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.
// Fundamentals
// Strings
// Arrays

function divCon(x){
  const num = x.filter(e => typeof e === 'number').reduce((p,c) => p + c,0)
  const str = x.filter(e => typeof e === 'string').reduce((p,c) => +p + +c, 0)
  return num - str
}

console.log(divCon([9, 3, '7', '3']))//, 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]))//, 14); 
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))//, 13); 