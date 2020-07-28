import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import * as serviceWorker from './serviceWorker';

import Authmenu from './components/authmenu';

import Seat from './components/seat';
import User from './components/user.js';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

const routing = (
<Router>

  <Route path="/profile" component={User} />
  <Route exact path="/"  component={Authmenu} />
  <Route path="/study" component={Seat} />
  
</Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
