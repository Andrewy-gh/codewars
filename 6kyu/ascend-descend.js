// 6 kyu Ascend, Descend, Repeat?
// Caution: This kata does not currently have any known supported versions for JavaScript. It may not be completable due to dependencies on out-dated libraries/language versions.

// You are given three integer inputs: length, minimum, and maximum.

// Return a string that:

//     Starts at minimum
//     Ascends one at a time until reaching the maximum, then
//     Decends one at a time until reaching the minimum
//     repeat until the string is the appropriate length

// Examples:

//  length: 5, minimum: 1, maximum: 3   ==>  "12321"
//  length: 14, minimum: 0, maximum: 2  ==>  "01210121012101"
//  length: 11, minimum: 5, maximum: 9  ==>  "56789876567"

// Notes:

//     length will always be non-negative
//     negative numbers can appear for minimum and maximum values
//     hyphens/dashes ("-") for negative numbers do count towards the length
//     the resulting string must be truncated to the exact length provided
//     return an empty string if maximum < minimum or length == 0
//     minimum and maximum can equal one another and result in a single number repeated for the length of the string

function ascendDescend(length, minimum, maximum) {
  let value;
  const changeBy = (result) => {
    if (result === minimum) {
      value = 1;
    } else if (result === maximum) {
      value = -1;
    }
    result += value;
    return result;
  };
  let result = [];
  result.push(minimum);
  for (let i = 0; i < length - 1; i++) {
    result.push(changeBy(result.slice(-1)[0]));
  }
  return result
    .map((e) => String(e))
    .join('')
    .slice(0, length);
}

console.log(ascendDescend(5, 1, 3)); // '12321'
console.log(ascendDescend(14, 0, 2)); // '01210121012101'
console.log(ascendDescend(11, 5, 9)); // '56789876567'
console.log(ascendDescend(5, 1, 3) === '12321');
console.log(ascendDescend(14, 0, 2) === '01210121012101');
console.log(ascendDescend(11, 5, 9) === '56789876567');
