import Cell from "./Cell.tsx";

export default function Row({row}: {row: (string | number)[]}) {
    return (
        <div className="flex">
            {
                Array(5).fill(0).map((_, i) => <Cell key={i} >{row[i]}</Cell>)
            }
        </div>
    )
}
