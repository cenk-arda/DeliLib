import React, { Component } from 'react';
import axios from "axios";
import MainStore from "./store";


class Login extends Component{
  constructor(props) {
    super(props);

    this.state = {
      email: "",
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
      username : this.state.email,
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
        <div>
        <h1 style={{fontSize:"60px",textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"}}> Let's study! </h1>
        <form id="msform" onSubmit = {this.handleSubmit}>
        <input  name="email" placeholder= "User Name" value = {this.state.email} onChange={this.handleChange} required/> <br />
        <input type="password" name="password" placeholder= "Password" value = {this.state.password} onChange={this.handleChange} required/> <br />
         <br />
         <button type="submit" className = "action-button">Enter</button>
        </form>
         </div>

        );
      }
}
export default Login;
