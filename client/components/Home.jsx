import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Home() {
  const auth = useSelector((state) => state.auth)
  return (
    <>
      <h1>MTG Deckbuilder</h1>
      <p>Welcome to the MTG Deckbuilder! Come make a deck!</p>
      <div className="home-login">
        <div className="nav-log">
          {auth.isAuthenticated ? (
            <></>
          ) : (
            <>
              <div>
                <Link to="/login" className="login-a">
                  <button>Login</button>
                </Link>
              </div>
              <div>
                <Link to="/register" className="register-a">
                  <button>Register</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Home
