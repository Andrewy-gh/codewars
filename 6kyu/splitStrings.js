// 6 kyu Split String 

// Description:

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
  let result = []
  if (str) {
    if (str.length % 2 != 0) {
     str += '_'
    }
    for (let i = 0; i < str.length; i+=2) {
      result.push(str.substring(i, i + 2))
    }
  }
  return result
}


console.log(solution("asdfadsf"))//, ['as', 'df', 'ad', 'sf']),
console.log(solution("asdfads"))//, ['as', 'df', 'ad', 's_']),
console.log(solution(""))//, []),
console.log(solution("x"))//, ["x_"]),
