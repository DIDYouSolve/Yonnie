function solution(brown, yellow) {
    var answer = [];
    for (let i = 3; i <= brown; i++) {
        if ((brown + yellow) % i === 0) {
            let width = (brown + yellow) / i;
            if ((i - 2) * (width - 2) === yellow) {
                return [width, i];
            }
        }
    }
    return answer;
}

console.log(solution(10, 2))