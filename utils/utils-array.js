/**
 * Arrays - basic methods
 */

let testArray = ["cena1", "cena2", "cena3", "cena4", "cena5", "cena6", "cena7"];
let returnVal;

console.log({testArray});

testArray = ["cena-1", "cena0", ...testArray, "cena8"];

console.log("appended with spreed operator", {testArray});

// append to array
testArray.push("cena9");
console.log("push append to array", testArray);

//append on array
testArray.splice(3, 0, "cena2.1", "cena2.2");
console.log("splice append - cena2.1, cena2.2", {testArray});

// append array to array
letArrayToAppend = ["cenas10", "cenas11"];
resultValue = testArray.concat(letArrayToAppend);
console.log("append array to array", resultValue);

// remove the first element
testArray.shift();
console.log("shift - remove the first element", {testArray});

// remove the last element
testArray.pop();
console.log("pop - remove the last element", {testArray});

//remove on array (position, numbOfElements)
testArray.splice(4, 1);
console.log("splice remove  - cena2.2", {testArray});

// delete element - leave a empty position
delete testArray[0];

console.log("delete element - leave a empty position", {testArray});

/**
 * Find
 */

const findsArray = [1000, 2000, 3000, 2000, 4000, 1000, 5000, 2000, 1000];

// FIND - receive a callback(element, index, array, thisArgument)
//  return undefined if element doesn't exists

returnVal = findsArray.find((ele, idx, arr, thisArg) => {
  return ele > 3000;
});
console.log(
  "find method element > 3000 - will return the first, to return all use filter",
  returnVal
);

//find IndexOf - (searchElement, [startIndex])
console.log("IndexOf - testArray ('cenas2.1')", testArray.indexOf("cena2.1"));
console.log(
  "IndexOf - findsArray (2000, position => to front)",
  findsArray.indexOf(2000, findsArray.indexOf(2000) + 1)
);

//if element doesn't exists wil return -1
console.log(
  "IndexOf - if element doesn't exists wil return -1",
  findsArray.indexOf(7000)
);

//find lastIndexOf - (searchElement, [startIndex])
console.log("lastIndexOf", findsArray.lastIndexOf(2000));
console.log(
  "lastIndexOf - findsArray (2000, position => to back)",
  findsArray.lastIndexOf(2000, findsArray.lastIndexOf(2000) - 1)
);

//find includes - (searchElement, [startIndex]) - returns boolean values
console.log("includes", findsArray.includes(2000));
console.log(
  "includes - findsArray (2000, position => to front)",
  findsArray.lastIndexOf(2000, findsArray.lastIndexOf(2000) + 1)
);

// filter - receive a callback(element, index, array, thisArgument)

returnVal = findsArray.filter((ele, idx, arr, thisArg) => {
  return ele > 3000;
});
console.log("filter method return an array where element > 3000", returnVal);

/**
 * Sort array
 */

console.log(
  "Sort array crescente",
  findsArray.sort((a, b) => b - a)
);
console.log(
  "Sort array decrescente",
  findsArray.sort((a, b) => a - b)
);

// join Array
console.log("join array (' - ')", testArray.join(" - "));

/**
 * Reduce method (callback)
 */

// reduce ((accumulator, currentValue/element, index, array)=>{}, initialValue)
// initialValue can be an array, obj, numb, etc...

returnVal = findsArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10
);
console.log("reduce sum findsArray plus 10", returnVal);

// return total of [{},{}]

let arrayCompSum = [
  {id: 01, value: 300},
  {id: 02, value: 500},
  {id: 03, value: 700},
  {id: 04, value: 100},
  {id: 05, value: 200},
];
// we have to initialize the accumulator by 0
console.log(
  "total sum of [{},{}]",
  arrayCompSum.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.value;
  }, 0)
);

// calc average

returnVal = findsArray.reduce((accumulator, currentValue, idx, array) => {
  accumulator += currentValue;
  if (idx === array.length - 1) return accumulator / array.length;
  return accumulator;
});
console.log("reduce - calculate average", returnVal);

// reduceRight equal to reduce - moves right to left - ((accumulator, currentValue/element, index, array)=>{}, initialValue)

//flatten 2D Array

let array2D = [
  [2, 4],
  [8, 9],
  [12, 14],
];

console.log(array2D);
console.log(
  "flatten array",
  array2D.reduce(
    (accumulator, currentArray) => accumulator.concat(currentArray),
    []
  )
);
