// 6 kyu
// Fold an array

// Description:

// In this kata you have to write a method that folds a given array of integers by the middle x-times.

// An example says more than thousand words:

// Fold 1-times:
// [1,2,3,4,5] -> [6,6,3]

// A little visualization (NOT for the algorithm but for the idea of folding):

//  Step 1         Step 2        Step 3       Step 4       Step5
//                      5/           5|         5\          
//                     4/            4|          4\      
// 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
// ----*----      ----*          ----*        ----*        ----*


// Fold 2-times:
// [1,2,3,4,5] -> [9,6]

// As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

// The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

// If an array with one element is folded, it stays as the same array.

// The input array should not be modified!

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

function foldArray(array, runs) {
  let res = array;
  for (let i = 0; i < runs; i++) {
    const middle = Math.floor(res.length / 2);
    const front = res.slice(0, middle);
    const end = res.slice(middle).reverse();
    res = end.map((e, i) => (front[i] ? e + front[i] : e));
  }
  return res;
}

var input = [1, 2, 3, 4, 5];
var expected = [6, 6, 3];
console.log(
  foldArray(input, 1),
  foldArray(input, 1).every((e, i) => e === expected[i])
);

expected = [9, 6];
console.log(
  foldArray(input, 2),
  foldArray(input, 2).every((e, i) => e === expected[i])
);

expected = [15];
console.log(
  foldArray(input, 3),
  foldArray(input, 3).every((e, i) => e === expected[i])
);

input = [-9, 9, -8, 8, 66, 23];
expected = [14, 75, 0];
console.log(
  foldArray(input, 1),
  foldArray(input, 1).every((e, i) => e === expected[i])
);
