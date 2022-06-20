import React from 'react'
import './cartMenu.css'
import { calcTotalPrice } from '../utils'
import Button from '../button'
import CartItem from '../cartItem'

function cartMenu (props) {
  return (
    <div className="cart-menu">
      <div className="cart-menu__game-list">
        {props.items.length > 0 ? props.items.map((game) => (
          <CartItem
            key={game.title}
            price={game.price}
            title={game.title}
            id={game.id}
          />
          )) :
          "Корзина пуста"}
      </div>
      {props.items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>
              {calcTotalPrice(props.items)} руб.
            </span>
            <Button type="primary" size="m" onClick={onclick}>
              Оформить заказ
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default cartMenu;