const { Schema, model } = require('mongoose')

module.exports = {
  Books: require('./bookModels.js')(Schema, model)
}
