function solution(food) {
    let food_count = {}
    for (let i = 0; i < food.length; i++) {
        if (food[i] % 2 == 0) {
            food_count[i] = food[i] / 2
        } else {
            food_count[i] = (food[i] - 1) / 2
        }
    }

    let ans = []
    for (let i = 0; i < food.length; i++) {
        for (let j = 0; j < food_count[i]; j++) {
            ans.push(i)
        }
    }
    let reverse = []
    for (let i = ans.length; i >= 0; i--) {
        reverse.push(ans[i])
    }
    let answer = ans.join("") + 0 + reverse.join("")
    return answer

}

console.log(solution([1, 3, 4, 6]))