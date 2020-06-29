import React, { Component } from 'react';

class Personal extends Component {
render(){
  return(
    <div className="max-w-sm rounded overflow-hidden shadow-lg" style = {{width : "100%",height:"100%", textAlign:"center",padding:"10px"}}>
<div className ="font-bold text-xl mb-2"> Personal Information </div>

<p class="text-gray-700 text-base" style ={{padding:"10px",textAlign: "left"}} > Name:</p>
<p class="text-gray-700 text-base" style ={{padding:"10px",textAlign: "left"}} > Surname:</p>
<p class="text-gray-700 text-base"style ={{padding:"10px",textAlign: "left"}} > Age:</p>
<p class="text-gray-700 text-base"style ={{padding:"10px",textAlign: "left"}}> Email:</p>
    </div>
  )
}

}
export default Personal
