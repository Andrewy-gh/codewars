// 6 kyu Multiplication table
// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9

// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

function multiplicationTable(size) {
  const arr = new Array(size).fill();
  return arr.map((_, outer) =>
    new Array(size).fill().map((_, inner) => (outer + 1) * (inner + 1))
  );
}

console.log(multiplicationTable(3)); // [[1,2,3], [2,4,6], [3,6,9]]
