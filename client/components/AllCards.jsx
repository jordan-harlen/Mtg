import React, { useState, useEffect } from 'react'

import { getMtgApi } from '../apis/mtgGetApi'

function Mtg() {
  const [mtgArr, setMtgArr] = useState(null)
  const [pageCounter, setPageCounter] = useState(1)

  useEffect(() => {
    getMtgApi(pageCounter)
      .then((res) => {
        setMtgArr(res.cards)
        console.log(mtgArr)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [pageCounter])

  async function nextPage() {
    const page = (await pageCounter) + 1
    setPageCounter(page)
  }

  async function previousPage() {
    const page = (await pageCounter) - 1
    if (pageCounter === 0) {
      setPageCounter(1)
    } else {
      setPageCounter(page)
    }
    console.log(pageCounter)
  }

  return (
    <div className="flex-child">
      <button onClick={previousPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
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

export default Mtg
