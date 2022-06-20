import React, { useState } from 'react'
import "./cartBlock.css"
import { BiCart } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { calcTotalPrice } from '../utils'
import CartMenu from '../cartMenu'
import ItemsInCart from '../itemsInCart'

function CartBlock (props) {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector(state => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCart size={25}  className="cart-block__icon" onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
      {totalPrice > 0 ? (
          <span className="cart-block__total-price">{totalPrice} руб.</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null}/>}
    </div>
  )
}

export default CartBlock;