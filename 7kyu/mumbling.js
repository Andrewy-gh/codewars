// 7 kyu Mumbling

// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let arr = s.split("");
  for (const [key, value] of Object.entries(arr)) {
    for (let i = 0; i < key; i++) {
      arr[key] += value.toLowerCase();
    }
  }
  return arr.map((elem) => elem[0].toUpperCase() + elem.substring(1)).join("-");
}
