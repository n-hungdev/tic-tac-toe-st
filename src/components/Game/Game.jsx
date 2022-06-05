import React, { useState } from 'react'
import { Board } from '../'
import { useGame } from '../../hooks'

const Game = () => {
  const { history, stepNumber, jumpTo, handlePlay, next, winner, winnerLine } =
    useGame()

  const [ascending, setAscending] = useState(true)

  // status of the game
  const status = winner
    ? `Winner ${winner}`
    : stepNumber === 9
    ? 'Draw'
    : 'Next player: ' + next

  const moves = history
    .map((_, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start'
      const classJump = `btn-jump ${move === stepNumber ? 'selected' : ''}`

      return (
        <li key={move} className="move">
          <button
            type="button"
            className={classJump}
            onClick={() => jumpTo(move)}
          >
            {desc}
          </button>
        </li>
      )
    })
    .sort((a, b) => (ascending ? a.key - b.key : b.key - a.key))

  return (
    <div className="container">
      <div className="status">{status}</div>
      <div className="game">
        <div className="game-board">
          <Board
            squares={history[stepNumber].squares}
            onClick={(i) => handlePlay(i)}
            winnerLine={winnerLine}
          />
        </div>
        <div className="game-info">
          <button
            type="button"
            className={`btn-sort ${ascending ? 'ascending' : 'descending'}`}
            onClick={() => setAscending(!ascending)}
          >
            Sort moves by: {ascending ? 'ascending' : 'descending'}
          </button>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  )
}

export default Game
