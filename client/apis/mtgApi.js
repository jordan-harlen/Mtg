import request from 'superagent'

export function getCardsByPage(num) {
  return request
    .get(`https://api.magicthegathering.io/v1/cards?page=${num}`)
    .then((res) => {
      //console.log(res.body);
      return res.body
    })
    .catch((err) => {
      console.log('Err message: ' + err.message)
    })
}

export function getCardByName(name) {
  return request
    .get(`https://api.magicthegathering.io/v1/cards?name=${name}`)
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.log('Err message: ' + err.message)
    })
}

export function getCardById(id) {
  return request
    .get(`https://api.magicthegathering.io/v1/cards?id=${id}`)
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.log('Err message: ' + err.message)
    })
}

export function getUserDeck(id) {
  return request
    .get(`/api/v1/myDeck/saved/${id}`)
    .then((res) => {
      console.log(res.body)
      return res.body
    })
    .catch((err) => {
      console.log('Err message: ' + err.message)
    })
}

export function savedCard(id, newCard) {
  return request
    .post(`/api/v1/myDeck/saved/${id}`)
    .send(newCard)
    .catch((err) => {
      console.log('err message: ' + err.message);
    })
}
