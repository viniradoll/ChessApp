'use client'
import { useState } from "react"
import Square from "./square"

// let piecesIds = {
//     'none': 0,
//     'pawn': 1,
//     'knight': 2,
//     'bishop': 3,
//     'rook': 4,
//     'queen': 5,
//     'king': 6,
// }

const initialState = {
    board: [-4,-2,-3,-5,-6,-3,-2,-4,
            -1,-1,-1,-1,-1,-1,-1,-1,
             0, 0, 0, 0, 0, 0, 0, 0,
             0, 0, 0, 0, 0, 0, 0, 0,
             0, 0, 0, 0, 0, 0, 0, 0,
             0, 0, 0, 0, 0, 0, 0, 0,
             1, 1, 1, 1, 1, 1, 1, 1,
             4, 2, 3 ,5 ,6 ,3, 2, 4]
}

interface Piece {
    readonly color: -1 | 1
    readonly type: 0 | 1 | 2 | 3 | 4 | 5 | 6 
}

export default function Board() {

    const [board, setBoard] = useState<number[]>(initialState.board)

    function renderSquares(){
        let squares = new Array()
        for (let i = 0; i < 64; i++){
            squares.push(<Square pieceId={board[i].toString()} squareId={i} key={i} />)
        }
        return(squares)
    }

    return (
        <div className="grid grid-cols-8 grid-rows-8 gap-0 h-[816px] w-[816px] bg-white">
            {renderSquares()}
        </div>
    )
}