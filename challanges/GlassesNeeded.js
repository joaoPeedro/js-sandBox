
/*

Dado um total de litros necessários meter em copos 
E copos que tem a capacidade em litros, sendo que a mesma é crescente de copo para copo.
ex [1,2,3,4,5]

Dado o numero de copos, quantos são necessários para conter todos os litros 
*/

function solution(N, K){

    let litersLeft = K
    let glassesNeeded = 0;

    for(let i = N; i > 0; i--){
        litersLeft = litersLeft - i;
        glassesNeeded++;
        if(litersLeft <= 0) break
    }

    // if(litersLeft > 0){
    //     return -1
    // }else{
    //     return glassesNedded    
    // }

    return litersLeft > 0 ? -1 : glassesNeeded;
    
}


console.log(solution(5, 8)) // 2
console.log(solution(4, 10)) //4
console.log(solution(1, 2)) //-1
console.log(solution(10, 5)) //1
