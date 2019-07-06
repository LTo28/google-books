const db = require('../models/index.js');

module.exports = {
  findAll: (req, res) => {
    db.Books
      .find(req.query)
      .then(data => res.json(data))
      .catch(e => console.log(e))
  },
  findById: (req, res) => {
    db.Books
      .findById(req.params.id)
      .then(data => res.json(data))
      .catch(e => console.log(e))
  },
  create: (req, res) => {
    db.Books
      .create(req.body, e => {
        if (e) throw e
        res.sendStatus(200)
      })
  },
  findByIdAndUpdate: (req, res) => {
    db.Books
      .findByIdAndUpdate(req.params.id, req.body, e => {
        if (e) throw e
        res.sendStatus(200)
      })
  },
  findByIdAndDelete: (req, res) => {
    db.Books
      .findByIdAndDelete(req.params.id, e => {
        if (e) throw e
        res.sendStatus(200)
      })
  }
}