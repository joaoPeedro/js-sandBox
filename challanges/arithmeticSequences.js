/**

Given an array arr[] of size N, the task is to find the count of all arithmetic sequences in the array. 

Examples: 

Input: arr = [1, 2, 3, 4] 
Output: 3 
Explanation: 
The arithmetic sequences in arr are [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.

Input: arr = [1, 3, 5, 6, 7, 8] 
Output: 4 
Explanation: 
The arithmetic sequences in arr are [1, 3, 5], [5, 6, 7], [5, 6, 7, 8] and [6, 7, 8].
**/

function numberOfArithmeticSequences( L, N)
{
 
    // If array size is less than 3
    if (N <= 2)
        return 0;
 
    // Finding arithmetic subarray length
    var count = 0;
 
    // To store all arithmetic subarray
    // of length at least 3
    var res = 0;
 
    for (var i = 2; i < N; ++i) {
 
        // Check if current element makes
        // arithmetic sequence with
        // previous two elements
        if (L[i] - L[i - 1] == L[i - 1] - L[i - 2]) {
            ++count;
        }
 
        // Begin with a new element for
        // new arithmetic sequences
        else {
            count = 0;
        }
 
        // Accumulate result in till i.
        res += count;
    }

    //OR

    /*
        for (var i = 0; i < N; ++i) {
 
        // Check if current element makes
        // arithmetic sequence with
        // next two elements
        if (L[i + 2] - L[i + 1] == L[i + 1] - L[i] && i <= N -2) {
            ++count;
        }
 
        // Begin with a new element for
        // new arithmetic sequences
        else {
            count = 0;
        }
 
        // Accumulate result in till i.
        res += count;
    }

        */
    // Return final count
    return res;
}
 
var L = [ 1, 3, 5, 6, 7, 8 ];
    var N = L.length;
 
// Function to find arithmetic sequences
console.log(numberOfArithmeticSequences(L, N));
console.log(numberOfArithmeticSequences([2, 4, 6, 8, 10], 5));