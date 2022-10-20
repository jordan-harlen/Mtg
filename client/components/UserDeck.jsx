import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getUserDeck, getCardById } from '../apis/mtgGetApi'

function UserDeck() {
  const [cardId, setCardId] = useState([])
  const [userDeck, setUserDeck] = useState([])

  let { id } = useParams()

  useEffect(() => {
    getUserDeck(id)
      .then((res) => {
        const newArr = []
        res.map((cards) => {
          newArr.push(cards.card_id)
        })
        setCardId(newArr)
      })
      .then(() => {
        console.log('logging cardId' + cardId)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  useEffect(() => {
    console.log(cardId)
    const newArr = []
    cardId.map((id) => {
      getCardById(id)
        .then((res) => {
          res.cards.map((res) => {
            newArr.push(res)
          })
          setUserDeck(newArr)
        })
        .catch((err) => {
          console.log(err.message)
        })
    })
  }, [cardId])

  useEffect(() => {
    console.log(userDeck)
  }, [userDeck])

  return (
    <div className="flex-child">
      <div className="card">
        {userDeck?.map((cards, idx) => {
          return (
            <div className="card-wapper" key={idx}>
              <p>{cards?.name}</p>
              {cards?.imageUrl ? (
                <img src={cards?.imageUrl} alt={cards?.name} />
              ) : (
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Magic_the_gathering-card_back.jpg/200px-Magic_the_gathering-card_back.jpg"
                  alt="back of the card"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UserDeck
