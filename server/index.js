const express = require('express')
const app = express()
const SERVER_PORT = 3001
const mc = require('./controllers/messages_controller')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.get('/api/messages', mc.read)
app.post('/api/messages', mc.create)
app.put('/api/messages/:id', mc.update)
app.delete('/api/messages/:id', mc.delete)

app.listen(SERVER_PORT, () => {console.log(`${SERVER_PORT} asteroids hurtling toward us`)})