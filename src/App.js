import React from 'react';
import './App.css';

import Register from './components/register';
import Login from './components/login';
import Authmenu from './components/authmenu';
import UserProfile from './components/userProfile.js';
import User from './components/user.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (


<div className = "App">
<Authmenu />
<User />
</div>


  );
}
export default App;
