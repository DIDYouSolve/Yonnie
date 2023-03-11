function solution(clothes) {
    var answer = 1;
    let categories = {}
    for (let i = 0; i < clothes.length; i++) {
        categories[clothes[i][1]] = (categories[clothes[i][1]] || 1) + 1
    }
    for (let i in categories) {
        answer *= categories[i]
    }
    return answer - 1;
}