const path = require('path')
const router = require('express').Router()

module.exports = app => {
  require('./api/bookRoutes.js')(app)

  // If no API routes are hit, send the React app
  router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}