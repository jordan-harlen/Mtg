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
      <div className="nav-container">
        <div className="nav-main">
          <Link to="/">Home</Link>
          <Link to="/allcards">All Cards</Link>
          <Link to="/search">Search</Link>
          <div className="nav-log">
            {auth.isAuthenticated ? (
              <>
                <Link to="/" onClick={logout} className="title-font">
                  Logout
                </Link>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
