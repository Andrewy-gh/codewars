// 6 kyu Backspaces in string
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.
// Examples

// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
  const arr = []
  for (i of s) {
    if (i === '#') {
      arr.pop()
    } else {
      arr.push(i)
    }
  }
  return arr.join('')
}

console.log(cleanString('abc#d##c'))// 'ac'
console.log(cleanString('abc####d##c#'))// ''
console.log(cleanString('abc####d'))// ''