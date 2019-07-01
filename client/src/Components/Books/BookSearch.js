import React, { Component } from 'react';
import Axios from 'axios';

class BookSearch extends Component {
  state = { 
    title: '',
    authors: [],
    description: '',
    image: '',
    favorite: false
   }

   //needs an event listener
   componentDidMount() {
     Axios.get('/search-books1')
     .then(data => console.log(data))
   }
  render() { 
    return (  
      <div>

      </div>
    );
  }
}
 
export default BookSearch;