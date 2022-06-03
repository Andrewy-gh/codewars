// 5 kyu Moving Zeros To The End
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  return arr.sort(function(a, b) {
    if (a === 0) return -1
    if (b === 0) return 0
    return 0
  })
}

moveZeros([1,2,0,1,0,1,0,3,0,1])// [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]