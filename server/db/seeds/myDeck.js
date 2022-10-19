

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('myDeck').del()
  await knex('myDeck').insert([
    { id: 1, user_id: 1, card_id: "85e82f91-01a1-5584-b0fd-d8b88f848aa0" },
    { id: 2, user_id: 1, card_id: "85245362-de1a-59fd-9f9a-d6a0c9522592" },
  ])
}