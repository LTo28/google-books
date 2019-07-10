import React from 'react'
import Axios from 'axios'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './style.css'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

let books

const bookSearch = () => {
  let responseData
    Axios.get('/api/search')
      .then(res => res.data)
      .then(( data ) => {
        //console.log(data)
        data.forEach(obj => {
          const { volumeInfo: { title, authors, description, imageLinks, infoLink } } = obj
          responseData = { title: title, authors: authors, description: description, image: imageLinks.smallThumbnail, link: infoLink }
          books = [...this.state.books, responseData]
          console.log(books)
        })
      })
      .catch(e => console.log(e))
}

const Searchbar = () => {
  const classes = useStyles();
  return (
    <div className='searchbar'>
      <div className='booksearch'>
        <form method='POST' action='/api/search'>
          <Input type='text' placeholder='Search' name='search' />
          <Button className='Button' variant='contained' color='primary' className={classes.button}>ENTER</Button>
        </form>
      </div>
    </div>
  )
}

export default Searchbar