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
    let num = n.toString(k)
    let prime = String(num).split(0)
    let ans = 0

    for (let i = 0; i < prime.length; i++) {
        if (isPrime(prime[i])) {
            ans++
        }
    }
    return ans
}

console.log(solution(110011, 10))