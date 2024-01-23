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

type Props = {
    squareId: number,
    pieceId: string,
}

const pieceDatabase = {
    "0": empty,
    "1": wpawn,
    "2": wknight,
    "3": wbishop,
    "4": wrook,
    "5": wqueen,
    "6": wking,
    "-1": bpawn,
    "-2": bknight,
    "-3": bbishop,
    "-4": brook,
    "-5": bqueen,
    "-6": bking,
}

export default function Square({ squareId, pieceId }: Props){
    let background = (squareId + Math.floor(squareId / 8)) % 2 === 0 ? 'bg-slate-500' : 'bg-slate-800'
    let piece: StaticImageData = pieceDatabase[pieceId]

    return(
        <div className={`${background} h-[102px] w-[102px] flex items-center justify-center`} >
            <Image 
            src={piece}
            height={"-1".includes(pieceId) ? 60 : 80}
            width={"-1".includes(pieceId) ? 60 : 80}
            alt='Ola'
            />
        </div>
    )
}