import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class BookSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      authors: [],
      description: '',
      image: '',
      books: [],
      favorite: false
    }
    this.search()
  }
  

  //needs an event listener

  search() {
    let responseData
    Axios.get('/search-books')
    .then(({data}) => {
      data.forEach(obj => {
        //console.log(obj.volumeInfo)
        const { volumeInfo: { title, authors, description, imageLinks } } = obj
        responseData = {title: title, authors: authors, description: description, image: imageLinks.smallThumbnail}
        this.setState({
          books: [responseData]
        }, () => this.renderBooks())
      })
    })
    
  }

  renderBooks() {
    this.state.books.map(data => {
      console.log(data.title)
      return(
        <div className='hello'>
          <div>

          <p>Title: {data.title}</p>
          </div>
          <div>

          <p>Authors: {data.authors}</p>
          </div>
          <div>

          <p>Description: {data.description}</p>
          </div>
          <div>

          <img src={data.image} />
          </div>
        </div>
      )
    })
  }




  render() {
    
    return (
      <div>
       
      </div>
    );
  }
}

export default BookSearch;