import React from 'react'
import "./gameItem.css"
import GameCover from '../gameCover'
import GameBuy from '../gameBuy'
import GameGenre from '../gameGenre'

function GameItem (props) {
  return (
    <div className="game-item">
      <GameCover image={props.game.image} />
      <div className="game-item__details">
        <span className="game-item__title">
          {props.game.title}
        </span>
        <div className="game-item__genre">
          {
            props.game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)
          }
        </div>
        <div className="game-item__buy">
          <GameBuy game={props.game}/>
        </div>
      </div>
    </div>
  )
}

export default GameItem