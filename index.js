const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const db = require('./config/db')
const app = express()
const port = 8000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.get('/', (req, res) => res.json({ info: 'Node.js, Express, and Postgres API' }))

app.get('/users', db.getUsers)

app.listen(port, () => console.log(`Listening on port ${port}...`))