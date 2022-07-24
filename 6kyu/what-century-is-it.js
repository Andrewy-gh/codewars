// 6 kyu What century is it?
// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
// Examples

// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function whatCentury(year) {
  const ordinal_suffix_of = (i) => {
    const j = i % 10;
    const k = i % 100;
    if (j == 1 && k != 11) return i + 'st';
    if (j == 2 && k != 12) return i + 'nd';
    if (j == 3 && k != 13) return i + 'rd';
    return i + 'th';
  };
  const centuryFromYear = (year) => {
    return Math.floor((year - 1) / 100) + 1;
  };
  const century = centuryFromYear(year);
  return ordinal_suffix_of(century);
}

console.log(whatCentury('1999')); // "20th"
console.log(whatCentury('2011')); // "21st"
console.log(whatCentury('2154')); // "22nd"
console.log(whatCentury('2259')); // "23rd"
console.log(whatCentury('1234')); // "13th"
console.log(whatCentury('1023')); // "11th"
console.log(whatCentury('2000')); // "20th"
