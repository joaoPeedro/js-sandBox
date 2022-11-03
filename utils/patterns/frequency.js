//to run file in console: node frequency
//frequency counter

/**
 * give two strings, write a function to determine if the seconde string is an anagram of the first.
 * An anagram is a wword, phrase, or name formed by rearranging the letters of another,
 * such as cinema, formed from iceman.
 */

const validAnagram = (firstString, secondString) => {
  // console.log(firstString.length, secondString.length);
  if (firstString.length !== secondString.length) {
    console.log("já foste");
    return false;
  }

  let lookup = {};

  for (const letter of firstString) {
    // if letter exists, increment, otherwise set to 1
    
    // lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    lookup[letter] = ++lookup[letter] || 1;
    // console.log(lookup);
  }

  console.log(lookup);

  for (const letter of secondString) {
    if (!lookup[letter]) {
      console.log("já foste");
      return false;
    }

    // lookup[letter] -= 1;
    --lookup[letter];
  }
  console.log(lookup);
  return true;
};

console.log(validAnagram("TEST", "TSET"));
console.log(validAnagram("BATATA", "BATATI"));


