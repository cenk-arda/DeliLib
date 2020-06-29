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
    this.handleChange = this.handleChange.bind(this); // if arrow functions were used, there would no need to bind the methods to this.(not recommended)
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
        <div className="w-full max-w-xs" style = {{position: "absolute",margin: "auto",	top:"%20",	bottom: "10", left: "0",	right: "0"}}>


        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style = {{ }}  onSubmit = {this.handleSubmit}>
            <h1 style={{position:"relative",marginTop:"10px", fontSize:"50px",textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white", color: "black", position: "relative",margin: "auto"}} > Join us! </h1><br />
          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" name = "first_name" placeholder = "First Name" value= {this.state.first_name} onChange = {this.handleChange} required/>
          </div>

          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" name = "last_name" placeholder = "Last Name" value= {this.state.last_name} onChange = {this.handleChange} required/>
          </div>

          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="institution" type="text" name = "inst" placeholder = "Institution" value= {this.state.inst} onChange = {this.handleChange} required/>
          </div>

          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name = "username" placeholder = "Username" value= {this.state.username} onChange = {this.handleChange} required/>
          </div>

          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" name = "email" placeholder = "E-mail" value= {this.state.email} onChange = {this.handleChange} required/>
          </div>

          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name = "password" placeholder = "Password" value= {this.state.password} onChange = {this.handleChange} required/>
          </div>

          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirm_password" type="password" name = "confirm_password" placeholder = "Confirm your password" value= {this.state.confirm_password} onChange = {this.handleChange} required/>
          </div>


         <button type="submit" className =  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style = {{outline:"none"}}>Register</button>
        </form>

         </div>

        );
      }
}
export default Register;
