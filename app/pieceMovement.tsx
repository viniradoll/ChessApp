function handleMove(piece: number, square: number, board:number[]) {
    let directions: Array<Array<number>> = []
    let output:number[] = []
    let col = square % 8
    let row = (square - col) / 8
    switch (piece) {
        case -2:
        case 2:
            output = knight(square, board)
            return output
        case -3:
        case 3:
            directions = bishop(square)
            break
        case -4:
        case 4:
            directions = rook(square)
            break
        case -5:
        case 5:
            directions = queen(square)
            break
        case -6:
        case 6:
            break
    }
    output = getMoveList(square, directions, board)
    return output
}

function getMoveList(square:number, directions:Array<Array<number>>, board:number[]){
    let output:number[] = []
    let col = square % 8
    let row = (square - col) / 8
    let newSquare:number
    for (let i of directions) {
        let newRow = row
        let newCol = col
        while (newRow <= 7 && newRow >= 0 && newCol <= 7 && newCol >= 0) {
            newSquare = (newRow * 8) + newCol
            if (newSquare !== square){ 
                if (board[newSquare] !== 0 && newSquare !== square){
                    if (board[newSquare] * board[square] < 0){
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

function knight(square: number, board:number[]) {
    let output = []
    let col = square % 8
    let row = (square - col) / 8
    const moveSteps = [
        [-2, 1],
        [-1, 2],
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1]
    ]
    for (let i of moveSteps) {
        let newRow = row + i[0]
        let newCol = col + i[1]
        let newSquare:number
        if (newRow >= 0 && newRow <= 7 && newCol >= 0 && newCol <= 7) {
            newSquare = (newRow * 8) + newCol
            if (board[newSquare] * board[square] <= 0){
                output.push(newSquare)
            }
        }
    }
    return output
}
function bishop(square: number) {
    const directions = [
        [1, 1],
        [-1, 1],
        [-1, -1],
        [1, -1],
    ]
    return directions
}
function rook(square: number){
    const directions = [
        [1, 0],
        [-1, 0],
        [0, -1],
        [0, 1],
    ]
    return directions
}
function queen(square: number){
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