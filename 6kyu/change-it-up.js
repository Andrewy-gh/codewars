// 6 kyu Change it up
// Create a function that takes a string as a parameter and does the following, in this order:

//     Replaces every letter with the letter following it in the alphabet (see note below)
//     Makes any vowels capital
//     Makes any consonants lower case

// Note:

//     the alphabet should wrap around, so Z becomes A
//     in this kata, y isn't considered as a vowel.

// So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)

function changer(str) {
  const convertLetter = (letter) => {
    const lowerLetter = letter.toLowerCase()
    const code = lowerLetter.charCodeAt(lowerLetter[0])
    let nextletter;
    if (!(code >= 97 && code <= 122)) return letter
    if (code === 122) {
      nextLetter = 'a'
    } else {
      nextLetter = String.fromCharCode(code + 1)
    }
    if ('aeiou'.includes(nextLetter)) {
      return nextLetter.toUpperCase()
    } else {
      return nextLetter.toLowerCase()
    }
  }
  return str.split('').map(e => convertLetter(e)).join('')
}

console.log(changer('Cat30') === 'dbU30');
console.log(changer('Alice') === 'bmjdf');
console.log(changer('sponge1') === 'tqpOhf1');
console.log(changer('Hello World') === 'Ifmmp xpsmE');
console.log(changer('dogs') === 'Epht');
console.log(changer('z') === 'A');