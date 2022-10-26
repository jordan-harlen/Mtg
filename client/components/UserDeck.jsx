import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

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
      <section>
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
                  <Link to={`/cardinfo/${cards.card_id}`}>
                    <img src={cards?.imageUrl} alt={cards?.name} />
                  </Link>
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
      </section>
      <section></section>
    </div>
  )
}

export default UserDeck
