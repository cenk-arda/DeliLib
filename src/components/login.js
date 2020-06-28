import React, { Component } from 'react';
import axios from "axios";
import MainStore from "./store";


class Login extends Component{
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this); // class methods are not binded to this by default.
    this.handleChange = this.handleChange.bind(this); // if arrow functions was used, there would no need to bind the methods to this.
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    let data = {
      username : this.state.userName,
      passwd: this.state.password
    }

    axios.post('http://pypy38.pythonanywhere.com/users/login/', data)
    .catch(err => alert(err))
    .then(res => {
      console.log(res);
      MainStore.id = res.data.id;
      MainStore.token = res.data.token;
      console.log(MainStore.id);
    } )
    event.preventDefault();
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
        <div className="w-full max-w-xs"style = {{position: "absolute",margin: "auto",	top:"10",	bottom: "10", left: "0",	right: "0"}}>
        <h1 style={{fontSize:"50px",textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"}}> Let's study! </h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit = {this.handleSubmit}>

            <div className="mb-4">
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name = "userName" placeholder = "Username" value = {this.state.userName} onChange={this.handleChange} required/>
            </div>

            <div className="mb-4">
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name = "password" placeholder = "Password" value= {this.state.password} onChange = {this.handleChange} required/>
            </div>

          <button type="submit" className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Enter</button>
        </form>
         </div>

        );
      }
}
export default Login;
