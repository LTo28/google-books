import React from 'react';
import Navbar from '../Navbar/Navbar'
import Searchbar from '../Searchbar/Searchbar'
import Header from '../Header/Header'
import BookSearch from '../Books/BookSearch'

import { Link } from 'react-router-dom'

const Home = () => {


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
      <Searchbar />
      </div>
    </div>
  )
}

export default Home