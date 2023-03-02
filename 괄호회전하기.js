function isValid(arr) {
    const brackets = {
        "}": "{",
        ")": "(",
        "]": "["
    }
    let stack = []
    for (let i = 0; i < arr.length; i++) {
        if (brackets[arr[i]] === undefined) stack.push(arr[i])
        else {
            if (stack[stack.length - 1] != brackets[arr[i]]) return false
            stack.pop()
        }
    }
    if (stack.length) return false
    return true
}

function solution(s) {

    let brackets_arr = s.split("")
    let ans = 0

    for (let i = 0; i < s.length; i++) {
        if (isValid(brackets_arr)) ans++
            brackets_arr.push(brackets_arr.shift())
    }
    return ans
}
console.log(solution("[](){}"))
console.log(solution("}]()[{"))
console.log(solution("[)(]"))
console.log(solution("}}}"))