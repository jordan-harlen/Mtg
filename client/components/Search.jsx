import React, { useState } from 'react'

import { getCardByName } from '../apis/mtgApi'

function Search() {
  const [searchedCards, setSearchedCards] = useState(null)
  const [cardName, setCardName] = useState('')

  const handleChange = (evt) => {
    setCardName(evt.target.value)
    console.log(evt.target.value)
  }

  const handelSubmit = (evt) => {
    evt.preventDefault()
    return getCardByName(cardName)
      .then((obj) => setSearchedCards(obj.cards))
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <div className="search">
      <div className="search-form">
        {!searchedCards ? (
          <h2>Please search for a card.</h2>
        ) : (
          <h2>Search for another card.</h2>
        )}
        <form onSubmit={handelSubmit}>
          <label htmlFor="name" className="name-label">
            Name:{' '}
          </label>
          <input type="text" id="name" name="name" onChange={handleChange} />
          <button onClick={handelSubmit}>Search</button>
        </form>
      </div>
      <div className="card">
        {searchedCards?.map((cards, idx) => {
          return (
            <div className="card-wapper" key={idx}>
              <p>{cards.name}</p>
              {cards.imageUrl ? (
                <img src={cards.imageUrl} alt={cards.name} />
              ) : (
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Magic_the_gathering-card_back.jpg/200px-Magic_the_gathering-card_back.jpg"
                  alt="back of the card"
                />
              )}
              <div>
                <button>ADD</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Search
