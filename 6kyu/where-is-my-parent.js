// 6 kyu
// Where is my parent!?(cry)

// Description:

// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.
// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".
// Fundamentals

const alphabet = {
  A: 0,
  B: 2,
  C: 4,
  D: 6,
  E: 8,
  F: 10,
  G: 12,
  H: 14,
  I: 16,
  J: 18,
  K: 20,
  L: 22,
  M: 24,
  N: 26,
  O: 28,
  P: 30,
  Q: 32,
  R: 34,
  S: 36,
  T: 38,
  U: 40,
  V: 42,
  W: 44,
  X: 46,
  Y: 48,
  Z: 50,
  a: 1,
  b: 3,
  c: 5,
  d: 7,
  e: 9,
  f: 11,
  g: 13,
  h: 15,
  i: 17,
  j: 19,
  k: 21,
  l: 23,
  m: 25,
  n: 27,
  o: 29,
  p: 31,
  q: 33,
  r: 35,
  s: 37,
  t: 39,
  u: 41,
  v: 43,
  w: 45,
  x: 47,
  y: 49,
  z: 51,
};

function findChildren(dancingBrigade) {
  return dancingBrigade
    .split("")
    .sort((a, b) => alphabet[a] - alphabet[b])
    .join("");
}
