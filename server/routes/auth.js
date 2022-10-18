const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')
const router = express.Router()

const { userExists, getUserByUsersName, createUser } = require('../db/userDb')

applyAuthRoutes(router, {
  userExists,
  getUserByName: getUserByUsersName,
  createUser,
})

module.exports = router