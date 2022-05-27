// 5 kyu Where my anagrams at?
// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

// Note for Go
// For Go: Empty string slice is expected when there are no anagrams found.

function anagrams(word, words) {
  const shallowEqual = (object1, object2) => {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) return false;
    for (let key of keys1) {
      if (object1[key] !== object2[key]) return false;
    }
    return true;
  };

  const getWordCount = (word) => {
    const obj = word.split('').reduce((obj, count) => {
      if (!obj[count]) obj[count] = 0;
      obj[count]++;
      return obj;
    }, {});
    return obj;
  };

  return words.filter((e) => shallowEqual(getWordCount(word), getWordCount(e)));
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); // ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy', 'lacer'])); // []
