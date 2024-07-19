import { useState } from 'react'

import './App.css'
import Cell from "./Cell.tsx";
import Row from "./Row.tsx";

function getRow(max: number, operators: string[]) {
    const first = Math.round(Math.random() * max)
    const second = Math.round(Math.random() * max)
    const operator = operators[Math.floor(Math.random() * operators.length)]

    return [first, operator, second, '=']

}


function App() {

    const rows = Array(5).fill(0).map(() => getRow(10, ['+', '-']))
    console.log(rows)

  return (
      <>
          {rows.map((row, i) => <Row key={i} row={row} />)}

      </>
  )
}

export default App
