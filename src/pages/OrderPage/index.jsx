import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from '../../components/orderItem'
import { calcTotalPrice } from '../../components/utils'

function OrderPage (props) {
  const items = useSelector(state => state.cart.itemsInCart);

  if (!items.length) {
    return <h1>Ваша корзина пуста</h1>
  }

  return (
    <div className="order-page">
      <div className="order-page__left">
        {items.map(game => <OrderItem game={game} key={game.id} />)}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>
            {items.length} товаров на сумму {calcTotalPrice(items)} руб.
          </span>
        </div>
      </div>
    </div>
  )
}

export default OrderPage;