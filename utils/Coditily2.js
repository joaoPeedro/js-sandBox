/*
Jogo de cartas

A cada rodáda a carta mais alta ganha a rodáda, caso de empate não conta para ninguém.
A função deve returnar o nr de vitórias de A
As cartas são as seguintes e estão ordenadas pelo valor mais alto:
   
    A 
    K
    Q
    J
    T
    9
    8
    7
    6
    5
    4
    3
    2

*/
const getCardValue = (card) => {
    let valueToReturn;
    switch (card) {
        case 'A':
          valueToReturn = 14;
          break;
        case 'K':
          valueToReturn = 13;
          break;
        case 'Q':
          valueToReturn = 12;
          break;
        case 'J':
          valueToReturn = 11;
          break;
        case 'T':
          valueToReturn = 10;
          break;
            
        default:
            valueToReturn = +card;
      }

      return valueToReturn;
}

function solution(A, B) {


    if(A === B) return 0;

    let winsA = 0;


    for(let i = 0; i < A.length; i++){
        const valueA = getCardValue(A[i])
        const valueB = getCardValue(B[i])

        if(valueA > valueB) winsA++
    }

    return winsA
}

console.log(solution(
    'A586QK', 
    'JJ653K')) //4
console.log(solution(
    '23A84Q', 
    'K2Q25J'
    )) //4
console.log(solution(
    'A222QK', 
    'JJ653K'
    )) //2