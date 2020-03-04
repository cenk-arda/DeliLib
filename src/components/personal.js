import React, { Component } from 'react';

class Personal extends Component {
render(){
  return(
    <div>
<h1 style={{fontSize:"36px",textShadow: "-1px 0 #F1F3F4, 0 1px #F1F3F4, 1px 0 #F1F3F4, 0 -1px #F1F3F4"}}> Personal Information </h1>
<p style={{fontSize:"24px",textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 1px black",color:"white"}}> Name:</p>
<p style={{fontSize:"24px",textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 1px black",color:"white"}}> Surname:</p>
<p style={{fontSize:"24px",textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 1px black",color:"white"}}> Age:</p>
<p style={{fontSize:"24px",textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 1px black",color:"white"}}> Email:</p>
    </div>
  )
}

}
export default Personal
