const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/saved/:userId', (req, res) => {
  const userId = req.params.userId

  db.getUserDeck(userId)
    .then((myDeck) => {
      res.json(myDeck)
    })
    .catch((err) => {
      console.log('Error in Sever ' + err.message)
    })
})

router.post('/saved/:userId', (req, res) => {
  const user_id = req.params.userId
  const { card_id, name, cmc, manaCost, colors, type, imageUrl } = req.body
  const postData = {
    user_id,
    card_id,
    name,
    cmc,
    manaCost,
    colors,
    type,
    imageUrl
  }

  db.insertUsersDeck(user_id, postData)
    .then(() => {

      res.sendStatus(201)
    })
    .catch((err) => {
      console.log('Error in Sever ' + err.message)
    })
})

module.exports = router