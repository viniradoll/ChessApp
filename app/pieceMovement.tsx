const moves = {
    knight: (square: number) => {
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
        for (let i of moveSteps){
            let newRow = row + i[0]
            let newCol = col + i[1]
            if (newRow >= 0 && newRow <= 7 && newCol >= 0 && newCol <= 7){
                output.push((newRow*8)+newCol)
            }
        }
        return output
    },
    bishop: (square: number) => {
        let output = []
        let col = square % 8
        let row = (square - col) / 8
        const directions = [
            [1, 1],
            [-1, 1],
            [-1, -1],
            [1, -1],
        ]
        for (let i of directions){
            let newRow = row
            let newCol = col
            while (newRow <= 7 && newRow >= 0 && newCol <= 7 && newCol >= 0){
                output.push((newRow*8)+newCol)
                newRow += i[0]
                newCol += i[1]
            }
        }
        return output
    },
    rook: (square: number) => {
        let output = []
        let col = square % 8
        let row = (square - col) / 8
        const directions = [
            [1, 0],
            [-1, 0],
            [0, -1],
            [0, 1],
        ]
        for (let i of directions){
            let newRow = row
            let newCol = col
            while (newRow <= 7 && newRow >= 0 && newCol <= 7 && newCol >= 0){
                output.push((newRow*8)+newCol)
                newRow += i[0]
                newCol += i[1]
            }
        }
        return output
    },
    queen: (square: number) => {
        let output = []
        let col = square % 8
        let row = (square - col) / 8
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
        for (let i of directions){
            let newRow = row
            let newCol = col
            while (newRow <= 7 && newRow >= 0 && newCol <= 7 && newCol >= 0){
                output.push((newRow*8)+newCol)
                newRow += i[0]
                newCol += i[1]
            }
        }
        return output
    }
}


export default moves;