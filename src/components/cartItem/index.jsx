import React from 'react'
import "./cartItem.css";
import { AiOutlineCloseCircle } from 'react-icons/ai'

function CartItem ({ title, price, id, handleClick }) {

  return (
    <div className="cart-item">
      <AiOutlineCloseCircle
        size={25}
        className="cart-item__close-icon"
        onClick={handleClick}
      />
      <span>{title}</span>
      <div className="cart-item__price">
        <span>{price} руб.</span>
      </div>
    </div>
  )
}

export default CartItem;