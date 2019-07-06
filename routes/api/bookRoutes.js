const Books = require('../../models/googleBooks.js')
const axios = require("axios")
require("dotenv").config()

module.exports = app => {
  let search
  app.post('/api/search', (req, res) => {
    search = req.body.search
    res.redirect('/search')
  })
  app.get('/api/booksearch', (req, res) => {
    let responseData = []
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.KEY}`)
      .then(({data}) => {
        res.json(data.items)
      })
      .catch(e => console.log(e))
  })
  app.get('/api/books', (req, res) => {
    // Books.find({}, (e, books) => {
    //   if (e) throw e
    //   res.json(books)
    // })
    res.json(Books)
  })
  app.get('/api/books/:id', (req, res) => {
    Books.findById(req.params.id, (e, books) => {
      if (e) throw e
      res.json(books)
    })
  })
  app.post('/api/books', (req, res) => {
    
  })
  app.put('/api/books/:id', (req, res) => {
    Books.findByIdAndUpdate(req.params.id, req.body, e => {
      if (e) throw e
      res.sendStatus(200)
    })
  })
  app.delete('/api/books/:id', (req, res) => {
    Books.findByIdAndDelete(req.params.id, e => {
      if (e) throw e
      res.sendStatus(200)
    })
  })
}