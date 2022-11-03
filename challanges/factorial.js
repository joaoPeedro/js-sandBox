function getFactorialForLoop(n) {
    if(n === 0) return 1
    let result = 1;
    if (n > 1) {
        for (let i = 1; i <= n; i++) {
            result = result * i;
        }
        return result;
    }
    else {
        return "n has to be positive";
    }
}

console.log(getFactorialForLoop(5)) // 5*4*3*2*1 = 120
console.log(getFactorialForLoop(125))
console.log(getFactorialForLoop(-5))
console.log(getFactorialForLoop(0))
