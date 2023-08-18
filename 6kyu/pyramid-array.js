// 6kyu Pyramid Array
// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

// Note: the subarrays should be filled with 1s

function pyramid(num) {
  let main = [];
  let sub = [];
  for (let i = 1; num > 0 && i <= num; i++) {
    sub.push(1);
    main.push(sub.slice());
  }
  return main;
}
