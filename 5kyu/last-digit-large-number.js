// 5 kyu Last digit of a large number

// Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^bab. Note that aaa and bbb may be very large!

// For example, the last decimal digit of 979^797 is 999, since 97=47829699^7 = 478296997=4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2200)2300, which has over 109210^{92}1092 decimal digits, is 666. Also, please take 000^000 to be 111.

// You may assume that the input will always be valid.
// Examples

// lastDigit("4", "1")            // returns 4
// lastDigit("4", "2")            // returns 6
// lastDigit("9", "7")            // returns 9    
// lastDigit("10","10000000000")  // returns 0

// Remarks
// JavaScript, C++, R, PureScript, COBOL

// Since these languages don't have native arbitrarily large integers, your arguments are going to be strings representing non-negative integers instead.

function lastDigit(str1, str2) {
  if (str2 === "0") return 1
  const table = [[1],
  [6, 2, 4, 8],
  [1, 3, 9, 7],
  [6, 4],
  [5],
  [6],
  [1, 7, 9, 3],
  [6, 8, 4, 2],
  [1, 9],
  ]
  const digit = Number(str1.slice(-1))
  if (digit === 0) return 0
  const exponent = BigInt(str2)
  const cycle = table[digit - 1].length
  const remainder = Number(exponent % BigInt(cycle)) 
  return table[digit - 1][remainder]
}

console.log(lastDigit("4", "1"))// 4
console.log(lastDigit("4", "2"))// 6
console.log(lastDigit("9", "7"))// 9
console.log(lastDigit("10", "10000000000"))// 0
console.log(lastDigit("1606938044258990275541962092341162602522202993782792835301376", "2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"))// 6
console.log(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"))// 7