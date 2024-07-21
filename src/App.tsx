import './App.css'
import Row from "./Row.tsx";

function getRow(max: number, operators: ('+' | '-')[]) {

    function get(max: number, operator: '+' | '-'): [number, number] {
        const result = Math.round(Math.random() * 10) + max - 10
        const first = Math.round(Math.random() * result)
        const second = result - first
        switch (operator) {
            case '+':
                return [first, second]
            case '-':
                return [result, first]
            // case '*':
            //     result = Math.round(Math.random() * max)
            //     first = Math.round(Math.random() * result)
            //     second = Math.floor(result / first)
            //     return [first, second]
            // case '/':
            //     first = Math.round(Math.random() * max)
            //     second = Math.round(Math.random() * first)
            //     return [first, second]
        }

    }


    const operator = operators[Math.floor(Math.random() * operators.length)]
    const [first, second] = get(max, operator)

    return [first, operator, second, '=']

}


function App() {

    const rows = Array(40).fill(0).map(() => getRow(30, ['+', '-']))

    return (
        <>
            <div className="grid grid-cols-4 gap-5 grid-rows-10 h-[100vh]">

                {rows.map((row, i) => <Row key={i} row={row}/>)}
            </div>

        </>
    )
}

export default App
