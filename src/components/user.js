import React, { Component } from 'react';

import Personal from './personal';
import School from './school';

import Header from './header';
import Footer from './footer';
import {observer} from "mobx-react";
import MainStore from "./store";
import axios from 'axios';
const User = observer(class User extends Component{
constructor(props){
  super(props);
 this.state = {
   view : true,
   oldpassword: "",
   newpassword: "",
   newpasswordAgain: ""
 }

}


getUser = () => {
 axios.get(MainStore.uri + "user/me", {
     headers: {
         token : localStorage.getItem('token')
     }
 })
 .then(res=> {
     MainStore.user = res.data
     MainStore.token = localStorage.getItem('token')
     console.log(MainStore.user);
 })
 .catch(err => alert("Unable to Retrieve User"))
}

componentDidMount(){
  MainStore.pagenum = 1;
  this.getUser();
}


switchPersonal(){
  this.setState({ view: true })
}

handleChange1(event){
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleSubmit(){
  console.log(MainStore.token);
  if(this.state.newpassword!==this.state.newpasswordAgain){
    alert("Passwords must match!")
  }
  else{
    let body = {
      email :  MainStore.user.email,
      password: this.state.newpassword,
      oldPassword: this.state.oldpassword
    }
    console.log(body)
    axios.post(MainStore.uri + "user/changePasswd",body,{
      headers:{
          token: MainStore.token
      }
    })
    .then(res => {
      alert("Your password has changed successfully!")
    })
    .catch(err=>console.log(err))
  }
}

  render(){

       if(this.state.view) {
       return(

        <div className = "frame">
          <Header />

        <div className ="font-bold text-xl mb-2" style = {{
          width:"25%",
          marginTop:"20px",
          marginLeft:"auto",
          marginRight:"auto",
          background : "white",
      }}>

           <Personal/>

        </div>

      <div className="w-full max-w-xs"style = {{position: "relative",marginTop:"20px",	marginBottom: "20px", marginLeft:"auto", marginRight:"auto", }}>
        <p className="text-gray-700 text-base"> Change your password: </p> <br/>
          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="oldpassword" type="password" name = "oldpassword" placeholder = "Old Password" value = {this.state.oldpassword}  onChange={(event) => this.handleChange1(event)} required />
          </div>
          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="newpassword" type="password" name = "newpassword" placeholder = "New Password" value = {this.state.newpassword} onChange={(event) => this.handleChange1(event)} required/>
          </div>
          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="newpasswordAgain" type="password" name = "newpasswordAgain" placeholder = "New Password Again" value = {this.state.newpasswordAgain}  onChange={(event) => this.handleChange1(event)} required/>
          </div>
           <button type="submit" className = "bg-red-500 text-white font-bold py-2 px-4 rounded-full" onClick = {() =>this.handleSubmit()} style= {{outline:"none", backgroundColor: "red"}}>Change Password</button>
        </div>
        <Footer/>
        </div>

      );
      }


       else{
        return(

    <div className = "frame">
                <Header />

                   <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"style ={{ marginTop:"22%", margin:"auto",outline:"none", backgroundColor : "red"}}onClick = {this.switchPersonal}>
                   Personal
                   </button>


              <div className ="font-bold text-xl mb-2" style = {{
                     margin:"auto",
                     top:"30%",
                     width: "35%",
                     height: "30%",
                   background : "white",
                 }}>
                 <School/>
             </div>

               <Footer/>
       </div>

       );
      }
  }


})
export default User;
