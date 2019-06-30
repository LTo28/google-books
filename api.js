const axios = require("axios")
require("dotenv").config()

let a = 'harry potter'

axios.get(`https://www.googleapis.com/books/v1/volumes?q=${a}:keyes&key=${process.env.KEY}`)
  .then(({ data }) => {
    data.items.forEach(data => {
      const { volumeInfo: { title, authors, description, imageLinks } } = data
      console.log(`
        Title: ${title}
        Author(s): ${authors}
        Description: ${description}
        Image: ${imageLinks.smallThumbnail}
        `)
    })
  })