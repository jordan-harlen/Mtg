const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/saved/:userId', (req, res) => {
  const userId = req.params.userId
  //const cardId = req.body.card_id

  db.getUserDeck(userId)
    .then((myDeck) => {
      //console.log(res.json(myDeck))
      res.json(myDeck)
    })
    .catch((err) => {
      console.log('Error in Sever ' + err.message)
    })
})

router.post('/saved/:userId', (req, res) => {
  const userId = req.params.userId
  const postId = req.body.card_id

  db.insertUsersDeck(userId, postId)
    .then(() => {
      console.log(postId)
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log('Error in Sever ' + err.message)
    })
})

module.exports = router