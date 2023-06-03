// 7 kyu
// Sum of the first nth term of Series

// Task:

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// Rules:

//     You need to round the answer to 2 decimal places and return it as String.

//     If the given value is 0 then it should return 0.00

//     You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)

// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
  // Happy Coding ^_^
  if (n === 0) return '0.00'
  let result = 1
  let rest = 0
  for (let i = n - 1, j = 4; i > 0; i--, j += 3) {
    rest += 1 / j
  }
  result += rest
  return String(result.toFixed(2))
}