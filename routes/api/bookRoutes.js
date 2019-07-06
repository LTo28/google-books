const Books = require('../../models/index')
const axios = require("axios")
require("dotenv").config()

const bookController = require('../../controller/bookController');

module.exports = app => {
  let search
  app.post('/api/search', (req, res) => {
    search = req.body.search
    res.redirect('/search')
  })
  app.get('/api/booksearch', (req, res) => {
    let responseData = []
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.KEY}`)
      .then(({ data }) => {
        res.json(data.items)
      })
      .catch(e => console.log(e))
  })
  app.get('/api/books', bookController.findAll)
  app.get('/api/books/:id', bookController.findById)
  app.post('/api/books', bookController.create)
  app.put('/api/books/:id', bookController.findByIdAndUpdate)
  app.delete('/api/books/:id', bookController.findByIdAndDelete)
}