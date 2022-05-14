// 6 kyu Break camelCase


// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  return string.split('').map(e => e === e.toUpperCase() ? ` ${e}` : e).join('')
}