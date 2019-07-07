import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class BookSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    let responseData
    Axios.get('/api/search')
      .then(({ data }) => {
        data.forEach(obj => {
          //console.log(obj.volumeInfo)
          const { volumeInfo: { title, authors, description, imageLinks, infoLink } } = obj
          responseData = { title: title, authors: authors, description: description, image: imageLinks.smallThumbnail, link: infoLink }
          this.setState({
            books: [...this.state.books, responseData]
          })
          console.log(this.state.books)
        })
      })
      .catch(e => console.log(e))

  }




  saveBooks(data) {
    Axios.post('/api/books', data)
      .then(res => alert('Book Saved'))
      .catch(e => console.log(e))
  }


  renderBooks() {
    return (
      <div>
        {this.state.books.map((data, id) => (
          <div key={id}>
            <p>Title: {data.title}</p>
            <p>Authors: {data.authors}</p>
            <p>Description: {data.description}</p>
            <a href={data.link}>Click Here For More Info</a>
            <img src={data.image} alt='img' />
            <button onClick={() => this.saveBooks(data)}>Add to favorites</button>
          </div>
        ))}
      </div>
    );
  }


  render() {
    return (
      <div>
        {this.renderBooks()}
      </div>
    );
  }
}

export default BookSearch;