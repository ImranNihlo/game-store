import React from 'react'
import GameCover from '../gameCover'
import GameBuy from '../gameBuy'
import GameGenre from '../gameGenre'
import "./gameItem.css"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentGame } from '../../redux/games/reducer'

function GameItem (props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentGame(props.game));
  }

  return (
    <div className="game-item" onClick={ handleClick }>
      <Link to={`/${props.game.title}`}>
        <GameCover image={props.game.image} />
      </Link>
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