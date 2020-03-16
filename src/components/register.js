import React, { Component } from 'react';
import axios from 'axios';
import MainStore from "./store";


class Register extends Component{
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      inst: "",
      email: "",
      username: "",
      password: "",
      confirm_password: "",
      errors: ""
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
    if(this.state.password != this.state.confirm_password){
      alert("Passwords does not match");
      return;
    }
    let data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      inst : this.state.inst,
      email : this.state.email,
      username : this.state.username,
      passwd : this.state.password,
    }
    axios.post('http://pypy38.pythonanywhere.com/users/register/', data)
    .catch(err => alert(err))
    .then(res => {
      console.log(res);
      MainStore.id = res.data.id;
      MainStore.token = res.data.token;
      console.log(MainStore.id);
    } )
    event.preventDefault();
  }



      render(){

        return (
        <div>
        <h1 style={{fontSize:"60px",textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"}}> Join us! </h1>

        <form id="msform" onSubmit = {this.handleSubmit}>
        <input name = "first_name" placeholder = "First Name" value= {this.state.first_name} onChange = {this.handleChange} required/> <br />
        <input name = "last_name" placeholder = "Last Name" value= {this.state.last_name} onChange = {this.handleChange} required/> <br />
        <input name = "inst" placeholder = "Institution" value= {this.state.inst} onChange = {this.handleChange} required/> <br />
                <input name = "username" placeholder = "Username" value= {this.state.username} onChange = {this.handleChange} required/> <br />
        <input type="email" name="email" placeholder= "E-mail" value = {this.state.email} onChange={this.handleChange} required/> <br />
        <input type="password" name="password" placeholder= "Password" value = {this.state.password} onChange={this.handleChange} required/> <br />
        <input type="password" name="confirm_password" placeholder="Confirm your password" value = {this.state.confirm_password} onChange={this.handleChange} required/> <br /><br />
         <button type="submit" className = "action-button">Register</button>
        </form>
         </div>

        );
      }
}
export default Register;
