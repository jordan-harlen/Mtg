import React from 'react'
//import { useSelector } from 'react-redux'
//import { Link } from 'react-router-dom'
function Home() {
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
        <div className="box-one">
          <div className="box-content">
            <h2 className="blocktext">build deck</h2>
          </div>
        </div>
        <div className="box-two">
          <div className="box-content">
            <h2 className="blocktext">view deck</h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
