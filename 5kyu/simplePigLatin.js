// 5 kyu Simple Pig Latin
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  const pig = (str) => {
    return !/[^a-zA-Z]/.test(str) ? `${str.slice(1)}${str.slice(0, 1)}ay` : str
  }
  return str.split(' ').map(e => pig(e)).join(' ')
}

console.log(pigIt('Pig latin is cool'))//'igPay atinlay siay oolcay'
console.log(pigIt('This is my string'))//'hisTay siay ymay tringsay'