import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getCardsByPage, savedCard } from '../apis/mtgApi'

function AllCards() {
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
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  async function previousPage() {
    const page = (await pageCounter) - 1
    if (pageCounter === 0) {
      setPageCounter(1)
    } else {
      setPageCounter(page)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }
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
    <div className="flex-child">
      <div className="page-buttons">
        <button onClick={previousPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
      <div className="card">
        {cardsPage?.map((cards, idx) => {
          return cards.imageUrl ? (
            <>
              <div className="card-wapper" key={idx}>
                <p>{cards.name}</p>
                <Link to={`/cardinfo/${cards.id}`}>
                  <img src={cards.imageUrl} alt={cards.name} />
                </Link>
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
      <div className="page-buttons">
        <button onClick={previousPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  )
}

export default AllCards
