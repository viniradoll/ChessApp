
function knight(square: number){
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
}

function bishop(){

}

export default knight; bishop