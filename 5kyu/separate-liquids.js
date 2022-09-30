// 5 kyu
// Don't Drink the Water

// Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.

// ======================
// |   Density Chart    |
// ======================
// | Honey   | H | 1.36 |
// | Water   | W | 1.00 |
// | Alcohol | A | 0.87 |
// | Oil     | O | 0.80 |
// ----------------------

// [                            [
//  ['H', 'H', 'W', 'O'],        ['O','O','O','O']
//  ['W', 'W', 'O', 'W'],  =>    ['W','W','W','W']
//  ['H', 'H', 'O', 'O']         ['H','H','H','H']
//  ]                           ]
 

// The glass representation may be larger or smaller. If a liquid doesn't fill a row, it floats to the top and to the left.

function separateLiquids(glass) {
  const liquids = 'OAWH'
  let col = glass.length
  if (col.length === 0) {
    return []
  } 
  let row = 1
  if (Array.isArray(glass[0])) {
    row = glass[0].length
  } 
  const flattenAndSorted = [].concat(...glass).sort((a, b) => liquids.indexOf(a) - liquids.indexOf(b))
  const result = []
  for (let i = 0; i < flattenAndSorted.length; i += row) {
    const sub = flattenAndSorted.slice(i, i + row)
    result.push(sub)
  }
  return result 
}

console.log(separateLiquids([['H', 'H', 'W', 'O'],['W','W','O','W'],['H','H','O','O']]) === [['O', 'O', 'O', 'O'],['W','W','W','W'],['H','H','H','H']]);
console.log(separateLiquids([['A','A','O','H'],['A', 'H', 'W', 'O'],['W','W','A','W'],['H','H','O','O']]) ===
[['O','O','O','O'],['A', 'A', 'A', 'A'],['W','W','W','W'],['H','H','H','H']])
console.log(separateLiquids([['A','H','W','O']]) === [['O','A','W','H']])
console.log(separateLiquids([['A'],['H'],['W'],['O']]) === [['O'],['A'],['W'],['H']])
console.log(separateLiquids([]) === [])