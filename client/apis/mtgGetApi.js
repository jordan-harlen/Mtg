import request from 'superagent'

//const serverURL = 'http://localhost:3000/api/v1'

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
      console.log(res.body)
      return res.body
    })
    .catch((err) => {
      console.log('Err message: ' + err.message)
    })
}
