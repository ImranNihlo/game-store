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


  const handleClick = () => {
    setIsCartMenuVisible(false);
  }

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCart size={25}  className="cart-block__icon" onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
      {1 > 0 ? (
          <span className="cart-block__total-price">{totalPrice} руб.</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} handleClick={handleClick}/>}
    </div>
  )
}

export default CartBlock;