import React, { Component } from 'react';
import '../App.css';


class Header extends Component {
render(){
  return(
    <header className = "header">
    <a  href= "https://google.com"> <img style = {{marginLeft: "100px"}} className = "logo" src={require("./udago.jpg")} alt="Logo" /> </a>
    <a  href= "http://firatilhanokullari.com/"> <img  className = "logo"  src={require("./deli.jpg")} alt="Logo" /> </a>
     <a className= "profileButton" href= "/profile" style = {{textDecoration: 'none'}} > Profile </a>
     <a className= "profileButton" href= "/study" style = {{textDecoration: 'none', right: '20px'}} > Study </a>
    </header>
  )
}
}
export default Header
