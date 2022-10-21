import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getUserDeck } from '../apis/mtgApi'

function UserDeck() {
  const [userDeck, setUserDeck] = useState(null)

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
  }, [])

  function sortBytype(arr) {
    const results = arr?.sort((a, b) => a?.name.localeCompare(b.name))
    results?.sort((a, b) => b?.cmc - a?.cmc)
    return results
  }

  return (
    <div className="flex-child">
      <div className="card-userdeck">
        {userDeck?.map((cards, idx) => {
          return (
            <div className="card-wapper-userdeck" key={idx}>
              <div>
                <img src={cards?.imageUrl} alt={cards?.name} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UserDeck
