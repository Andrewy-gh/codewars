// 5 kyu First non-repeating character
// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
  let result = '';
  const arr = s.toLowerCase().split('');
  const filter = arr.filter((e) => arr.indexOf(e) === arr.lastIndexOf(e));
  console.log(filter);
  if (filter.length) result = s[arr.indexOf(filter[0])];
  return result;
}

console.log(firstNonRepeatingLetter('a')); // 'a'
console.log(firstNonRepeatingLetter('stress')); // 't'
console.log(firstNonRepeatingLetter('moonmen')); // 'e'
console.log(firstNonRepeatingLetter('')); // ''
console.log(firstNonRepeatingLetter('moonmeenn')); // ''
