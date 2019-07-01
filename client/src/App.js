import React from 'react';
import './App.css';
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
     <BookSearch />
    </div>
  );
}

export default App;
