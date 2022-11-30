// 7 kyu
// Absent vowel

// Your job is to figure out the index of which vowel is missing from a given string:

//     A has an index of 0,
//     E has an index of 1,
//     I has an index of 2,
//     O has an index of 3,
//     U has an index of 4.

// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.
// Examples

// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"


function absentVowel(x){
  const vowels = 'aeiou'
  return vowels.indexOf([...vowels].find(v => !x.includes(v)))
}

function absentVowel(x){
  return [...'aeiou'].findIndex(v => !x.includes(v))
}

console.log(absentVowel("John Doe hs seven red pples under his bsket"), 0);
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3);