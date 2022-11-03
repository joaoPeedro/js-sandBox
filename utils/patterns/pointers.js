//to run file in console: node pointers

/**
 * Write a function called sumZero wich accepsts a sorted Array of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined if
 * a pair does not exist
 */

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  console.log("init array", arr);

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return console.log([arr[left], arr[right]]);
    } else if (sum > 0) {
      --right;
    } else {
      ++left;
    }
  }

  return console.log("undefined");
};

console.log("SUMZERO");
sumZero([-3, -2, -1, 0, 1, 2, 3]);
sumZero([-2, 0, 1, 3]);
sumZero([1, 2, 3]);

/**
 * Implement a function called countUniqueValues,
 * which accepts a sorted array, and counts the unique
 * values in the array. There can be negative numbers in
 * the array, but it will always be sorted.
 */

/**
 ** I
 * [1,1,1,2,3,4,4,4,5]
 **     J
 *
 **   I
 * [1,2,1,2,3,4,4,4,5]
 **       J
 */

const countUniqueValues = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  arr.sort();
  let i = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log({i, j});
  }

  console.log("NumberOfuniqueValues", i);
  console.log("uniqueValues", arr.splice(0, i));
};

console.log("COUNT_UNIQUE_VQLUES");
countUniqueValues([1, 2, 1, 3, 4, 2, 3, 4, 5, 4, 3, 6, 5, 6, 3, 5, 4]);
