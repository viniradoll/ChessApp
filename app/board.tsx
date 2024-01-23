import Square from "./square"

export default function Board() {

    function renderSquares(){
        let squares = new Array()
        for (let i = 0; i < 64; i++){
            squares.push(<Square squareId={i} key={i} />)
        }
        return(squares)
    }

    return (
        <div className="grid grid-cols-8 grid-rows-8 gap-0 h-[816px] w-[816px] bg-white">
            {renderSquares()}
        </div>
    )
}