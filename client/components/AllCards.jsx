import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getCardsByPage, savedCard } from '../apis/mtgApi'

function Mtg() {
  let { id } = useParams()
  const [cardsPage, setCardsPage] = useState(null)
  const [pageCounter, setPageCounter] = useState(1)

  useEffect(() => {
    getCardsByPage(pageCounter)
      .then((res) => {
        setCardsPage(res.cards)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [pageCounter])

  async function nextPage() {
    const page = (await pageCounter) + 1
    setPageCounter(page)
  }

  async function previousPage() {
    const page = (await pageCounter) - 1
    if (pageCounter === 0) {
      setPageCounter(1)
    } else {
      setPageCounter(page)
    }
  }

  const onClickSave = (id, cardData) => {
    const data = {
      user_id: id,
      card_id: cardData.id,
      name: cardData.name,
      imageUrl: cardData.imageUrl,
    }
    return savedCard(id, data)
  }

  return (
    <div className="flex-child">
      <div className="page-buttons">
        <button onClick={previousPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
      <div className="card">
        {cardsPage?.map((cards, idx) => {
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
              <div className="add-button">
                <button onClick={() => onClickSave(id, cards)}>Add</button>
              </div>
            </div>
          )
        })}
      </div>
      <div className="page-buttons">
        <button onClick={previousPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  )
}

export default Mtg
