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
          <div style={{margin:"auto"}}>
          <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style=  {{position:"relative",borderRadius: "12px",outline:"none"}} onClick = {this.signIn}>
          Sign In
          </button>
        <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style=  {{position:"relative",borderRadius: "12px",outline:"none"}} onClick = {this.signUp}>
          Sign Up
          </button>
          <Register/>
          </div>



        <Footer/>
        </div>
      );
      }
      else{
        return(
         <div className = "frame">
               <Header />
               <div style = {{margin:"auto"}}>
                    <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style=  {{position:"relative",borderRadius: "12px", outline:"none"}}onClick = {this.signIn}>
                     Sign In
                     </button>
                     <button className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style=  {{position:"relative",borderRadius: "12px",outline:"none"}}onClick = {this.signUp}>
                     Sign Up
                     </button>
                      <Login/>
               </div>

               <Footer />
       </div>
       );
      }
  }

}
export default Authmenu;
