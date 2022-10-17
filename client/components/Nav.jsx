import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-main">
          <Link to="/">Home</Link>
          <Link to="/allcards">All Cards</Link>
          <Link to="/search">Search</Link>
        </div>
      </div>
    </>
  )
}

export default Nav
