import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class BookSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
          const { volumeInfo: { title, authors, description, imageLinks, infoLink } } = obj
          responseData = { title: title, authors: authors, description: description, image: imageLinks.smallThumbnail, link: infoLink }
          this.setState({
            books: [...this.state.books, responseData]
          })
          console.log(this.state.books)
        })
      })
  }

  handleOnClick(e) {
    e.preventDefault();
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
            <button onClick={() => Axios.post('/api/books', data)}>Add to favorites</button>
          </div>
        ))}
      </div>
    );
  }





  render() {
    //console.log(this.state.books)
    return (
     <div>
       {this.renderBooks()}
     </div>
    );
  }
}

export default BookSearch;