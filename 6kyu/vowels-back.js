// 6 kyu Vowels Back
// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.

function vowelBack(s) {
  const convertVowel = (code) => {
    if (code === 111) {
      return String.fromCharCode(code - 1)
    } else if (code === 101) {
      return String.fromCharCode(code - 4)
    } else if (code - 4 < 97) {
      return String.fromCharCode(122 - (4 - (97 - code)))
    } else {
      return String.fromCharCode(code - 5)
    }
  }
  const convertConsonant = (code) => {
    if (code === 99) {
      return String.fromCharCode(code - 1)
    } else if (code === 100) {
      return String.fromCharCode(code - 3)
    } else if (code + 9 > 122) {
      return String.fromCharCode(97 + (8 - (122 - code)))
    } else {
      return String.fromCharCode(code + 9)
    }
  }
  const revertValue = (letter) => 'code'.includes(letter)
  const arr = s.split('')
  for (let i = 0; i < arr.length; i++) {
    const code = arr[i].charCodeAt(0)
    let result;
    if ('aeiou'.includes(arr[i])) {
      result = convertVowel(code)
    } else {
      result = convertConsonant(code)
    }
    if (!revertValue(result)) {
      arr[i] = result
    }
  }
  return arr.join('')
}

console.log(vowelBack("testcase") === "tabtbvba");
console.log(vowelBack("codewars") === "bnaafvab");
console.log(vowelBack("exampletesthere") === "agvvyuatabtqaaa");