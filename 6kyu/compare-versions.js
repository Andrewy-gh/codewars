// 6 kyu Compare Versions 
// Karan's company makes software that provides different features based on the version of operating system of the user.

// For finding which version is more recent, Karan uses the following method:

// function compareVersions (version1, version2) {
//   return parseFloat(version1) >= parseFloat(version2);
// }

// While this function worked for OS versions 10.6, 10.7, 10.8 and 10.9, the Operating system company just released OS version 10.10.

// Karan's function fails for the new version:

// compareVersions ("10.9", "10.10");       // returns true, while it should return false

// Karan now wants to spend some time to right a more robust version comparison function that works for any future version/sub-version updates.

// Help Karan write this function. Here are a few sample cases:

// compareVersions("11", "10");                    // returns true
// compareVersions("11", "11");                    // returns true
// compareVersions("10.4.6", "10.4");              // returns true
// compareVersions("10.4", "11");                  // returns false
// compareVersions("10.4", "10.10");               // returns false
// compareVersions("10.4.9", "10.5");              // returns false

// It can be assumed that version strings are non empty and only contain numeric literals and the character '.'.
  
function compareVersions(version1, version2) {
  const arr1 = version1.split('.').map(e => Number(e))
  const arr2 = version2.split('.').map(e => Number(e))
  const max = Math.max(arr1.length, arr2.length)
  const addZeroes = (arr, max) => {
    const zeroesToBeAdded = max - arr.length
    if (zeroesToBeAdded > 0) {
      for (let i = 0; i < zeroesToBeAdded; i++) {
        arr.push(0)
      }
    }
  }
  addZeroes(arr1, max)
  addZeroes(arr2, max)
  for (let i = 0; i < max; i++) {
    if (arr1[i] < arr2[i]) {
      return false
    } else if (arr1[i] > arr2[i]) {
      return true
    }
  }
  return true
}

console.log(compareVersions("11", "10"));                    // returns true
console.log(compareVersions("11", "11"));                    // returns true
console.log(compareVersions("10.4.6", "10.4"));              // returns true
console.log(compareVersions("10.4", "11"));                  // returns false
console.log(compareVersions("10.4", "10.10"));               // returns false
console.log(compareVersions("10.4.9", "10.5"));              // returns false
console.log(compareVersions("37.169.194.192.121.48.180.138", "37.169.194.192.121.4.94.170"));                  // returns true