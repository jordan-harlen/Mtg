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
  const user_id = req.params.userId
  const { card_id, name, img_url } = req.body
  const postData = {
    user_id,
    card_id,
    name,
    img_url
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