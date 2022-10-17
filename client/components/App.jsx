import React from 'react'

import Home from './Home'
import AllCards from './AllCards'
import Search from './Search'

function App() {
  return (
    <>
      <header className="header"></header>
      <div>
        <Home />
        <Search />
        <AllCards />
      </div>
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
