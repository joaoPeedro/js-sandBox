
/*
Test Score. 

Para calcular o score do test, temos que considerar:
para contar como correcto, todas as questões do grupo devem estar correctas. 

no final a formula de calculo do score é correctGroups*100/totalGroups

o resultado deve ser arrdondádo à unidade ex: 
66.6 = 66
66.4 = 66

*/
// function solution(T, R) {
    
//     let testGroupRegex = /\d*/g;
//     let testNameRegex = /\D\b/;

//     let testGroups = []
//     let score = 0;

//     for(let i = 0; i < T.length; i++){
//         testGroup = T[i].match(testGroupRegex)?.join('');
//         testNameRegex = T[i].match(testNameRegex)?.join('');

//         testGroups[testGroup - 1] === undefined ?  testGroups[testGroup - 1] = [R[i]] : testGroups[testGroup - 1 ].push(R[i])

//     }
    
//     let totalGroups = testGroups.length;

//     for (let i = 0; i < totalGroups; i++) {
//         let isCorrect = true; 

//         for (let j = 0; j < testGroups[i].length; j++) {
//             if(testGroups[i][j] !== 'OK') isCorrect = false;
//             // console.log(i , testGroups[i][j], isCorrect )
//         }

//         console.log(i, totalGroups, testGroups[i], (i+1)*100/totalGroups)

//         if(isCorrect) score = Math.floor((i+1)*100/totalGroups)
//     }

//     console.log(score)

//     return score;
// }

function solution(T, R) {
    
    let testGroupRegex = /\d*/g;
    let testGroups = []
    let correctGroups = 0;

    for(let i = 0; i < T.length; i++){
        testGroup = T[i].match(testGroupRegex)?.join('');

        
        if(testGroups[testGroup - 1] === undefined){
            testGroups[testGroup - 1] = 1;
            correctGroups++
        }

        if(testGroups[testGroup - 1] === 1 && R[i] !== 'OK'){
            testGroups[testGroup - 1] = 0;
            correctGroups--
        }

    }

    
    let totalGroups = testGroups.length;
    // console.log(correctGroups, totalGroups);

    return Math.floor(correctGroups*100/totalGroups);
}


console.log(solution(
    ['test1a', 'test2', 'test1b', 'test1c', 'test3'], 
    ['Wrong answer', 'OK', 'Runtime error', 'OK', 'Time limit exceeded']
    )) // 33
console.log(solution(
    ['codility1', 'codility3', 'codility2', 'codility4b', 'codility4a'], 
    ['Wrong answer', 'OK', 'OK', 'Time limit exceeded', 'OK']
)) // 50

console.log( solution(
    ['codility1', 'codility3', 'codility2', 'codility4b', 'codility4a'], 
    ['OK', 'OK', 'OK', 'OK', 'OK']
)) // 100

console.log(solution(
    ['test1a', 'test2', 'test1b', 'test4', 'test3'], 
    ['Wrong answer', 'OK', 'Runtime error', 'OK', 'Time limit exceeded']
    )) // 50


    const test = () => {
        // let testNameRegex = /.*/;
        let testNameRegex = /[A-Za-z]\b/g;
        testNameRegex = ('batataS batatae batataF').match(testNameRegex)?.join('');
        console.log(testNameRegex)
    }

    test()