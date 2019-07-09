const mongoose = require('mongoose')
const express = require('express')
const app = express()
const { join } = require('path')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'client', 'build', 'index.html'));
  });
}

require('./routes')(app)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks_db', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
  .then(() => app.listen(process.env.PORT || 3001))
  .catch(e => console.log(e))
