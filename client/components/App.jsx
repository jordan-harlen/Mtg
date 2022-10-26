import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Home from './Home'
import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import AllCards from './AllCards'
import Search from './Search'
import UserDeck from './UserDeck'
import CardInfo from './CardInfo'
//import Footer from './Footer'

import { checkAuth } from '../actions/auth'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const confirmSuccess = () => {}
    dispatch(checkAuth(confirmSuccess))
  }, [])

  return (
    <>
      <header className="header">
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allcards/:id" element={<AllCards />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="/userdeck/:id" element={<UserDeck />} />
        <Route path="/cardinfo/:id" element={<CardInfo />} />
      </Routes>
      <footer className="footer">{/* <Footer /> */}</footer>
    </>
  )
}

export default App
