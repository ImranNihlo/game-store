import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css";
import CartBlock from '../cartBlock'

function Header (props) {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" classneme="header__store-title">
          Game story
        </Link>
      </div>
      <div className="wrapper header__cart-btn">
        <CartBlock />
      </div>
    </div>
  )
}

export default Header;