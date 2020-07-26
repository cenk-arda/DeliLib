import React, { Component } from 'react';
import {observer} from "mobx-react";
import MainStore from "./store";
let Personal = observer(class Personal extends Component {
render(){
  return(
    <div className="max-w-sm rounded overflow-hidden" style = {{width : "100%",height:"100%", textAlign:"center",padding:"10px"}}>
<div className ="font-bold text-xl mb-2"> Personal Information </div>

<p className="text-black-700 text-base" style ={{padding:"10px",textAlign: "left", textTransform:"capitalize"}} > Name: {MainStore.user.firstname} </p>
<p className="text-black-700 text-base" style ={{padding:"10px",textAlign: "left", textTransform:"capitalize"}} > Surname: {MainStore.user.lastname} </p>
<p className="text-black-700 text-base"style ={{padding:"10px",textAlign: "left", textTransform:"capitalize"}} > Job: {MainStore.user.job} </p>
<p className="text-black-700 text-base"style ={{padding:"10px",textAlign: "left"}}> Email: {MainStore.user.email} </p>
    </div>
  )
}

})
export default Personal
