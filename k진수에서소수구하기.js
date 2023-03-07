function isPrime(num) {
    if (num === 2)
        return true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(n, k) {
    let num = n.toString(k).split(0).filter(e => isPrime(e))
    for (let i = num.length; i > 0; i--) {
        if (num[i] === "" || num[i] === "1" || num[i] === "0") num.splice(i, 1)
    }
    return num.length
}

console.log(solution(437674, 3))