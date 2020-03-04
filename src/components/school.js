import React, { Component } from 'react';
import "./../App.css"

class School extends Component {

render(){
  return(
    <div>
<h1 style={{fontSize:"36px",textShadow: "-1px 0 #F1F3F4, 0 1px #F1F3F4, 1px 0 #F1F3F4, 0 -1px #F1F3F4"}}> School Information </h1>
<p style={{fontSize:"24px",textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 1px black",color:"white"}}> School:</p>
<p style={{fontSize:"24px",textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 1px black",color:"white"}}> Number:</p>
<p style={{fontSize:"24px",textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 1px black",color:"white"}}> Grade:</p>
    </div>
  )
}

}
export default School
