//to run file in console: node sample

/**
 * Write a function wich takes in a string and return conts of each character in the string
 */

const charCount = (str) => {
  // make obj to return at end
  let objToReturn = {};

  // loop over string for each character

  for (let char of str) {
    char = char.toLowerCase();
    // if the char is a number/letter AND is a key in obj, add one to count
    if (/[a-z0-9]/.test(char)) {
      // if the char is a number/letter AND not in obj, add it and set value to 1
      // if a char is something else (space, period, etc) don't do anything.
      objToReturn[char] = ++objToReturn[char] || 1;
      //ou
      // objToReturn[char] ? objToReturn[char] += 1 : objToReturn[char] = 1
    }
  }

  console.log({objToReturn});
  // return obj at end
  return objToReturn;
};

// depending of browser regular Expressions are not very efficient
const charCount2 = (str) => {
  // make obj to return at end
  let objToReturn = {};

  // loop over string for each character

  for (let char of str) {
    // if the char is a number/letter AND is a key in obj, add one to count
    if (isAlphanumeric(char)) {
      char = char.toLowerCase();

      // if the char is a number/letter AND not in obj, add it and set value to 1
      // if a char is something else (space, period, etc) don't do anything.
      objToReturn[char] = ++objToReturn[char] || 1;
      //ou
      // objToReturn[char] ? objToReturn[char] += 1 : objToReturn[char] = 1
    }
  }

  console.log({objToReturn});
  // return obj at end
  return objToReturn;
};

const isAlphanumeric = (char) => {
  code = char.charCodeAt(0);

  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 96 && code < 123) && // upper alpha (A-Z)
    !(code > 64 && code < 91) // lower alpha (a-z)
  )
    return false;

  return true;
};

charCount("aabbcc");
charCount2("aabasfadfsfckm psaokdm bcc");

console.log( isAlphanumeric('#test'))
console.log( isAlphanumeric('2#test'))
