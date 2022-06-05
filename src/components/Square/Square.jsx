import React from 'react'
import { PLAYER_ONE_ICON } from '../../constants/game'

const Square = (props) => {
  const { value, onClick, winnerLine, index } = props

  const classDefault = `square ${
    value !== null
      ? value === PLAYER_ONE_ICON
        ? 'square-player-one'
        : 'square-player-two'
      : ''
  }`

  const squareClassName =
    winnerLine && winnerLine.includes(index)
      ? `${classDefault} winner`
      : classDefault

  return (
    <button className={squareClassName} onClick={onClick}>
      {value}
    </button>
  )
}

export default Square
