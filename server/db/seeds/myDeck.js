

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('myDeck').del()
  await knex('myDeck').insert([
    { id: 1, user_id: 1, card_id: "5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c", name: "Ancestor's Chosen", img_url: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&type=card" },
    { id: 2, user_id: 1, card_id: "57aaebc1-850c-503d-9f6e-bb8d00d8bf7c", name: "Angel of Mercy", img_url: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129465&type=card" },
  ])
}