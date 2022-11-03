/*

A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

Array A contains only 0s and/or 1s:

0 represents a car traveling east,
1 represents a car traveling west.
The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

For example, consider array A such that:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the number of pairs of passing cars.

The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

For example, given:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
the function should return 5, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer that can have one of the following values: 0, 1.

*/


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/**

// Bad performance O(N ** 2)

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let pairs = 0;
    console.log({A})
    
    for(let i = 0; i < A.length; i++){
        // exceeds the max
        if(pairs > 1000000000) return -1;

        if(A[i] === 0){
            // console.log("first",A, A[i], pairs)

            // let tempArray = A.splice(i +1 , A.length )
            // // console.log(tempArray)
            // let pairToCount = tempArray.filter((ele) => ele > 0)
            // pairs = pairs + pairToCount.length
            // A.splice(i+1, 0, ...tempArray)
            // //console.log(A)

            for(let j = i + 1; j < A.length; j++){
               // console.log(A[j], pairs)
               if(A[j] === 1){ pairs++}
            }
        }
    }

    return pairs
}

**/

// performance O(N)

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let numberOfZeros = 0;
    let pairs = 0;

    // ex [0, 1, 0, 1, 1]
    // [0] _ numberOfZeros = 1 _ pairs = 0 
    // [1] _ numberOfZeros = 1 _ pairs = (0 + 1) = 1
    // [0] _ numberOfZeros = 2 _ pairs = 1 
    // [1] _ numberOfZeros = 2 _ pairs = (1 + 2) = 3
    // [1] _ numberOfZeros = 2 _ pairs = (3 + 2) = 3
    for(let i = 0; i < A.length; i++){
        if(A[i] === 0) numberOfZeros++
        if(A[i] === 1) pairs = pairs + numberOfZeros
        if(pairs > 1000000000) return -1;
    }

    // console.log(pairs)
    return pairs
}