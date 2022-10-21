import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { logoutUser } from '../actions/auth'

function Nav() {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  const logout = () => {
    const confirmSuccess = () => navigateTo('/')
    dispatch(logoutUser(confirmSuccess))
  }

  return (
    <>
      <div className="nav-title">
        <h1>MTG Deckbuilder</h1>
      </div>
      <div className="nav-container">
        <div className="nav-main">
          <Link to="/">Home</Link>
          <Link to={`/allcards/${auth?.user?.id}`}>All Cards</Link>
          <Link to={`/search/${auth?.user?.id}`}>Search</Link>
          {auth.isAuthenticated ? (
            <>
              <Link to={`/userdeck/${auth?.user?.id}`}>My Deck</Link>
              <Link to="/" onClick={logout} className="title-font">
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Nav
