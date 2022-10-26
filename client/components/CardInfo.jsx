import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getCardById } from '../apis/mtgApi'

function CardInfo() {
  const [card, setCard] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    console.log(id)
    getCardById(id)
      .then((res) => {
        setCard(res)
      })
      .then(() => {
        console.log(card)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <div className="flex-child">
      <div className="card-info">
        {card?.cards.map((oneCard, idx) => {
          return (
            card && (
              <div className="card-wrapper-info" key={idx}>
                <h2>{oneCard.name}</h2>
                <img src={oneCard?.imageUrl} alt={oneCard?.name} />
                <p>Mana Cost: {oneCard.manaCost}</p>
                <p>CMC: {oneCard.cmc}</p>
                <p>Effect: {oneCard.text}</p>
              </div>
            )
          )
        })}
      </div>
    </div>
  )
}

export default CardInfo
