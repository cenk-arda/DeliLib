import React, { Component } from 'react';
import '../App.css';


class Header extends Component {
render(){
  return(
    <header className = "header">
  {/*  <a  href= "https://google.com"> <img style = {{marginLeft: "100px"}} className = "logo" src={require("./udago.jpg")} alt="Logo" /> </a> */}
    { /*<!-- <a  href= "http://firatilhanokullari.com/"> <img  className = "logo"  src={require("./deli.jpg")} alt="Logo" /> </a> -->*/ }
     <a className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"  href= "/profile" style = {{borderRadius: "12px", margin:"8px", float: "right"}} > Profile </a>
    <a className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href= "/study" style = {{borderRadius: "12px", margin: "8px",right: '2px',float :"right"}} > Study </a>
    </header>
  )
}
}
export default Header
