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
     const search = _ => {
     Axios.get('http://localhost:3001/search-books')
      .then(data => {
        return(
          <div>
            <p>{data}</p>
          </div>
        )
      })
}
   }

  render() { 
    return (  
      <div>
        {this.search()}
      </div>
    );
  }
}
 
export default BookSearch;