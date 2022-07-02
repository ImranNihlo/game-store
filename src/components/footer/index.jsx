import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

function Footer (props) {
  return (
    <div className="footer">
      <Link to="/" className="footer__store-title">
        Game story
      </Link>
      <p className="footer-avtor">
        © 2022 GameStory
      </p>
    </div>
  )
}

export default Footer