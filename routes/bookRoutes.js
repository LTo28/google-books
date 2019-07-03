const Books = require('../models/googleBooks.js')
const axios = require("axios")
require("dotenv").config()

module.exports = app => {
  let search
  app.post('/search', (req, res) => {
    search = req.body.search
    res.redirect('http://localhost:3000/books-list')
  })
  app.get('/search-books', (req, res) => {
    let responseData = []
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}:keyes&key=${process.env.KEY}`)
      .then(({data}) => {
        res.json(data.items)
      })
      .catch(e => console.log(e))
  })
  app.get('/books', (req, res) => {
    Books.find({}, (e, books) => {
      if (e) throw e
      res.json(books)
    })
  })
  app.get('/books/:id', (req, res) => {
    Books.findById(req.params.id, (e, books) => {
      if (e) throw e
      res.json(books)
    })
  })
  app.post('/books', (req, res) => {
    Books.create(req.body, e => {
      if (e) throw e
      res.sendStatus(200)
    })
  })
  app.put('/books/:id', (req, res) => {
    Books.findByIdAndUpdate(req.params.id, req.body, e => {
      if (e) throw e
      res.sendStatus(200)
    })
  })
  app.delete('/books/:id', (req, res) => {
    Books.findByIdAndDelete(req.params.id, e => {
      if (e) throw e
      res.sendStatus(200)
    })
  })
}