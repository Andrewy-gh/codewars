// 7 kyu
// Remove consecutive duplicate words

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"


const removeConsecutiveDuplicates = s => {
  s = s.split(' ')
  let i = 0
  let length = s.length
  let current
  while (i < s.length) {
    if (s[i] !== current) {
      current = s[i]
      i++
    } else if (s[i] === current) {
      s.splice(i, 1)
    }
  }
  return s.join(' ')
}

s = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
console.log(removeConsecutiveDuplicates(s)) // "alpha beta gamma delta alpha beta gamma delta"