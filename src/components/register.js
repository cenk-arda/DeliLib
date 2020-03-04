import React, { Component } from 'react';



class Register extends Component{
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirm_password: "",
      errors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this); // class methods are not binded to this by default.
    this.handleChange = this.handleChange.bind(this); // if arrow functions was used, there would no need to bind the methods to this.
  }

  handleChange(event){
    console.log("handle change", event);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    console.log("form submitted");
    event.preventDefault();
  }

      render(){

        return (
        <div>
        <h1 style={{fontSize:"60px",textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"}}> Join us! </h1>

        <form id="msform" onSubmit = {this.handleSubmit}>
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
