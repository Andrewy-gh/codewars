// 6 kyu The Deaf Rats of Hamelin
// Story
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

// But some of the rats are deaf and are going the wrong way!
// Kata Task

// How many deaf rats are there?
// Legend

//     P = The Pied Piper
//     O~ = Rat going left
//     ~O = Rat going right

// Example

//     ex1 ~O~O~O~O P has 0 deaf rats

//     ex2 P O~ O~ ~O O~ has 1 deaf rat

//     ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats


function countDeafRats(town) {
  const splitToSubstrings = (str, n) => {
    const arr = [];

    for (let index = 0; index < str.length; index += n) {
      arr.push(str.slice(index, index + n));
    }

    return arr;
  }

  const trimSpaces = (str) => str.split(' ').filter(e => e).join('')

  if (town.indexOf('P') === 0) {
    const str = trimSpaces(town.split('P')[1])
    return splitToSubstrings(str, 2).filter(e => e === '~O').length
  }
  else if (town.indexOf('P') === town.length - 1) {
    const str = trimSpaces(town.split('P')[0])
    return splitToSubstrings(str, 2).filter(e => e === 'O~').length
  }
  else {
    const left = trimSpaces(town.split('P')[0])
    const right = trimSpaces(town.split('P')[1])
    const leftCount = splitToSubstrings(left, 2).filter(e => e === 'O~').length
    const rightCount = splitToSubstrings(right, 2).filter(e => e === '~O').length

    return leftCount + rightCount
  }
} 

console.log(countDeafRats("~O~O~O~O P"))// 0
console.log(countDeafRats("P O~ O~ ~O O~"))// 1
console.log(countDeafRats("~O~O~O~OP~O~OO~"))// 2