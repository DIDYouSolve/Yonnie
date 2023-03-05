function solution(number, k) {
    let arr = []
    for (let i = 0; i < number.length; i++) {
        while (arr[arr.length - 1] < number[i] && k > 0) {
            k--
            arr.pop()
        }
        arr.push(number[i])
    }
    arr.splice(number.length - k, k)
    return arr.join("")
}
console.log(solution("1231234", 3))

function solution(number, k) {
    let smallest = number.split("").sort((a, b) => a - b).splice(0, k)
    let num = String(number).split("")
    while (smallest.length > 0) {
        for (let i = 0; i < num.length; i++) {
            for (let j = 0; j < smallest.length; j++) {
                if (num[i] == smallest[j]) {
                    num.splice(i, 1)
                    smallest.splice(j, 1)
                }
            }
        }
    }

    return num.join("")
}

console.log(solution("4177252841", 4))