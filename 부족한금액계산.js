function solution(price, money, count) {
    let total = price * count * (count + 1) / 2
    let answer = 0
    if (total - money > 0) answer = total - money
    else answer = 0

    return answer
}