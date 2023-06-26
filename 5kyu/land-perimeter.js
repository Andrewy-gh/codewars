// 5 kyu
// Land perimeter

// Given an array arr of strings, complete the function by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:

// ['XOOXO',
//  'XOOXO',
//  'OOOXO',
//  'XXOXO',
//  'OXOOO']

// which represents:

// should return: "Total land perimeter: 24".

// Following input:

// ['XOOO',
//  'XOXO',
//  'XOXO',
//  'OOXX',
//  'OOOO']

// which represents:

// should return: "Total land perimeter: 18"

function landPerimeter(arr) {
  let perimeter = 0;
  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[0].length; c++) {
      if (arr[r][c] === "X") {
        if (r === 0 || arr[r - 1][c] === "O") perimeter++;
        if (r === arr.length - 1 || arr[r + 1][c] === "O") perimeter++;
        if (c === 0 || arr[r][c - 1] === "O") perimeter++;
        if (c === arr[0].length - 1 || arr[r][c + 1] === "O") perimeter++;
      }
    }
  }
  return `Total land perimeter: ${perimeter}`;
}

const arr = [
  "OXOOOX",
  "OXOXOO",
  "XXOOOX",
  "OXXXOO",
  "OOXOOX",
  "OXOOOO",
  "OOXOOX",
  "OOXOOO",
  "OXOOOO",
  "OXOOXX",
];

console.log(landPerimeter(arr));
