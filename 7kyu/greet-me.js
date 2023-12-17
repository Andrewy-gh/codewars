// 7 kyu
// Greet Me

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

// Strings
// Fundamentals

var greet = function (name) {
  return `Hello ${name[0].toUpperCase()}${name.substring(1).toLowerCase()}!`;
};

console.log(greet("riley")); //"Hello Riley!"
console.log(greet("JACK")); //"Hello Jack!"
