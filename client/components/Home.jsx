import React from 'react'
import Fade from 'react-reveal/Fade'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { logoutUser } from '../actions/auth'

function Home() {
  const navigateTo = useNavigate()
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const logout = () => {
    const confirmSuccess = () => navigateTo('/')
    dispatch(logoutUser(confirmSuccess))
  }

  return (
    <div className="home">
      <section className="home-one">
        <div>
          <div className="box-content">
            <h1>MTG Deckbuilder</h1>
            <p>Welcome to the MTG Deckbuilder! Come make a deck!</p>
          </div>
        </div>
      </section>
      <section className="home-two">
        <Fade left>
          <div className="box-one">
            <div className="box-content">
              <h2 className="blocktext">build deck</h2>
              <div className="box-nav-container">
                <Link to={`/allcards/${auth?.user?.id}`}>All Cards</Link>
                <Link to={`/search/${auth?.user?.id}`}>Search</Link>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="box-two">
            <div className="box-content">
              <h2 className="blocktext">view deck</h2>
              <div className="box-nav-container">
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
          </div>
        </Fade>
      </section>
    </div>
  )
}

export default Home
