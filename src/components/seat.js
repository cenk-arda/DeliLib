import React, { Component } from 'react';
import '../App.css';

import Footer from './footer';
import Header from './header';
import axios from 'axios';
import MainStore from "./store";
import {observer} from "mobx-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair } from '@fortawesome/free-solid-svg-icons';

const Seat = observer(
  class Seat extends Component {

    constructor(props){
    super(props);

      this.state = {
        chosen: {},
        library:{} ,
        group:"",
        group2: MainStore.groupNames[0],
        groupNames : MainStore.groupNames,
        isSelected: 0,
        selectedDesk : "",
        date: null,
        ip :"",
        title: MainStore.title,
        libpassword: "",
        show: 0,
        email: localStorage.getItem('email')
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
            marginTop: "50px",
            marginLeft: "5%",
            boxShadow: "2px 2px 2px 2px #9E9E9E"
          }} >

            <div style = {{marginLeft:"auto"}}>  {this.renderSelector()} </div>
            <div style = {{objectFit:"contain",position:"relative"}}> {this.renderGroups(this.state.group)} </div>
      </div>
      <div style = {{textAlign:"center",float:"right", width:"40%", height:"50%", marginRight: "5%", borderRadius: "5px", marginTop:"10px"  }} >
         <img src = {require("./udago.jpg")} style= {{width: "100%", height: '100%' ,objectFit: "contain",}}/>
      </div>

      <div style = {{ marginTop:"5%",backgroundColor:"white",float:"right",marginRight: "5%", width:"40%", height:"20%", borderRadius: "5px",boxShadow: "2px 2px 2px 2px #9E9E9E" }} >
          <div style= {{ color:"white"}}> {this.renderInfo(this.state.isSelected, this.state.selectedDesk)}</div> </div>

      <Footer />
    </div>
  )
}



renderSelector(){
  return(
    <div className = "box">
        <p style = {{marginTop: "20px", fontWeight: "500",}}> Select a part of the library. </p>
          <select name = "select" value = {this.state.group} style = {{
            height: "35px",
            borderRadius: "10px",
            marginTop: "10px",
            marginBottom: "40px"
          }}
            onChange={(e) => {this.setState({group : e.target.value }); this.getDesks(e.target.value); MainStore.group = e.target.value; } } >
              {MainStore.groupNames.map(group =>{
                return(<option value={group}> {group}</option>)
              })}


          </select>
    </div>
  )
}



getLibraries = () => {
  axios.get(MainStore.uri + "library/all", {
    headers: {
      token: localStorage.getItem('token')
    }
  })
  .then( res => {
    MainStore.libraries = res.data
    console.log(MainStore.libraries)

  })
  .catch(err => {
    alert(JSON.stringify(err))
  })
}


getDesks = (num) => {
  let body = {
    group: num,
    seatCollectionName: MainStore.library.seatCollectionName
  }

  axios.post(MainStore.uri + "seat/all",body,{
    headers: {
        token : localStorage.getItem('token')
      }
})
.then(res=> {

  MainStore.desks = res.data //which group?
  console.log("get Desks: ",MainStore.desks);

})
.catch(error => alert("error while getting desk from server"))
}

getUser = () => {
  let body = {
    email: localStorage.getItem('email')
  }
    axios.post(MainStore.uri + "user/me",body,{
        headers: {
            token: MainStore.token
        }
    })
    .then(res=> {
        MainStore.user = res.data;
        console.log("getUser's response.data fetched into MainStore.user : ",MainStore.user.firstname)  // bu ufuk yazdırıo
        if(MainStore.user.isSeated){
          console.log("getuser in seat js: ",res.data);
          this.setState({
            isSelected:2,
            selectedDesk:MainStore.user.seatNum
          })
        }

    })
    .catch(err => {alert("Unable to Retrieve User"); console.log(MainStore.token)})
  }

componentDidMount(){
    MainStore.token = localStorage.getItem('token');
    MainStore.email = localStorage.getItem('email');
    this.getUser();
    this.getIP();
    console.log("componentDidmount email before getUser: ",MainStore.email)

    console.log("componentDidMount: ",this.state.ip)


    MainStore.groupNames = JSON.parse(localStorage.getItem('groupnames'))
    this.setState({group:MainStore.groupNames[0]})
    MainStore.library = JSON.parse(localStorage.getItem('library'))

    console.log("componentDidMount after getuser MainStore.library.groupNames[0]: ",MainStore.library.groupNames[0])
    console.log("componentDidMount after getuser MainStore.user: ",MainStore.user) // bu undefined yazdırıyo
console.log("componentDidMount before getDesks(MainStore.groupNames[0]) => deskss:  " ,MainStore.desks)
    this.getDesks(MainStore.groupNames[0])
    console.log("componentDidMount after getDesks(MainStore.groupNames[0]) =>desks:  " ,MainStore.desks)
    MainStore.pagenum = 1;


}



getIP= () =>{
  axios.get('https://api.ipify.org?format=json',
)
  .then( res => {

  /*this.setState({ip: res.data.ip})*/
  this.setState({ip:"178.233.20.61"})
  console.log(this.state.ip)
  })
  .catch(err => {
    alert(JSON.stringify(err))
  })

}

renderGroups(groupname){

      var Group = MainStore.desks.map( item => {
      if (item.isAvailable) {return(
          <div><a href={"#"} style = {{objectFit:"contain",maxWidth:"35%",maxLength:"25%"}} onClick={(e)=>{e.preventDefault(); this.setState({isSelected: 1, selectedDesk: item.seatNum }); }}>
           <FontAwesomeIcon icon={faChair} size = "2x" color = "green" />
         </a>
         <p style = {{fontSize:"55%" }}> Desk-{item.seatNum} is Available</p></div>)
        }


        return(
         <div> <a href={"#"} style = {{objectFit:"contain",maxWidth:"35%",maxLength:"25%"}} onClick= {() => alert("Already Occupied")}>
           {(MainStore.user.seatNum===item.seatNum)?<FontAwesomeIcon icon={faChair} size = "2x" color = "#FFD700" />:<FontAwesomeIcon icon={faChair} size = "2x" color = "red" />}
         </a>
         {(MainStore.user.seatNum===item.seatNum)?<p style = {{fontSize:"55%" }}> Your seat: Desk-{item.seatNum}</p> :<p style = {{fontSize:"55%" }}> Desk-{item.seatNum} is not Available</p> } </div>
       )
     })



        return(  <div className = "wrapper" style  = {{ display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "1%", margin:"auto"}}>{Group} </div> )

}

handleHold = (email, seatNum) => {
  if(this.state.libpassword === ""){
        alert("Lutfen Sifre Giriniz")
        return
      }
      let body = {
                email: email,
                seatNum: seatNum,
                ipAdress: "94.54.56.212",
                seatCollectionName: MainStore.library.seatCollectionName,
                library : MainStore.library.libName,
                password : this.state.libpassword,
                group: this.state.group
            }
  axios.post(MainStore.uri + "seat/hold", body, {
      headers: {
          token : localStorage.getItem('token')
      }
  })
  .then(() => {

    this.getDesks(this.state.group)
    this.setState({
      isSelected: 2, /*group:MainStore.user.group*/ })
    this.getUser()
  })
.catch((err) => { console.log("holderror ",err.response)})


}

handleUnhold = (email, seatNum) => {
   let body = {
       seatNum : MainStore.user.seatNum,
       email : email,
       seatCollectionName: MainStore.user.seatCollectionName
   }
   axios.post(MainStore.uri + "seat/unhold", body, {
       headers: {
           token : localStorage.getItem('token')
       }
   })
   .then(() =>  {
     this.getDesks(this.state.group)
     this.getUser()
     this.setState({isSelected:0,selectedDesk:0})
     })
   .catch((err) => {alert(JSON.stringify(err)); console.log("unholderror ",err)})

 }


renderInfo(isSelected,selectedDesk){
  // alert(JSON.stringify(MainStore.user))
  let timestarted = new Date(Date.parse(MainStore.user.timeStarted))
  let hour = timestarted.getHours()
  let minute = timestarted.getMinutes()
  if(hour < 10){
         hour = "0" + hour
       }
       if(minute < 10){
         minute = "0" + minute
       }
  if(MainStore.user.isSeated){
    return (
    <div>
       <p style = {{color : "black", fontWeight: "500", fontSize: "24px", marginTop: "15px", marginBottom:"10px",textTransform:"capitalize"}}>{MainStore.user.firstname +" "+ MainStore.user.lastname}, <br/></p>
       <p style = {{color : "black", fontWeight: "500", fontSize: "16px", marginBottom:"10px"}}>Oturduğunuz Masa: {MainStore.user.seatNum}</p>
       <p style = {{color : "black", fontWeight: "500", fontSize: "16px", marginBottom:"10px"}}>
          Oturduğunuz Saat: {hour}:{minute}
      </p>
      <button className = "text-white font-bold py-2 px-4 rounded-full" style=  {{borderRadius: "12px",outline:"none", backgroundColor: "red"}} onClick = {(e)=>{console.log(MainStore.user.seatNum);
          this.handleUnhold(MainStore.user.email,MainStore.user.seatNum);
        }}> Masadan Kalk </button>
    </div>)
  }
  else if(!isSelected){ //when no seat is selected yet
    return (
    <div>
      <p style = {{color : "black", fontWeight: "500", fontSize: "24px", marginTop: "55px",textTransform:"capitalize"}}>{MainStore.user.firstname +" "+ MainStore.user.lastname}</p>
       <p style = {{color : "black", fontWeight: "500", fontSize: "16px"}}>bir masa seç!</p>
     </div>)
  }
  else if(isSelected===1){ // when a seat is clicked
    return (<div>
      <p style = {{color : "black", fontWeight: "500", fontSize: "24px", marginTop: "25px", marginBottom:"10px",textTransform:"capitalize"}}> {MainStore.user.firstname +" "+ MainStore.user.lastname}, <br/></p>
       <p style = {{color : "black", fontWeight: "500", fontSize: "16px", marginBottom: "20px"}}> Seçilecek Masa: {selectedDesk} </p>
       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-red-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name = "libpassword" placeholder = "Kütüphane Şifresi" value = {this.state.libpassword} onChange={(event) => this.setState({libpassword:event.target.value})} required/>
      <button className = "text-white font-bold py-2 px-4 rounded-full" style=  {{borderRadius: "12px",outline:"none", backgroundColor: "red"}} onClick = {(e)=>{
          console.log("hold's body: ",MainStore.library.seatCollectionName,MainStore.library.libName, this.state.libpassword, this.state.group,this.state);

           this.handleHold(localStorage.getItem('email'),this.state.selectedDesk);
           }}> Seç </button>
     </div>)
  }

}




})
export default Seat
