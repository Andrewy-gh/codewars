// 6 kyu
// Decipher this!

// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

//     the second and the last letter is switched (e.g. Hello becomes Holle)
//     the first letter is replaced by its character code (e.g. H becomes 72)

// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
  const convertNum = (word) => {
    const code = word
      .split('')
      .filter((e) => !isNaN(parseInt(e)))
      .join('');
    return String.fromCharCode(code);
  };
  const switchLetters = (word) => {
    const letters = word
      .split('')
      .filter((e) => isNaN(parseInt(e)))
      .join('');
    const head = letters.slice(0, 1);
    const middle = letters.slice(1, letters.length - 1);
    const tail = letters.slice(letters.length - 1, letters.length);
    if (letters.length === 1) return letters[0];
    else if (letters.length > 2) return `${tail}${middle}${head}`;
    else return `${tail}${head}`;
  };
  return str
    .split(' ')
    .map((e) => `${convertNum(e)}${switchLetters(e)}`)
    .join(' ');
}

console.log(
  decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o') ===
    'Have a go at this and see how you do'
);
