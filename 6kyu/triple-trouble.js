// 6 kyu
// Triple trouble

// Write a function

// tripledouble(num1,num2)

// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

// If this isn't the case, return 0
// Examples

// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1

function tripledouble(num1, num2) {
  let trip = [];
  const num1Arr = String(num1).split("");
  const num2Arr = String(num2).split("");
  for (let i = 0; i < num1Arr.length - 2; i++) {
    if (num1Arr[i] === num1Arr[i + 1] && num1Arr[i + 1] === num1Arr[i + 2]) {
      trip.push(num1Arr[i]);
    }
  }
  if (trip.length < 1) return 0;
  for (let i = 0; i < num2Arr.length - 1; i++) {
    if (num2Arr[i] === num2Arr[i + 1] && trip.includes(num2Arr[i])) {
      return 1;
    }
  }
  return 0;
}
