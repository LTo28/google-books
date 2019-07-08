import React from 'react';
import './App.css';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'

import Home from './Components/Pages/Home/Home'
import Search from './Components/Pages/Search/Search'
import Saved from './Components/Pages/Saved/Saved'

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Home}></Route>
        <Route className='pages' exact path='/search' component={Search}></Route>
        <Route className='pages' exact path='/saved' component={Saved}></Route>
      </div>
    </Router>
  );
}

export default App;
