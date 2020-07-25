import React, { Component } from 'react';

import Google from './googlelogo.png';
import Ios from './ioslogo.jpg';


class Advertise extends Component{
  constructor(props) {
    super(props);

    this.state = {
     view: false
    };

    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
  }

signIn(e){
  this.setState({ view: false })

}

signUp(e){
  this.setState({ view: true})
}


      render(){

        return(
               <div style = {{marginLeft: "20%", float: "left", width: "30%", backgroundColor: "white", padding: "30px", borderRadius:" 5px", marginTop: "60px"}}>
                    <img src = {require("./ss.png")} style = {{borderRadius: "28px", width: "50%", height:"50%", marginLeft: "25%", marginBottom:"30px"}} ></img>
                    <p style = {{ fontSize: "16px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                    <a href="#" title="Image from freepnglogos.com"><img style = {{marginTop: "30px", marginLeft: "30px"}}  src="https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png" width="400"  alt="google play and apple app store logos" /></a>
               </div>
       );
  }

}
export default Advertise;
