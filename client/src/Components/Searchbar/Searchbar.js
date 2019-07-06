import React from 'react'
import BookSearch from '../Books/BookSearch'

const Searchbar = () => {
  return (
    <div>
      <div className="instructions">
        <p>Search for a book</p>
      </div>

      <div className='booksearch'>
        <form method='POST' action='/api/search'>
          <input type='text' placeholder='Harry Potter' name='search' />
          <button>ENTER</button>
        </form>
      </div>
    </div>
  )
}

export default Searchbar