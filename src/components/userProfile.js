import React, { Component } from 'react';


class UserProfile extends Component{
    constructor(props){
      super(props);
      this.state = {
        isEditing1: false,
        isEditing2: false,
        isEditing3: false,
        isEditing4: false,
        name: "default",
        surname: "default",
        email: "default",
        school: "default"
      }
      this.EditText = this.EditText.bind(this);
      this.toggleState = this.toggleState.bind(this);
      this.updateItem = this.updateItem.bind(this);
    }

    toggleState(a,n){
        const b = a;
        this.setState({
          ["isEditing"+n]: !b
        })

      }

  updateItem(e,a){
    e.preventDefault();
    this.setState({
      ["isEditing1"]: false
    })

  }

    EditText(event){
      this.setState({[event.target.name]: event.target.value})
      console.log(this.state.name)
    }

    renderItem(){
      return (
        <div>
        <li className={'1'}>
          {this.state.name}

        </li>
        <li className={'2'}>
          {this.state.surname}

        </li>
        <li className={'3'}>
          {this.state.email}

        </li>
        <li className={'4'} >
          {this.state.school}

        </li>
        <button onClick={(e) => this.toggleState(this.state.isEditing1,1)}
          >Edit Items</button>
        </div>
      )
    }

    renderForm(){
      return (
       <form>
        <input type="text" name="name" onChange = {this.editText} />
         <br/>

          <input type="text" name="surname" onChange = {this.editText} />
        <br/>

            <input type="text" name="email" onChange = {this.editText} />
           <br/>

              <input type="text" name="school" onChange = {this.editText} /> <br/>
              <button  onClick = {(e) => this.toggleState(this.state.isEditing1,1)}>Update Item</button> <br/>
      </form>
      )
    }
    render(){

    return (
      <section>
      {
        this.state.isEditing1 ? this.renderForm() :  this.renderItem()
      }

      </section>
         )
      }
  }
export default UserProfile;
