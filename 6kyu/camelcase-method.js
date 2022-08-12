// 6 kyu CamelCase Method
// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

// Don't forget to rate this kata! Thanks :)

String.prototype.camelCase = function() {
  const camelCase = (str) => str[0].toUpperCase() + str.slice(1)
  return this.length ? this.split(' ').filter(e => e).map(e => camelCase(e)).join('') : ''
}

console.log("test case".camelCase()// "TestCase"
console.log("camel case method".camelCase()// "CamelCaseMethod"
console.log("say hello ".camelCase()// "SayHello"
console.log(" camel case word".camelCase()// "CamelCaseWord"
console.log("".camelCase()// ""