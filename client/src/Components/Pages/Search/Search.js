import React from 'react';
import Navbar from '../../Navbar/Navbar'
import Searchbar from '../../Searchbar/Searchbar'
import BookSearch from '../../Books/BookSearch'

const Search = () => {
return(
  <div>
    <Navbar />
    <div>
    <Searchbar />
    </div>
    <div>
    <BookSearch />
    </div>
  </div>
)
}

export default Search