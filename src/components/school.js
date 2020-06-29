import React, { Component } from 'react';
import "./../App.css"

class School extends Component {

render(){
  return(
    <div className="max-w-sm rounded overflow-hidden shadow-lg" style = {{width : "100%",height:"100%", textAlign:"center",padding:"10px"}}>
<div className ="font-bold text-xl mb-2"> School Information </div>
<p  class="text-gray-700 text-base" style ={{padding:"10px",textAlign: "left"}} > School:</p>
<p  class="text-gray-700 text-base" style ={{padding:"10px",textAlign: "left"}} > Number:</p>
<p  class="text-gray-700 text-base" style ={{padding:"10px",textAlign: "left"}} > Grade:</p>
    </div>
  )
}

}
export default School
