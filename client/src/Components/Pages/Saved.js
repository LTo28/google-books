import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'

import { Link } from 'react-router-dom'
import Axios from 'axios';


class Saved extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.handleSaved()
  }

  handleSaved() {
    Axios.get('/api/books')
      .then(({ data: books }) => {
        console.log(books)
        this.setState({
          books
        })
        console.log(this.state.books)
      })
      .catch(e => console.log(e))
  }


  handleDeleteSaved(id) {
    Axios.delete(`/api/books/${id}`)
      .then(res => alert('Book Removed!'))
      .then(res => this.handleSaved())
      .catch(e => console.log(e))
  }

  render() {
    return (
      <div>
        <span>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/saved"> Saved </Link>
          </li>
        </span>
        {/* <Navbar /> */}
        <Header />
        <div>
          {this.state.books.map((data, id) => (
            <div key={id}>
              <p>Title: {data.title}</p>
              <p>Authors: {data.authors}</p>
              <p>Description: {data.description}</p>
              <a href={data.link}>Click Here For More Info</a>
              <img src={data.image} alt='img' />
              <button onClick={() => this.handleDeleteSaved(data._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Saved;