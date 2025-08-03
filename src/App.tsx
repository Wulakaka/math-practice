import './App.css'
import Row from './Row.tsx'

function getRow(max: number, operators: ('+' | '-')[]) {
  function get(max: number, operator: '+' | '-'): [number, number] {
    const resultMin = max * 0.5
    const resultMax = max
    const result = Math.round(
      Math.random() * (resultMax - resultMin) + resultMin,
    )

    const firstMin = result * 0.5
    const firstMax = result * 0.8

    const first = Math.round(Math.random() * (firstMax - firstMin) + firstMin)
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
  const rows = Array(40)
    .fill(0)
    .map(() => getRow(99, ['+', '-']))

  return (
    <>
      <div className="grid grid-cols-4 gap-5 grid-rows-10 h-[100vh] px-2">
        {rows.map((row, i) => (
          <Row key={i} row={row} />
        ))}
      </div>
    </>
  )
}

export default App
