import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getUserDeck, deleteUserCard, deleteUserDeck } from '../apis/mtgApi'

function CardInfo() {

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

export default CardInfo
