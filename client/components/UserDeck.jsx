import React, { useState, useEffect } from 'react'

import { getMtgApi, getUserDeck } from '../apis/mtgGetApi'

function Mtg() {
  const [mtgArr, setMtgArr] = useState(null)

  useEffect(() => {
    getMtgApi()
  }, [])

  return (
    <div className="flex-child">
      <div className="card">
        {mtgArr?.map((cards, idx) => {
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
                <button>Add</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Mtg
