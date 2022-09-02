// 6 kyu
// Playing with passphrases

// Description:

// Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

// choose a text in capital letters including or not digits and non alphabetic characters,

//     shift each letter by a given number but the transformed letter must be a letter (circular shift),
//     replace each digit by its complement to 9,
//     keep such as non alphabetic and non digit characters,
//     downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
//     reverse the whole result.

// Example:

// your text: "BORN IN 2015!", shift 1

// 1 + 2 + 3 -> "CPSO JO 7984!"

// 4 "CpSo jO 7984!"

// 5 "!4897 Oj oSpC"

// With longer passphrases it's better to have a small and easy program. Would you write it?

// https://en.wikipedia.org/wiki/Passphrase

function playPass(s, n) {
  // your code
  const checkLetter = (str) => {
    if (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) return true
    return false
  }
  const checkNumber = (str) => {
    if (str.charCodeAt(0) >= 48 && str.charCodeAt(0) <= 57) return true
    return false
  }
  const shiftLetter = (letter) => {
    const code = letter.charCodeAt(0)
    if (code + n > 122) {
      const remainder = (code + n) - 122
      return String.fromCharCode(97 + (remainder - 1))
    } else {
      return String.fromCharCode(code + n)
    }
  }
  const shiftNumber = (num) => String(9 - Number(num))
  const arr = s.toLowerCase().split('')
  for (let i = 0; i < arr.length; i++) {
    if (checkLetter(arr[i]) && i % 2 === 0) {
      arr[i] = shiftLetter(arr[i]).toUpperCase()
    } else if (checkLetter(arr[i]) && i % 2 === 1) {
      arr[i] = shiftLetter(arr[i]).toLowerCase()
    } else if (checkNumber(arr[i])) {
      arr[i] = shiftNumber(arr[i])
    } else {
      
    }
  }
  return arr.reverse().join('')
}

console.log(playPass("I LOVE YOU!!!", 1) === "!!!vPz fWpM J")

console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2) === 
    "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO")
