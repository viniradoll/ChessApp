function handleMove(piece: number, square: number, board: number[]) {
    let directions: Array<Array<number>> = []
    let output: number[] = []
    let col = square % 8
    let row = (square - col) / 8
    switch (piece) {
        case -1:
        case 1:
            output = pawn(square, board, piece)
            return output
        case -2:
        case 2:
            output = knightAndKing(square, board, 2)
            return output
        case -3:
        case 3:
            directions = bishop()
            break
        case -4:
        case 4:
            directions = rook()
            break
        case -5:
        case 5:
            directions = queen()
            break
        case -6:
        case 6:
            output = knightAndKing(square, board, 6)
            return output
    }
    output = getMoveList(square, directions, board)
    return output
}

function getMoveList(square: number, directions: Array<Array<number>>, board: number[]) {
    let output: number[] = []
    let col = square % 8
    let row = (square - col) / 8
    let newSquare: number
    for (let i of directions) {
        let newRow = row
        let newCol = col
        while (newRow <= 7 && newRow >= 0 && newCol <= 7 && newCol >= 0) {
            newSquare = (newRow * 8) + newCol
            if (newSquare !== square) {
                if (board[newSquare] !== 0 && newSquare !== square) {
                    if (board[newSquare] * board[square] < 0) {
                        output.push(newSquare)
                    }
                    break
                }
                output.push(newSquare)
            }
            newRow += i[0]
            newCol += i[1]
        }
    }
    console.log(output)
    return output
}

function pawn(square: number, board: number[], color: number) {
    let output: number[] = []
    let col = square % 8
    let row = (square - col) / 8
    let startingRow = color > 0 ? 6 : 1
    let newSquare = ((row - color) * 8) + col
    if (board[newSquare] === 0) {
        output.push(newSquare)
        if (row === startingRow) {
            if (board[newSquare - (8 * color)] === 0) {
                output.push(newSquare - (8 * color))
            }
        }
    }
    if (col !== 7){
        if (board[square - (9 * color)] * color < 0){
            output.push(square - (9 * color))
        }
    }
    if (col !== 0){
        if (board[square - (7 * color)] * color < 0){
            output.push(square - (7 * color))
        }
    }
    return output
}

function knightAndKing(square: number, board: number[], piece: 2 | 6) {
    let output = []
    let col = square % 8
    let row = (square - col) / 8
    let moveSteps = [
        [-2, 1],
        [-1, 2],
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1]
    ]
    if (piece === 6){
        moveSteps = [
            [0, 1],
            [1, 1],
            [1, 0],
            [1, -1],
            [0, -1],
            [-1, -1],
            [-1, 0],
            [-1, 1]
        ]
    }
    for (let i of moveSteps) {
        let newRow = row + i[0]
        let newCol = col + i[1]
        let newSquare: number
        if (newRow >= 0 && newRow <= 7 && newCol >= 0 && newCol <= 7) {
            newSquare = (newRow * 8) + newCol
            if (board[newSquare] * board[square] <= 0) {
                output.push(newSquare)
            }
        }
    }
    return output
}
function bishop() {
    const directions = [
        [1, 1],
        [-1, 1],
        [-1, -1],
        [1, -1],
    ]
    return directions
}
function rook() {
    const directions = [
        [1, 0],
        [-1, 0],
        [0, -1],
        [0, 1],
    ]
    return directions
}
function queen() {
    const directions = [
        [1, 1],
        [-1, 1],
        [-1, -1],
        [1, -1],
        [1, 0],
        [-1, 0],
        [0, -1],
        [0, 1],
    ]
    return directions
}
export default handleMove;