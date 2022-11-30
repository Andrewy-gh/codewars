
// 6 kyu
// String array duplicates
// 993694% of 8902,198 of 5,379KenKamau1 Issue Reported

//     JavaScript
//     Node v8.1.3

//         VIM
//         EMACS

// Instructions
// Output

// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

//     dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

//     dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

// If you like this Kata, please try:

// Alternate capitalization

// Vowel consonant lexicon

function dup(s) {
  const removeDuplicate = (s) => {
  s = [...s]
  let insertIndex = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] != s[i]) {
      s[insertIndex] = s[i];
      insertIndex++;
    }
  }
  return s.slice(0,insertIndex).join('')
  }
  return s.map(e => removeDuplicate(e))
};

console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo']);
console.log(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']);
console.log(dup(["kelless","keenness"]), ['keles','kenes']);
console.log(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]), ['Wolomolo','flodoromonlighters','chuchchi']);
console.log(dup(["adanac","soonness","toolless","ppellee"]), ['adanac','sones','toles','pele']);
console.log(dup(["callalloo","feelless","heelless"]), ['calalo','feles','heles']);
console.log(dup(["putteellinen","keenness"]), ['putelinen','kenes']);
console.log(dup(["kelless","voorraaddoosspullen","achcha"]), ['keles','voradospulen','achcha']);