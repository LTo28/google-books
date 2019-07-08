const mongoose = require('mongoose');
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require('./routes')(app)

require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks_db')
  .then(() => app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) }))
  .catch(e => console.log(e))
