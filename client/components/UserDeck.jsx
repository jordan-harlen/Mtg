import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getUserDeck } from '../apis/mtgApi'

function UserDeck() {
  const [userDeck, setUserDeck] = useState(null)

  let { id } = useParams()

  useEffect(() => {
    getUserDeck(id)
      .then((res) => {
        setUserDeck(res)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <div className="flex-child">
      <div className="card">
        {userDeck?.map((cards, idx) => {
          return (
            <div className="card-wapper" key={idx}>
              <p>{cards?.name}</p>
              {cards?.img_url ? (
                <img src={cards?.img_url} alt={cards?.name} />
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
