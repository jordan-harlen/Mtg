

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('myDeck').del()
  await knex('myDeck').insert([
    { id: 1, user_id: 1, card_id: "5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c", name: "Ancestor's Chosen", cmc: 7, manaCost: "{5}{W}{W}", colors: "W", type: "Creature — Human Cleric", imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&type=card" },
  ])
}