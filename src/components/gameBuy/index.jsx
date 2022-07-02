import React from 'react'
import "./gameBuy.css"
import Button from '../button'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemInCart, setItemInCart } from '../../redux/cart/reducer'

function GameBuy ({ game }) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.itemsInCart)

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemInCart(game.id));
    } else {
      dispatch(setItemInCart(game))
    }
  }

  const isItemInCart = items.some(item => item.id === game.id)

  return (
    <div className="game-buy">
      <span className="game-buy__price">
        {game.price} руб
      </span>
      <Button
        type={isItemInCart  ? "secondary" : "primary"}
        onClick={ handleClick }
      >
        {isItemInCart ? "Убрать из корзины" : "в корзину"}
      </Button>
    </div>
  )
}

export default GameBuy