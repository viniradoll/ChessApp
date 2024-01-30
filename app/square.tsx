import Image, { StaticImageData } from 'next/image'
import bbishop from '../public/pieces/b_bishop_png_128px.png'
import bking from '../public/pieces/b_king_png_128px.png'
import bknight from '../public/pieces/b_knight_png_128px.png'
import bpawn from '../public/pieces/b_pawn_png_128px.png'
import bqueen from '../public/pieces/b_queen_png_128px.png'
import brook from '../public/pieces/b_rook_png_128px.png'
import wbishop from '../public/pieces/w_bishop_png_128px.png'
import wking from '../public/pieces/w_king_png_128px.png'
import wknight from '../public/pieces/w_knight_png_128px.png'
import wpawn from '../public/pieces/w_pawn_png_128px.png'
import wqueen from '../public/pieces/w_queen_png_128px.png'
import wrook from '../public/pieces/w_rook_png_128px.png'
import empty from '../public/pieces/empty.png'
import './globals.css'

type Props = {
    squareId: number,
    pieceId: number,
    selected: number,
    click: any,
    validMoves: number[],
}

interface pieceImage{
    id: number,
    image: StaticImageData,
    size: number,
}

function getPiece(id:number):pieceImage{
    switch (id){
        case 0: return { id: id, size: 80, image: empty }
        case 1: return { id: id, size: 55, image: wpawn }
        case 2: return { id: id, size: 70, image: wknight }
        case 3: return { id: id, size: 75, image: wbishop }
        case 4: return { id: id, size: 65, image: wrook }
        case 5: return { id: id, size: 80, image: wqueen }
        case 6: return { id: id, size: 75, image: wking }
        case -1: return { id: id, size: 55, image: bpawn }
        case -2: return { id: id, size: 70, image: bknight }
        case -3: return { id: id, size: 75, image: bbishop }
        case -4: return { id: id, size: 65, image: brook }
        case -5: return { id: id, size: 80, image: bqueen }
        case -6: return { id: id, size: 75, image: bking }
        default: return { id: id, size: 80, image: empty }
    }
}

function getBackgroundColor(squareId:number, selected:number):string{
    if (selected !== squareId){
        return (squareId + Math.floor(squareId / 8)) % 2 === 0 ? 'bg-slate-500' : 'bg-slate-800'
    }
    return 'bg-cyan-800'
}

export default function Square({ squareId, pieceId, selected, click, validMoves }: Props){
    let piece:pieceImage = getPiece(pieceId)
    let selectableCSS = pieceId === 0 ? 'h-8 w-8 rounded-full bg-gray-700 absolute' : 'absolute h-24 w-24 rounded-full border-8 half-transparent'
    let selectable = <div className={selectableCSS}/>
    return(
        <div onClick={() => click(squareId)} onDrop={() => click(squareId)} onDragOver={e => e.preventDefault()}
        className={`${getBackgroundColor(squareId, selected)} h-[102px] w-auto flex items-center justify-center`} >
            { validMoves.includes(squareId) ? selectable : null}
            <Image 
            draggable
            onDragStart={() => click(squareId)}
            src={piece.image}
            height={piece.size}
            width={piece.size}
            alt=''
            />
        </div>
    )
}