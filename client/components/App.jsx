import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import AllCards from './AllCards'
import Search from './Search'

function App() {
  return (
    <>
      <header className="header">
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allcards" element={<AllCards />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
