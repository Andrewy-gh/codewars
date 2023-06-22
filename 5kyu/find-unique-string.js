// 5 kyu
// Find the unique string

// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'

// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

// This is the second kata in series:

//     Find the unique number
//     Find the unique string (this kata)
//     Find The Unique

function findUniq(arr) {
  const removedDuplicatesArr = arr.map((a) =>
    [...new Set(a.toLowerCase().split(""))].sort().join("")
  );
  const index = removedDuplicatesArr.findIndex(
    (e, _, a) => a.indexOf(e) === a.lastIndexOf(e)
  );
  return arr[index];
}

console.log(
  findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]),
  "BbBb"
);
console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"]), "foo");
console.log(findUniq(["silvia", "vasili", "victor"]), "victor");
console.log(
  findUniq(["Tom Marvolo Riddle", "I am Lord Voldemort", "Harry Potter"]),
  "Harry Potter"
);
console.log(findUniq(["    ", "a", " "]), "a");
