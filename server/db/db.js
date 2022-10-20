const conn = require('./connection')

async function getUserDeck(userId, db = conn) {
  return await db('myDeck')
    //.join('user', 'teams.user_id', 'user.id')
    .where('user_id', userId)
    .select()
}

async function insertUsersDeck(cardData, db = conn) {
  // const data = { user_id: userId, card_id: cardId }
  return await db('myDeck').select().insert(cardData)
}

module.exports = {
  insertUsersDeck,
  getUserDeck
}