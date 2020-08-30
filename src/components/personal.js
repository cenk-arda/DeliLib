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
{this.renderTimeSeated()}
{this.renderTimeStudied()}
    </div>
  )
}

renderTimeSeated = () => {
  let timestarted = new Date(Date.parse(MainStore.user.timeStarted))
  let hour = timestarted.getHours()
  let minute = timestarted.getMinutes()
  if(hour < 10){
         hour = "0" + hour
  }
  if(minute < 10){
         minute = "0" + minute
  }
  return (<p className="text-black-700 text-base"style ={{padding:"10px",textAlign: "left"}}> Başladığı Saat: {hour}.{minute} </p>)

}


renderTimeStudied = () =>{
  let total = MainStore.user.totalTimeStudied;
  let hours = Math.floor(total/3600);
  let minutes = Math.floor((total-hours*3600)/60);
  let seconds = Math.floor(total-hours*3600-minutes*60);
  return(<p className="text-black-700 text-base"style ={{padding:"10px",textAlign: "left"}}> Toplam çalışma süresi: {hours} Saat {minutes} Dakika {seconds} Saniye </p> )
}
})
export default Personal
