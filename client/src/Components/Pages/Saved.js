import React from 'react';

import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'

import { Link } from 'react-router-dom'

const Saved = () => {
  //getrequest from db
  return(
    <div>
      <span>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/search"> Search </Link>
        </li>
        <li>
          <Link to="/saved"> Saved </Link>
        </li>
      </span>
      {/* <Navbar /> */}
      <Header />
    </div>
  )
}

export default Saved;