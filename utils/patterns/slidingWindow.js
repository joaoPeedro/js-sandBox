/**
 * write a function called maxSubarraySum wich accepsts
 * an array of integers and a number called n. the function
 * should calculate the maximum sum of n consecutive
 * elements in the array.
 */

/**
 **[1,1,1,2]
 * [1,1,1,2,3,4,4,4,5]
 *
 * basta subtrair o primeiro e adicionar o seguinte
 *
 **  [1,1,2,3]
 * [1,1,1,2,3,4,4,4,5]
 */

const maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return console.log(null);

  //build the window
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  //sliding window
  for (let i = num; i < arr.length; i++) {
    // retira a primeira posição da window e adiciona o ultimo
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return console.log(`maxSum of ${arr} is: ${maxSum}`);
};

maxSubarraySum([5, 7, 4, 8, 7, 1, 1, 2, 3, 4], 2);
maxSubarraySum([4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3], 4);
maxSubarraySum([2, 3, 4], 1);
maxSubarraySum([2, 3, 4, 9, 7, 8, 56, 97, 3, 45, 8, 9], 6);
