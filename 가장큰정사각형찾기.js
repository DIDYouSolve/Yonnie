function solution(board) {
    let ans = 0
    let row = board.length
    let col = board[0].length

    if (row == 1 || col == 1) return 1

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (board[i][j] > 0) {
                let up = board[i][j - 1]
                let left = board[i - 1][j]
                let hyp = board[i - 1][j - 1]
                const min = Math.min(up, left, hyp);
                board[i][j] = min + 1;
                ans = Math.max(ans, board[i][j]);
            }
        }
    }
    return ans * ans
}

var board = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0]
]
console.log(solution(board))