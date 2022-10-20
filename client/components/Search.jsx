import React, { useState, useEffect } from 'react'

import { getFindApi, getAllCardNames } from '../apis/mtgGetApi'

function Search() {
  const [mtgArr, setMtgObj] = useState(null)
  const [mtgName, setName] = useState('')
  const [autoFill, setAutoFill] = useState([])

  useEffect(() => {
    getAllCardNames()
      .then((res) => {
        setAutoFill(res.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  useEffect(() => {
    console.log(mtgArr)
  }, [mtgArr])

  const handleChange = (evt) => {
    setName(evt.target.value)
    console.log(evt.target.value)
  }

  const handelSubmit = (evt) => {
    evt.preventDefault()
    return getFindApi(mtgName)
      .then((obj) => setMtgObj(obj.cards))
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <div className="search">
      <div className="search-form">
        {!mtgArr ? (
          <h2>Please search for a card.</h2>
        ) : (
          <h2>Search for another card.</h2>
        )}
        <form autoComplete="off" onSubmit={handelSubmit}>
          <label htmlFor="name" className="name-label">
            Name:{' '}
          </label>
          <div>
            <input type="text" id="name" name="name" onChange={handleChange} />
          </div>
          <button onClick={handelSubmit}>Search</button>
        </form>
      </div>
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
              <div>
                <button>ADD</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Search
