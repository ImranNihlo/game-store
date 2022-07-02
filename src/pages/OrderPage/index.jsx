import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from '../../components/orderItem'
import { calcTotalPrice } from '../../components/utils'
import "./orderPage.css"

function OrderPage (props) {
  const items = useSelector(state => state.cart.itemsInCart);

  if (!items.length) {
    return (
      <div className="order-empty">
        <h1>
          Ваша корзина пуста
        </h1>
      </div>
    )
  }

  return (
    <div className="order-page">
      <div className="order-page__top">
        {items.map(game => <OrderItem game={game} key={game.id} />)}
      </div>
      <div className="order-page__bottom">
        <div className="order-page__total-price">
          <span className="order-number">{items.length}</span> товаров на сумму <span className="order-number">
          {calcTotalPrice(items)}</span> руб.
        </div>
      </div>
    </div>
  )
}

export default OrderPage;