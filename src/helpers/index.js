/**
 *
 * @param {*} squares - array of squares of the board
 * @param {*} winnerLine - boolean to show the winner line
 * @returns winner "PLAYER_ONE_ICON" / "PLAYER_TWO_ICON" / null
 * @returns winnerLine [0, 1, 2] / [3, 4, 5] / [6, 7, 8] / [0, 3, 6] / [1, 4, 7] / [2, 5, 8] / [0, 4, 8] / [2, 4, 6] / null
 *
 */

const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

export function calculateWinner(squares, isWinnerLine = false) {
  for (let i = 0; i < LINES.length; i++) {
    const [a, b, c] = LINES[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      if (isWinnerLine) return LINES[i]
      return squares[a]
    }
  }
  return null
}
