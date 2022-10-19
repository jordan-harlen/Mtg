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
        <Route path="/allcards" element={<AllCards />} />
        <Route path="/search" element={<Search />} />
        <Route path="/userdeck" element={<UserDeck />} />
      </Routes>
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
