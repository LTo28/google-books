const mongoose = require('mongoose');
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)

require('mongoose').connect('mongodb://localhost/googlebooks_db', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
  .then(() => app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) }))
  .catch(e => console.log(e))
