import { useEffect, useMemo, useState } from 'react'
import {
  INIT_HISTORY,
  PLAYER_ONE_ICON,
  PLAYER_TWO_ICON,
} from '../../constants/game'

import { calculateWinner } from '../../helpers'

const useLocalData = () => {
  const [localData] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('HISTORY')) || INIT_HISTORY
    } catch {
      return INIT_HISTORY
    }
  })

  return localData
}

const useGame = () => {
  const [history, setHistory] = useState(useLocalData())
  const [stepNumber, setStepNumber] = useState(history.length - 1)

  // next player icon
  const next = useMemo(
    () => (stepNumber % 2 === 0 ? PLAYER_ONE_ICON : PLAYER_TWO_ICON),
    [stepNumber]
  )
  // player win game
  const winner = useMemo(
    () => calculateWinner(history[stepNumber].squares),
    [history, stepNumber]
  )
  // array line winner
  const winnerLine = useMemo(
    () => calculateWinner(history[stepNumber].squares, true),
    [history, stepNumber]
  )

  const handlePlay = (i) => {
    const historyCopy = history.slice(0, stepNumber + 1)
    const current = historyCopy[historyCopy.length - 1]
    const squares = current.squares.slice()
    if (winner || squares[i]) return

    squares[i] = next
    setHistory(historyCopy.concat([{ squares }]))
    setStepNumber(historyCopy.length)
  }

  const jumpTo = (step) => setStepNumber(step)

  useEffect(() => {
    localStorage.setItem('HISTORY', JSON.stringify(history))
  }, [history])

  return {
    history,
    stepNumber,
    jumpTo,
    handlePlay,
    next,
    winner,
    winnerLine,
  }
}

export default useGame
