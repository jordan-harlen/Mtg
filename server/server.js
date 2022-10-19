const express = require('express')
const path = require('path')

const authRoutes = require('./routes/auth')
const myDeckRoutes = require('./routes/myDeck')

const server = express()

server.use('/api/v1', authRoutes)
server.use('/api/v1/myDeck', myDeckRoutes)
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))


module.exports = server
