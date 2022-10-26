import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getCardByName, savedCard, getCardNames } from '../apis/mtgApi'

function Search() {
  let { id } = useParams()
  const [searchedCards, setSearchedCards] = useState(null)
  const [cardName, setCardName] = useState('')
  const [cardNames, setCardNames] = useState(null)

  useEffect(() => {
    getCardNames()
      .then((res) => {
        setCardNames(res.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  useEffect(() => {
    console.log(cardNames)
    autoComplete(document.getElementById('name'), cardNames)
  }, [cardNames])

  function autoComplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener('input', function (e) {
      var a,
        b,
        i,
        val = this.value
      /*close any already open lists of autocompleted values*/
      closeAllLists()
      if (!val) {
        return false
      }
      currentFocus = -1
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement('DIV')
      a.setAttribute('id', this.id + 'autocomplete-list')
      a.setAttribute('class', 'autocomplete-items')
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a)
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement('DIV')
          /*make the matching letters bold:*/
          b.innerHTML = '<strong>' + arr[i].substr(0, val.length) + '</strong>'
          b.innerHTML += arr[i].substr(val.length)
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>"
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener('click', function (e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName('input')[0].value
            /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
            closeAllLists()
          })
          a.appendChild(b)
        }
      }
    })
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener('keydown', function (e) {
      var x = document.getElementById(this.id + 'autocomplete-list')
      if (x) x = x.getElementsByTagName('div')
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
        currentFocus++
        /*and and make the current item more visible:*/
        addActive(x)
      } else if (e.keyCode == 38) {
        //up
        /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
        currentFocus--
        /*and and make the current item more visible:*/
        addActive(x)
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault()
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click()
        }
      }
    })
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false
      /*start by removing the "active" class on all items:*/
      removeActive(x)
      if (currentFocus >= x.length) currentFocus = 0
      if (currentFocus < 0) currentFocus = x.length - 1
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add('autocomplete-active')
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove('autocomplete-active')
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName('autocomplete-items')
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i])
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener('click', function (e) {
      closeAllLists(e.target)
    })
  }

  const handleChange = (evt) => {
    setCardName(evt.target.value)
  }

  const handelSubmit = (evt) => {
    evt.preventDefault()
    return getCardByName(cardName)
      .then((obj) => setSearchedCards(obj.cards))
      .catch((err) => {
        console.error(err.message)
      })
  }

  const onClickSave = (id, cardData) => {
    const data = {
      user_id: id,
      card_id: cardData.id,
      name: cardData.name,
      cmc: cardData.cmc,
      manaCost: cardData.manaCost,
      colors: cardData.colors,
      type: cardData.type,
      imageUrl: cardData.imageUrl,
    }
    return savedCard(id, data)
  }

  return (
    <div className="search">
      <div className="search-form">
        {!searchedCards ? (
          <h2>Please search for a card.</h2>
        ) : (
          <h2>Search for another card.</h2>
        )}
        <form onSubmit={handelSubmit} autoComplete="off" id="hehe">
          <label htmlFor="name" className="name-label">
            Name:{' '}
          </label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Type a name here.."
            id="name"
            name="name"
            onChange={handleChange}
          />
          <button onClick={handelSubmit}>Search</button>
        </form>
      </div>
      <div className="card">
        {searchedCards?.map((cards, idx) => {
          return cards.imageUrl ? (
            <>
              <div className="card-wapper" key={idx}>
                <p>{cards.name}</p>
                <Link to={`/cardinfo/${cards.id}`}>
                  <img src={cards.imageUrl} alt={cards.name} />
                </Link>
                <div className="add-button">
                  <button onClick={() => onClickSave(id, cards)}>Add</button>
                </div>
              </div>
            </>
          ) : (
            <></>
          )
        })}
      </div>
    </div>
  )
}

export default Search
