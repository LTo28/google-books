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
    //this.search()
  }


  //needs an event listener

  componentDidMount() {
    let responseData
    Axios.get('/api/booksearch')
      .then(({ data }) => {
        data.forEach(obj => {
          //console.log(obj.volumeInfo)
          const { volumeInfo: { title, authors, description, imageLinks } } = obj
          responseData = { title: title, authors: authors, description: description, image: imageLinks.smallThumbnail }
          this.setState({
            books: [...this.state.books, responseData]
          })
        })
      })

  }



  render() {
    return (
      <div>
        {this.state.books.map((data, id) => (
          <div key={id}> 
            <p>Title: {data.title}</p>
            <p>Authors: {data.authors}</p>
            <p>Description: {data.description}</p>
            <img src={data.image} alt='img'/>
          </div>
        ))}
      </div>
    );
  }
}

export default BookSearch;