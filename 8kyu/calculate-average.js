// 8 kyu Calculate average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
  const sum = array.reduce((a, b) => a + b, 0);
  return array.length ? sum / array.length : 0;
}
