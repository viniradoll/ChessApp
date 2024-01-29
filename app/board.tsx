'use client'
import { useState } from "react"
import Square from "./square"
import pieceMoves from "./pieceMovement"

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
             4, 2, 3 ,5 ,6 ,3, 2, 4],
}

const temp = 
    [0, 0, 0, 0, 0, 0, 0, 0,
     0, 0, 0, 0, 0, 0, 0, 0,
     0, 0, 0, 0, 0, 0, 0, 0,
     0, 0, 0, 2, 2, 2, 0, 0,
     0, 0, 0, 2, 1, 2, 0, 0,
     0, 0, 0, 2, 2, 2, 0, 0,
     0, 0, 0, 0, 0, 0, 0, 0,
     0, 0, 0, 0, 0, 0, 0, 0]

export default function Board() {

    const [board, setBoard] = useState<number[]>(initialState.board)
    const [selected, setSelected] = useState<number>(-1)
    const SelectedIsValid = selected > -1 ? true : false
    const [validMoves, setValidMoves] = useState<number[]>([])
    const [player, setPlayer] = useState<number>(1)

    function calculateValidMoves(squareId:number){
        let pieceId = board[squareId]
        if (squareId === selected){
            return setValidMoves([])
        }
        if (!SelectedIsValid || !validMoves.includes(squareId)){
            return setValidMoves(pieceMoves(pieceId,squareId, board))
        }
        setValidMoves([])
    }

    function squareClick(squareId:number){   
        if (SelectedIsValid && selected !== squareId && validMoves.includes(squareId)){
            let tBoard = board
            tBoard[squareId] = board[selected]
            tBoard[selected] = 0
            setSelected(-1)
            calculateValidMoves(squareId)
            let newPlayer = player * -1
            setPlayer(newPlayer)
            return setBoard(board)
        }
        if (board[squareId] === 0 || squareId === selected){ 
            setSelected(-1)
            calculateValidMoves(squareId)
            return  
        }
        if (board[squareId] * player < 0){
            return
        }
        setSelected(squareId)
        calculateValidMoves(squareId)
    }

    function renderSquares(){
        let squares = new Array()
        for (let i = 0; i < 64; i++){
            squares.push(<Square validMoves={validMoves} click={squareClick} selected={selected} pieceId={board[i]} squareId={i} key={i} />)
        }
        return(squares)
    }

    return (
        <div className="grid grid-cols-8 grid-rows-8 gap-0 h-[816px] w-[816px] bg-white">
            {renderSquares()}
        </div>
    )
}