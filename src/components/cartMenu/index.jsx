import React from 'react'
import './cartMenu.css'
import { calcTotalPrice } from '../utils'
import Button from '../button'
import CartItem from '../cartItem'
import { Link } from 'react-router-dom'

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
            handleClick={props.handleClick}
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
          </div>
          <Button type="primary" size="m" onClick={props.handleClick}>
            <Link to="/order">
              Оформить заказ
            </Link>
          </Button>
        </div>
      ) : null}
    </div>
  )
}

export default cartMenu;