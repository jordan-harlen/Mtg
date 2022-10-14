import React, { useState } from 'react'

import { getMtgApi } from '../apis/mtgGetApi'

function Mtg() {
  const [mtgArr, setMtgObj] = useState(null)

  const clickHander = () => {
    return getMtgApi()
      .then((obj) => setMtgObj(obj.cards))
      .catch((err) => {
        console.error(err.message)
      })
  }

  // const handleChange = (evt) => {
  //   setMtgObj({
  //     [evt.target.name]: evt.target.value,
  //   })
  //   console.log(evt.target.value)
  // }

  // const handelSubmit = (name) => {
  //   return getFindApi(name)
  //     .then((obj) => setMtgObj(obj.cards))
  //     .catch((err) => {
  //       console.error(err.message)
  //     })
  // }

  return (
    <div className="flex-child">
      <h1>MTG</h1>
      <button onClick={clickHander}>Get cards</button>
      {/* <form onSubmit={handelSubmit}>
        <div>
          <label htmlFor="name" className="name-label">
            Name:{' '}
          </label>
          <input type="text" id="name" name="name" onChange={handleChange} />
        </div>
      </form> */}
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
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Mtg
