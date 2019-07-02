import React from 'react'

const Search = () => {
  return (
    <div>
      <div className="instructions">
        <p>Search for a book</p>
      </div>

      <div className='booksearch'>
        <form method='POST' action='http://localhost:3001/search'>
          <input type='text' placeholder='Harry Potter' name='search' />
          <button>ENTER</button>
        </form>
      </div>
    </div>
  )
}

export default Search