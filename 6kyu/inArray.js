// 6 kyu Which are in?
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
// Example 1:

// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]
// Example 2:

// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []
// Notes:

//     Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
//     In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
//     Beware: r must be without duplicates.

function inArray(a1, a2) {
  return a1.filter((elem) => a2.some((arr) => arr.includes(elem))).sort();
}

console.log(
  inArray(
    ['xyz', 'live', 'strong'],
    ['lively', 'alive', 'harp', 'sharp', 'armstrong']
  )
); //['live', 'strong']

console.log(
  inArray(
    ['live', 'strong', 'arp'],
    ['lively', 'alive', 'harp', 'sharp', 'armstrong']
  )
); //['arp', 'live', 'strong']

console.log(
  inArray(
    ['tarp', 'mice', 'bull'],
    ['lively', 'alive', 'harp', 'sharp', 'armstrong']
  )
); //[]
