// 5 kyu Tic-Tac-Toe Checker
// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]

// We want our function to return:

//     -1 if the board is not yet finished AND no one has won yet (there are empty spots),
//     1 if "X" won,
//     2 if "O" won,
//     0 if it's a cat's game (i.e. a draw).

// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function isSolved(board) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const plays = board
    .reduce((acc, val) => [...acc, ...val], [])
    .reduce((obj, item, index) => {
      if (!obj[item]) obj[item] = [];
      obj[item].push(index);
      return obj;
    }, {});
  const isSubset = (array1, array2) =>
    array2.every((element) => array1.includes(element));
  const xo = Object.assign({}, plays);
  delete xo['0'];
  const result = Object.entries(xo).filter((p, i, a) =>
    winningCombinations.some((w) => isSubset(p[1], w))
  );
  if (result.length) return Number(result[0][0]);
  return Object.keys(plays).includes('0') ? -1 : 0;
}

console.log(
  isSolved([
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0],
  ])
); // -1

console.log(
  isSolved([
    [1, 1, 1],
    [0, 2, 2],
    [0, 0, 0],
  ])
); // 1
console.log(
  isSolved([
    [0, 0, 2],
    [0, 0, 0],
    [1, 0, 1],
  ])
); // -1
console.log(
  isSolved([
    [0, 1, 1],
    [2, 0, 2],
    [2, 1, 0],
  ])
); // -1
