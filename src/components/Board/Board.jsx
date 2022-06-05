import React from 'react'
import { Square } from '../'

const Board = ({ squares, onClick, winnerLine }) => {
  // (rows x cols) (3x3)
  const rows = [0, 1, 2]
  const cols = [0, 1, 2]

  return (
    <React.Fragment>
      {rows.map((row) => (
        <div key={row} className="board-row">
          {cols.map((col) => (
            <Square
              key={col}
              value={squares[row * 3 + col]}
              onClick={() => onClick(row * 3 + col)}
              index={row * 3 + col}
              winnerLine={winnerLine}
            />
          ))}
        </div>
      ))}
    </React.Fragment>
  )
}

export default Board
