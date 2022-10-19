const express = require('express')
const router = express.Router()

const db = require('../db/db')

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