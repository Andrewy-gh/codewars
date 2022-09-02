
// 7 kyu Which color is the brightest

// One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.

// One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:

// V = max(R,G,B)

// You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!

// For example,

// brightest(["#001000", "#000000"]) == "#001000"
// brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"

// If there are multiple brightest colors, return the first one:

// brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"

// Note that both input and output should use upper case for characters A, B, C, D, E, F.

function brightest(colors) {
  const hexVals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  const getSubArrays = (str) => {
    const values = str.split('#')[1].split('')
    const arr = []
    for (let i = 0; i < values.length; i += 2) {
      arr.push(values.slice(i, i + 2))
    }
    return arr
  }
  const sortByHex = (arrOfA) => {
    const sortCopy =  JSON.parse(JSON.stringify(arrOfA))
    const sorted = sortCopy.sort((a, b) => hexVals.indexOf(b[0]) - hexVals.indexOf(a[0]) || hexVals.indexOf(b[1]) - hexVals.indexOf(a[1]))
    return sorted[0]
  }
  const joinArr = (arr) => arr.join('')
  const subArr = colors.map(e => getSubArrays(e))
  const result = subArr.map(s => sortByHex(s))
  const index = sortByHex(result)
  const joinResult = result.map(e => joinArr(e))
  return colors[joinResult.indexOf(joinArr(index))]
}

console.log(brightest(["#001000", "#000000"]) === "#001000");
console.log(brightest(["#ABCDEF", "#123456"]) === "#ABCDEF");
console.log(brightest(["#00FF00", "#FFFF00"]) === "#00FF00");
console.log(brightest(["#FFFFFF", "#1234FF"]) === "#FFFFFF");
console.log(brightest(["#FFFFFF", "#123456", "#000000"]) === "#FFFFFF");