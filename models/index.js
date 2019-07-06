const { Schema, model } = require('mongoose')

const db = {
  Books: require('./bookModels.js')(Schema, model)
}

module.exports = db