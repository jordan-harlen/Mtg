import request from 'superagent'

export function getMtgApi(num) {
  return request
    .get(`https://api.magicthegathering.io/v1/cards?page=${num}`)
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.log('Err message: ' + err.message)
    })
}

export function getFindApi(name) {
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
      return res.body
    })
    .catch((err) => {
      console.log('Err message: ' + err.message)
    })
}
