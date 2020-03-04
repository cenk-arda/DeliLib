import React, { Component } from 'react';
import Register from './register';
import Login from './login';
import Header from './header';
import Footer from './footer';

class Authmenu extends Component{
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
       if(this.state.view) {
       return(
        <div className = "frame">
          <Header />
        <div id = "msform">
          <button className = "action-button" onClick = {this.signIn}>
          Sign In
          </button>
        <button className = "action-button" onClick = {this.signUp}>
          Sign Up
          </button>
          <div> <Register/> </div>

        </div>
        <Footer/>
        </div>
      );
      }
      else{
        return(
         <div className = "frame">
          <Header />
         <div id = "msform">
           <button className = "action-button" onClick = {this.signIn}>
           Sign In
           </button>
           <button className = "action-button" onClick = {this.signUp}>
           Sign Up
           </button>
           <div> <Login/> </div>

         </div>
       <Footer />
       </div>
       );
      }
  }

}
export default Authmenu;
