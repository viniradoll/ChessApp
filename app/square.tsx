type Props = {
    squareId: number
}

export default function Square({ squareId }: Props){
    let color = (squareId + Math.floor(squareId / 8)) % 2 === 0 ? 'bg-slate-500' : 'bg-slate-800'
    return(
        <div className={`${color} h-[102px] w-[102px]`} />
    )
}