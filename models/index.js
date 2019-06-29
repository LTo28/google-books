const { Schema, Model } = require('mongoose')

const db = {
  Books: require('./googleBooks.js')(Schema, Model)
}

module.exports = db