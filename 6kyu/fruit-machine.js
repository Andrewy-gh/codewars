// https://www.codewars.com/kata/590adadea658017d90000039
// 6 kyu
// Fruit Machine

// Slot machine (American English), informally fruit machine (British English), puggy (Scottish English slang), the slots (Canadian and American English), poker machine (or pokies in slang) (Australian English and New Zealand English) or simply slot (American English), is a casino gambling machine with three or more reels which spin when a button is pushed. Slot machines are also known as one-armed bandits because they were originally operated by one lever on the side of the machine as distinct from a button on the front panel, and because of their ability to leave the player in debt and impoverished. Many modern machines are still equipped with a legacy lever in addition to the button. (Source Wikipedia)

// Task

// You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.

// Rules

// 1. There are always exactly three reels

// 2. Each reel has 10 different items.

// 3. The three reel inputs may be different.

// 4. The spin array represents the index of where the reels finish.

// 5. The three spin inputs may be different

// 6. Three of the same is worth more than two of the same

// 7. Two of the same plus one "Wild" is double the score.

// 8. No matching items returns 0.

// Returns

// Return an integer of the score.

// Example
// Initialise

// reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
// reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
// reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
// spin = [5,5,5];
// result = fruit([reel1,reel2,reel3],spin);

// Scoring

// reel1[5] == "Cherry"
// reel2[5] == "Cherry"
// reel3[5] == "Cherry"

// Cherry + Cherry + Cherry == 50

// Return

// result == 50

// Good luck and enjoy!
  
function fruit(reels, spins) {
  const fruits = ["Wild", "Star", "Bell", "Shell", "Seven", "Cherry", "Bar", "King", "Queen", "Jack"]
  const threeScore = (fruit) => {
    return ([...fruits].reverse().indexOf(fruit) + 1) * 10
  }
  const twoScore = (fruit) => {
    return [...fruits].reverse().indexOf(fruit) + 1
  }
  const getSpins = reels.map((e,i) => e[spins[i]])
  const count = getSpins.reduce((o, k) => {
    if (!o[k]) o[k] = 0
    o[k]++
    return o
  },{})
  if (Object.values(count).includes(3)) {
     return threeScore(Object.keys(count).find(e => count[e] === 3))
  } else if (Object.values(count).includes(2)) {
    const twoKey = Object.keys(count).find(e => count[e] === 2)
    return Object.keys(count).includes('Wild') && twoKey !== 'Wild' ? twoScore(twoKey) * 2 : twoScore(twoKey)
  } else {
    return 0
  }
}

reel = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
spin = [0,0,0];
console.log(fruit([reel,reel,reel],spin)) // 100,  "Should return: '100'"

reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel2 = ["Bar", "Wild", "Queen", "Bell", "King", "Seven", "Cherry", "Jack", "Star", "Shell"];
reel3 = ["Bell", "King", "Wild", "Bar", "Seven", "Jack", "Shell", "Cherry", "Queen", "Star"];
spin = [5,4,3];
console.log(fruit([reel1,reel2,reel3],spin)) // 0, "Should return: '0'"

reel1 = ["King", "Cherry", "Bar", "Jack", "Seven", "Queen", "Star", "Shell", "Bell", "Wild"];
reel2 = ["Bell", "Seven", "Jack", "Queen", "Bar", "Star", "Shell", "Wild", "Cherry", "King"];
reel3 = ["Wild", "King", "Queen", "Seven", "Star", "Bar", "Shell", "Cherry", "Jack", "Bell"];
spin = [0,0,1];
console.log(fruit([reel1,reel2,reel3],spin)) // 3, "Should return: '3'"

reel1 = ["King", "Jack", "Wild", "Bell", "Star", "Seven", "Queen", "Cherry", "Shell", "Bar"];
reel2 = ["Star", "Bar", "Jack", "Seven", "Queen", "Wild", "King", "Bell", "Cherry", "Shell"];
reel3 = ["King", "Bell", "Jack", "Shell", "Star", "Cherry", "Queen", "Bar", "Wild", "Seven"];
spin = [0,5,0];
console.log(fruit([reel1,reel2,reel3],spin)) // 6, "Should return: '6'"