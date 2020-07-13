import React, { Component } from 'react';
import '../App.css';
import {observer} from "mobx-react";
import MainStore from "./store";


const Header = observer (class Header extends Component {

  constructor(props){
  super(props);

    this.state = {
      pagenum : MainStore.pagenum
    };

  }

componentDidMount(){
  console.log("pagenum: "+ MainStore.pagenum);

}

handleClick(){
  MainStore.pagenum = 0;
  localStorage.clear();
  MainStore.user = [];
  MainStore.token = "";
  window.location.href = "/";
}

renderHeader(num){
    if(num===1){
      return(<header className = "header">
        <a className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href= "/study" style = {{borderRadius: "12px", margin: "8px",float :"left"}} > Study</a>
        <a className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"   onClick = {(e)=>{this.handleClick()}} style = {{borderRadius: "12px", margin:"8px",float: "right"}} > Logout  </a>
      <a className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"  href= "/profile" style = {{borderRadius: "12px", margin:"8px", float: "right"}} > Profile </a>

        </header>)
    }

    else if(num===0){
      return(<header className = "header">
        <img src = {require("./udago.png")} alt="logo" style = {{maxLength:"1%",maxWidth:"60px",margin:"auto"}}></img>
        </header>)

    }
}

render(){
  const renderHeader = () =>{
    if(MainStore.pagenum===1){
      return(<header className = "header">
        <a className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href= "/study" style = {{borderRadius: "12px", margin: "8px",float :"left"}} > Study</a>
        <a className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href = "#" onClick = {this.handleClick} style = {{borderRadius: "12px", margin:"8px",float: "right"}} > Logout  </a>
      <a className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"  href= "/profile" style = {{borderRadius: "12px", margin:"8px", float: "right"}} > Profile </a>

        </header>)
    }

    else if(MainStore.pagenum===0){
      return(<header className = "header">
        <img src = {require("./udago.png")} alt = "logo" style = {{maxLength:"1%",maxWidth:"60px",margin:"auto"}}></img>
        </header>)

    }
  }
  return(
    <div>{renderHeader()}</div>
  );
}
})
export default Header
