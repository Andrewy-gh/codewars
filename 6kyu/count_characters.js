// 6 kyu Count characters in your string
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
  if (!string) return {};
  const arr = string.split('')
  const result = arr.reduce((obj, item) => {
    if(!obj[item]) {
      obj[item] = 0
    }
    obj[item]++
    return obj
  }, {})
  return result
}

console.log(deepEqual(count("aba"), { a: 2, b: 1 }))
console.log(deepEqual(count(""), {}))