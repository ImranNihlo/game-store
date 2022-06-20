import React from 'react'
import "./gemeGenre.css"

function GameGenre (props) {
  return (
    <span className="game-genre">
      {props.genre}
    </span>
  )
}

export default GameGenre