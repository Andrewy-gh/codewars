// 6 kyu
// Make the Deadfish Swim

// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

//     i increments the value (initially 0)
//     d decrements the value
//     s squares the value
//     o outputs the value into the return array

// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

function parse(data) {
  const res = [];
  let v = 0;
  for (const command of [...data]) {
    if (command === "i") v++;
    if (command === "d") v--;
    if (command === "s") v = v ** 2;
    if (command === "o") res.push(v);
    console.log("command: ", command, "v: ", v);
  }
  return res;
}

console.log(parse("iiisdoso"), [8, 64]);
console.log(parse("iiisxxxdoso"), [8, 64]);
