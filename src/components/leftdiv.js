import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Avatar from 'react-avatar';


class LeftDiv extends Component {
  constructor(props){
    super(props);
  }
render(){
  return(
    <div className= "left">
      <Avatar facebookId="100008343950952" size="100" round="50%" />
      <h1 style={{fontSize:"24px",textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 1px black",color:"white"}}>Ufuk Yağmur</h1>
      <h2 className = "h2" style={{textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"}} >Contact</h2>
      <p style={{fontSize:"18px",textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 1px black",color:"white"}}> exxxxxx@metu.edu.tr </p>
    </div>
  )
}

}
export default LeftDiv;
