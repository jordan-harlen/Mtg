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
              <img src={cards?.imageUrl} alt={cards?.name} />
              <div className="remove-button">
                <button>Remove</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UserDeck
