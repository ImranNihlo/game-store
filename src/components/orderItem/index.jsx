import React from 'react'
import GameCover from '../gameCover'
import { deleteItemInCart } from '../../redux/cart/reducer'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import "./orderItem.css"

function OrderItem (props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemInCart(props.game.id))
  }

  return (
    <div className="order-item">
      <div className="order-item__cover">
        <GameCover image={props.game.image} />
      </div>
      <div className="order-item__title">
        <span>
          {props.game.title}
        </span>
      </div>
      <div className="order-item__price">
        <span className="delete-icon">
          {props.game.price} руб.
          <AiOutlineCloseCircle
            size={25}
            className="cart-item__delete-icon"
            onClick={handleClick}
          />
        </span>
      </div>
    </div>
  )
}

export default OrderItem