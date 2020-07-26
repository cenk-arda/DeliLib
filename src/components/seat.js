import React, { Component } from 'react';
import '../App.css';

import Footer from './footer';
import Header from './header';
import axios from 'axios';
import MainStore from "./store";
import {observer} from "mobx-react"

const Seat = observer(
  class Seat extends Component {

    constructor(props){
    super(props);

      this.state = {
        group: "1",
        isSelected: 0,
        selectedDesk : "",
        hours: "",
        minutes: ""
      };

    }
    render(){
      return(
    <div className="frame">
      <Header />
      <div className = "leftdiv" style = {{float: "left",
            width: "40%",
            height: "70%",
            borderTop: "none",
            backgroundColor: "white",
            marginTop: "1%",
            marginLeft: "1%" }} >

            <div style = {{marginLeft:"auto"}}>  {this.renderSelector()} </div>
            <div style = {{objectFit:"contain",position:"relative"}}> {this.renderGroups(this.state.group)} </div>
      </div>
      <div style = {{textAlign:"center",backgroundColor:"black",float:"right", width:"40%", height:"50%"  }} >
         <p  style= {{ color:"white",marginTop:"50%",alignContent:"center"}}> BURAYA BAKARLAR (FOTO)</p>
      </div>

      <div style = {{ marginTop:"5%",backgroundColor:"black",float:"right", width:"40%", height:"20%" }} >
          <div style= {{ color:"white"}}> {this.renderInfo(this.state.isSelected, this.state.selectedDesk)}</div> </div>

      <Footer />
    </div>
  )
}


renderSelector(){
  return(
    <div className = "box">
        <label> Select a part of the library. </label> <br />
          <select name = "select" value={this.state.group}
            onChange={(e) => {this.setState({group : e.target.value }); this.getDesks(e.target.value); MainStore.group = e.target.value; } } >

              <option value="1"> Group1</option>
              <option value="2"> Group2</option>
          </select>
    </div>
  )
}

getDesks = (num) => {
  let body = {
    group: num
  }

  axios.post("https://polar-hollows-42744.herokuapp.com/seat/all",body,{
    headers: {
        token : localStorage.getItem('token')
      }
})
.then(res=> {

  MainStore.desks = res.data.result //which group?

})
.catch(error => alert("error while getting desk from server"))
}

componentDidMount(){
    MainStore.token = localStorage.getItem('token');
    this.getUser();
  MainStore.pagenum = 1;
  console.log("seat rendered pageNum is : " + MainStore.pagenum);

  this.getDesks(this.state.group);

  console.log(MainStore.user.isSeated);

}

getUser = () => {
    axios.get("https://polar-hollows-42744.herokuapp.com/user/me", {
        headers: {
            token: MainStore.token
        }
    })
    .then(res=> {
        MainStore.user = res.data;
        if(MainStore.user.isSeated){console.log("ufukaq")
          this.setState({
            isSelected:2,
            selectedDesk:MainStore.user.seatNum
          })
        }

    })
    .catch(err => alert("Unable to Retrieve User"))
  }

renderGroups(groupname){

      const Group1 = MainStore.desks.map( item => {
      if (item.isAvailable) {return(
          <div><a href={"#"} style = {{objectFit:"contain",maxWidth:"35%",maxLength:"25%"}} onClick={(e)=>{e.preventDefault();this.setState({group : this.state.group, isSelected: 1, selectedDesk: item.seatNum }); console.log("seat " +item.seatNum +" is clicked");}}>
           <img src = {require("./chair-icon.png")} style = {{objectFit:"contain", marginLeft:"auto", marginRight:"auto",maxWidth:"35%"}}></img>
         </a>
         <p style = {{fontSize:"55%" }}> Desk-{item.seatNum} is Available</p></div>
        )}


        return(
         <div> <a href={"#"} style = {{objectFit:"contain",maxWidth:"35%",maxLength:"25%"}} onClick= {() => alert("Already Occupied")}>
           <img src = {require("./chair-icon.png")} style = {{objectFit:"contain", marginLeft:"auto", marginRight:"auto",maxWidth:"35%"}}></img>
         </a>
         <p style = {{fontSize:"55%" }}> Desk-{item.seatNum} is not Available</p> </div>
       )
     })


    const Group2 = MainStore.desks.map( item => {
    if (item.isAvailable) {return(
        <div><a href={"#"} style = {{objectFit:"contain",maxWidth:"35%",maxLength:"25%"}} onClick={(e)=>{e.preventDefault();this.setState({group : this.state.group, isSelected: 1, selectedDesk: item.seatNum }); console.log("seat " +item.seatNum +" is clicked");}}>
         <img src = {require("./chair-icon.png")} style = {{objectFit:"contain", marginLeft:"auto", marginRight:"auto",maxWidth:"35%"}}></img>
       </a>
       <p style = {{fontSize:"55%" }}> Desk-{item.seatNum} is Available</p></div>
      )}

      return(

       <div> <a href={"#"} style = {{objectFit:"contain",maxWidth:"35%",maxLength:"25%"}}  onClick ={() => alert("Already Accupıed")}>
         <img src = {require("./chair-icon.png")} style = {{objectFit:"contain", marginLeft:"auto", marginRight:"auto",maxWidth:"35%"}}></img>
       </a>
       <p style = {{fontSize:"55%" }}> Desk-{item.seatNum} is not Available</p> </div>
     )
   })

    if(groupname === "1" ){
        return(  <div className = "wrapper" style  = {{ display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "1%", margin:"auto"}}>{Group1} </div> )
    }
    else if(groupname === "2"){
        return(<div className = "wrapper" style  = {{ display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "1%", margin:"auto"}}>{Group2} </div> )
    }
}

handleHold = (email, seatNum) => {
  let body = {
      email: email,
      seatNum: seatNum
  }
  axios.post("https://polar-hollows-42744.herokuapp.com/seat/hold", body, {
      headers: {
          token : MainStore.token
      }
  })
  .then(() => {
    this.getDesks(this.state.group)
    this.getUser()
    this.setState({
      isSelected: 2 })
      localStorage.setItem('seatNum',seatNum);
  })
.catch((err) => { console.log(err.response)})


}

handleUnhold = (email, seatNum) => {
   let body = {
       seatNum : localStorage.getItem('seatNum'),
       email : email
   }
   axios.post("https://polar-hollows-42744.herokuapp.com/seat/unhold", body, {
       headers: {
           token : MainStore.token
       }
   })
   .then(() =>  {
     this.getDesks(this.state.group)
     this.getUser()
     this.setState({isSelected:0,selectedDesk:0})
     })
   .catch((err) => {alert(JSON.stringify(err)); console.log(err)})

 }


renderInfo(isSelected,selectedDesk){

  if(MainStore.user.isSeated){
    return (<div> {MainStore.user.firstname +" "+ MainStore.user.lastname}, <br/> Seçilen Masa: {MainStore.user.seatNum}
<br/>
   Oturduğunuz Saat: {this.state.hours}.{this.state.minutes}
<br/>
    <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style=  {{borderRadius: "12px",outline:"none"}} onClick = {(e)=>{console.log(MainStore.user.seatNum)
        this.handleUnhold(MainStore.user.email,MainStore.user.seatNum);
      }}> Masadan Kalk </button>
    </div>)
  }
  else if(!isSelected){ //when no seat is selected yet
    return (<div>  {MainStore.user.firstname +" "+ MainStore.user.lastname}  <br/> bir masa seç!
     </div>)
  }
  else if(isSelected===1){ // when a seat is clicked
    return (<div>
      <p> {MainStore.user.firstname +" "+ MainStore.user.lastname}, <br/> Seçilecek Masa: {selectedDesk} </p>
      <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style=  {{borderRadius: "12px",outline:"none"}} onClick = {(e)=>{this.setState({
        selectedDesk : MainStore.user.seatNum}); this.handleHold(MainStore.user.email,this.state.selectedDesk);  let date = new Date();
          let hours = date.getHours()
          let minutes = date.getMinutes()
          if(hours<10){
            hours = "0"+hours;
          }
          if(minutes<10){
            minutes = "0"+minutes;
          }
          this.state.hours = hours;
          this.state.minutes = minutes;
          console.log(hours,minutes); }}> Seç </button>
     </div>)
  }

}




})
export default Seat
