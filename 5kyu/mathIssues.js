// 5 kyu Math Issues
// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

//     Math.round()
//     Math.ceil()
//     Math.floor()

Math.round = function (number) {
  return number % 1 >= 0.5
    ? Number(number.toString().split('.')[0]) + 1
    : Number(number.toString().split('.')[0]);
};

Math.ceil = function (number) {
  return number > Number(number.toString().split('.')[0])
    ? Number(number.toString().split('.')[0]) + 1
    : number;
};

Math.floor = function (number) {
  return Number(number.toString().split('.')[0]);
};

console.log(Math.round(0.4)); // 0
console.log(Math.round(0.5)); // 1

console.log(Math.ceil(0.4)); // 1
console.log(Math.ceil(0.5)); // 1

console.log(Math.floor(0.4)); // 0
console.log(Math.floor(0.5)); // 0
