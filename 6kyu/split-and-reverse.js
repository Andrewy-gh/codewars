// 6 kyu Inside Out Strings
// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:

// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

function insideOut(x) {
  const reverse = (str) => str.split('').reverse().join('')
  const splitAndReverse = (str) => {
    const half = Math.floor(str.length / 2)
    if (str.length % 2 === 0) {
      const left = str.slice(0, half)
      const right = str.slice(half)
      return reverse(left) + reverse(right)
    } else {
      const left = str.slice(0, half)
      const middle = str[half]
      const right = str.slice(half + 1)
      return reverse(left) + middle + reverse(right)
    }
  }
  return x.split(' ').map(e => e.length > 3 ? splitAndReverse(e) : e).join(' ')
}

console.log(insideOut('man i need a taxi up to ubud'))// 'man i ende a atix up to budu')
console.log(insideOut('what time are we climbing up the volcano'))// 'hwta item are we milcgnib up the lovcona')
console.log(insideOut('take me to semynak'))// 'atek me to mesykan')