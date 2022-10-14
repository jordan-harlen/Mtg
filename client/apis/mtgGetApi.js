import request from 'superagent'

//const mtg = require('mtgsdk')
//const serverURL = 'http://localhost:3000/api/v1'

export function getMtgApi() {
  return request
    .get('https://api.magicthegathering.io/v1/cards')
    .then((res) => {
      console.log(res.body)
      return res.body
    })
    .catch((err) => {
      console.log('Err message: ' + err.message)
    })

}

// export async function getFindApi(name) {
//   try {
//     const card = await mtg.card.where({ name: name })
//     console.log(card)
//     return card

//   } catch (error) {
//     console.log(error.message)
//   }
// }
