// 6 kyu
// Twisted Sum

// Find the sum of the digits of all the numbers from 1 to N (both ends included).
// Examples

// # N = 4
// 1 + 2 + 3 + 4 = 10

// # N = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

// # N = 12
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

function twistedSum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    if (i > 9) {
      total += String(i)
        .split("")
        .map(Number)
        .reduce((a, c) => a + c, 0);
    } else {
      total += i;
    }
  }
  return total;
}

console.log(twistedSum(12), 51);
