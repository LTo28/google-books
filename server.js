const mongoose = require('mongoose');
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

require('./routes')(app)

require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks_db', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
  .then(() => app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) }))
  .catch(e => console.log(e))
