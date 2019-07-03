import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Search from './Components/Search/Search'
import BookSearch from './Components/Books/BookSearch'

function App() {
  return (
    <div>
     <Navbar />
      <div className="App">
     <Header />
     <Search />
     </div>
     <div className="search">
       {/* <BookSearch /> */}
      {/* <Route path="/books-list" component={BookSearch} /> */}
     </div>
    </div>
  );
}

export default App;
