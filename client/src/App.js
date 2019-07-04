import React from 'react';
import './App.css';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'

import Home from './Components/Pages/Home'
import Search from './Components/Pages/Search'
import Saved from './Components/Pages/Saved'

function App() {
  return (
    <Switch>
      <div className='App'>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/search' component={Search}></Route>
        <Route exact path='/saved' component={Saved}></Route>
      </div>
    </Switch>
  );
}

export default App;
