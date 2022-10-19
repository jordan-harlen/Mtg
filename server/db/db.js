const conn = require('./connection')



async function insertUsersDeck(userId, cardId, db = conn) {
  const data = { user_id: userId, card_id: cardId }
  return await db('myDeck').select().insert(data)
}

module.exports = {
  insertUsersDeck
}