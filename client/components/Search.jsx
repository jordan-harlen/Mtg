import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import { getCardByName, savedCard } from '../apis/mtgApi'

function Search() {
  let { id } = useParams()
  const [searchedCards, setSearchedCards] = useState(null)
  const [cardName, setCardName] = useState('')

  const handleChange = (evt) => {
    setCardName(evt.target.value)
  }

  const handelSubmit = (evt) => {
    evt.preventDefault()
    return getCardByName(cardName)
      .then((obj) => setSearchedCards(obj.cards))
      .catch((err) => {
        console.error(err.message)
      })
  }

  const onClickSave = (id, cardData) => {
    const data = {
      user_id: id,
      card_id: cardData.id,
      name: cardData.name,
      cmc: cardData.cmc,
      manaCost: cardData.manaCost,
      colors: cardData.colors,
      type: cardData.type,
      imageUrl: cardData.imageUrl,
    }
    return savedCard(id, data)
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
          return cards.imageUrl ? (
            <>
              <div className="card-wapper" key={idx}>
                <p>{cards.name}</p>
                <img src={cards.imageUrl} alt={cards.name} />
                <div className="add-button">
                  <button onClick={() => onClickSave(id, cards)}>Add</button>
                </div>
              </div>
            </>
          ) : (
            <></>
          )
        })}
      </div>
    </div>
  )
}

export default Search
