import React, { Component } from 'react';
import axios from "axios";
import MainStore from "./store";
import {observer} from "mobx-react"


const Login = observer(class Login extends Component{
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };


  }

  handleChange1(event){
    this.setState({
     email: event.target.value
    })
  }

    handleChange2(event){
      this.setState({
        password: event.target.value

      })
    }


  handleSubmit(event) {

    let data = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(data);

    axios.post(MainStore.uri + "user/login/", data)
    .then(res => {
      console.log(res);
      console.log(res.data.token);
      localStorage.setItem('token',res.data.token);
      window.location.href = "/study";
    } )
    .catch(err => console.log(err))

  }

  /* take_user() => {
    data = {
      id : MainStore.id
    }
    axios.get('', data ,{
      headers: {
        Authorization : "Token " + MainStore.token
      }
    })
  } */

      render(){

        return (
        <div className="w-full max-w-xs"style = {{backgroundColor: "#fff", padding : "30px", borderRadius: "5px", margin: "auto",marginTop:"20px"}}>
          <h1 style={{fontSize:"50px",textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"}}> Let's study! </h1> <br />
            <div className="mb-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name = "userName" placeholder = "Username" value = {this.state.email} onChange={(event) => this.handleChange1(event)} required/>
            </div>

            <div className="mb-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name = "password" placeholder = "Password" value= {this.state.password} onChange = {(event) => this.handleChange2(event)} required/>
            </div>

          <button type="submit" className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick = {() =>this.handleSubmit()} style= {{outline:"none", backgroundColor: "red"}}>Enter</button>
         </div>

        );
      }
})
export default Login;
