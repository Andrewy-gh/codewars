// 7 kyu Moves in squared strings (I)
// This kata is the first of a sequence of four about "Squared Strings".

// You are given a string of n lines, each substring being n characters long: For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study some transformations of this square of strings.

//     Vertical mirror: vert_mirror (or vertMirror or vert-mirror)

//     vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"

//     Horizontal mirror: hor_mirror (or horMirror or hor-mirror)

//      hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"

// or printed:

// vertical mirror   |horizontal mirror   
// abcd --> dcba     |abcd --> mnop 
// efgh     hgfe     |efgh     ijkl 
// ijkl     lkji     |ijkl     efgh 
// mnop     ponm     |mnop     abcd 

// Task:

//     Write these two functions

// and

//     high-order function oper(fct, s) where

//     fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

// Examples:

// s = "abcd\nefgh\nijkl\nmnop"
// oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
// oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"

// Note:

// The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Sample Tests".
// Bash Note:

// The input strings are separated by , instead of \n. The output strings should be separated by \r instead of \n. See "Sample Tests".

function vertMirror(strng) {
    return strng.split('\n').map(e => e.split('').reverse().join('')).join('\n')
}
function horMirror(strng) {
    return strng.split('\n').reverse().join('\n')
}
function oper(fct, s) {
    return fct(s)
}

const test1 = oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu")
const answer1 = "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw"
const test2 = oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx")
const answer2 = "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP"
const test3 = oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt")
const answer3 = "yeCt\nCSbg\nJVhv\nlVHt"
const test4 = oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz")
const answer4 = "cEYz\nLPKo\ndbrZ\nnjMK"

console.log(test1 === answer1)
console.log(test2 === answer2)
console.log(test3 === answer3)
console.log(test4 === answer4)
