import React, { Component } from 'react';
import '../App.css';

class Lessons extends Component{
  constructor(props) {
    super(props);

    this.state = {
      lesson: 'Mathematics',
      started: false,
    };

    this.handlechange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    };

    handleChange(event){
      this.state.lesson = event.target.value;
      console.log(this.state.lesson);
    }

    handleSubmit(event){
      event.preventDefault();
    }

    handleClick(event){
      this.setState({started: !this.state.started});
    }

      render(){

        return (
        <div id = "seatArea">
          <br/>
        <h1 style={{fontSize:"36px",textShadow: "-1px 0 #F1F3F4, 0 1px #F1F3F4, 1px 0 #F1F3F4, 0 -1px #F1F3F4"}}> What do you want to study? </h1>

            <br/>
              <br/>
                <br/>
                  <br/>
<form onSubmit = {this.handleSubmit}>
      <div className="box">
              <select>
                  <option value="Physics">Physics</option>
                  <option value="Biology">Biology</option>
                  <option value="Chemistry">Chemistry</option>
                </select>
      </div>
                </form>



    {this.state.started?
      (<button  className = "action-button" onClick = {this.handleClick}> Stop! </button>)
      : (<button  className = "action-button" onClick = {this.handleClick}> Start! </button>)}

        </div>

        );
      }
}
export default Lessons;
