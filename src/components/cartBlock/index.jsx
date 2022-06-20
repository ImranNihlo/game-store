import React from 'react'
import "./cartBlock.css"
import { BiCart } from 'react-icons/bi'

function CartBlock (props) {
  return (
    <div className="cart-block">
      <BiCart size={25}  className="cart-block__icon"/>
      <span className="cart-block__total-price">
        2600 руб.
      </span>
    </div>
  )
}

export default CartBlock;