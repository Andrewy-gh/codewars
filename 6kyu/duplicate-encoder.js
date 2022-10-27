// 6 kyu Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word) {
  word = word.toLowerCase();
  return word
    .split('')
    .map((element) =>
      word.indexOf(element) === word.lastIndexOf(element) ? '(' : ')'
    )
    .join('');
}

function duplicateEncodeMemo(word) {
  const cache = word
    .toLowerCase()
    .split('')
    .reduce((o, k) => {
      if (!o[k]) o[k] = 0;
      o[k]++;
      return o;
    }, {});
  return word
    .toLowerCase()
    .split('')
    .map((e) => (cache[e] > 1 ? ')' : '('))
    .join('');
}

console.log(duplicateEncode('din'), '(((');
console.log(duplicateEncode('recede'), '()()()');
console.log(duplicateEncode('Success'), ')())())', 'should ignore case');
console.log(duplicateEncode('(( @'), '))((');
