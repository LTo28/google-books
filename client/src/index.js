import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import BookSearch from './Components/Books/BookSearch'

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/books-list" component={BookSearch} />
      {/* <Route path="/contact" component={Contact} /> */}
    </div>
  </Router>
)

ReactDOM.render(
  
routing
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
