// 6 kyu Highest Rank Number in an Array

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.
// Examples

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
  const obj = arr.reduce((o, i) => {
    if (!o[i]) o[i] = 0;
    o[i]++;
    return o;
  }, {});
  const max = Math.max(...Object.values(obj));
  const maxNum = Object.keys(obj).filter((key) => obj[key] === max);
  return Number(Math.max(...maxNum));
}

const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
console.log(highestRank(arr)); // 12
