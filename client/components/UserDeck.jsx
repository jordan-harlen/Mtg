import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getUserDeck, deleteUserCard, deleteUserDeck } from '../apis/mtgApi'

function UserDeck() {
  const [userDeck, setUserDeck] = useState(null)
  const [deleted, setDeleted] = useState(false)

  let { id } = useParams()

  useEffect(() => {
    getUserDeck(id)
      .then((res) => {
        sortBytype(res)
        setUserDeck(res)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [deleted])

  useEffect(() => {
    console.log(userDeck)
  }, [userDeck])

  function handleCardDelete(id, cardId) {
    deleteUserCard(id, cardId)
    setDeleted(!deleted)
  }

  function handleDeckDelete(id) {
    deleteUserDeck(id)
    setDeleted(!deleted)
  }

  function sortBytype(arr) {
    const results = arr?.sort((a, b) => a?.name.localeCompare(b.name))
    results?.sort((a, b) => b?.cmc - a?.cmc)
    return results
  }

  return (
    <div className="flex-child">
      <div className="delete-deck">
        <button
          onClick={() => {
            handleDeckDelete(id)
          }}
        >
          Delete Deck
        </button>
      </div>
      <div className="card-userdeck">
        {userDeck?.map((cards, idx) => {
          return (
            <div className="card-wapper-userdeck" key={idx}>
              <div>
                <img src={cards?.imageUrl} alt={cards?.name} />
              </div>
              <div className="delete-card">
                <button
                  onClick={() => {
                    handleCardDelete(id, cards.id)
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UserDeck
