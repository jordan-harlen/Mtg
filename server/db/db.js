const conn = require('./connection')

async function getUserDeck(userId, db = conn) {
  return await db('myDeck')
    //.join('user', 'teams.user_id', 'user.id')
    .where('user_id', userId)
    .select('*', 'myDeck.id as id')
}

async function insertUsersDeck(userId, cardId, db = conn) {
  const data = { user_id: userId, card_id: cardId }
  return await db('myDeck').select().insert(data)
}

module.exports = {
  insertUsersDeck,
  getUserDeck
}