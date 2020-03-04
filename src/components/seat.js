import React, { Component } from 'react';
import '../App.css';
import Lessons from './lessons';
import Footer from './footer';
import Header from './header';
class Seat extends Component {
render(){
  return(
    <div className="frame">
      <Header />
      <div id = "leaderboard">
        <ol> <h1 style={{fontSize:"36px",textShadow: "-1px 0 #F1F3F4, 0 1px #F1F3F4, 1px 0 #F1F3F4, 0 -1px #F1F3F4"}}>Leaderboard</h1>
        <li style={{fontSize:"24px",textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 1px black",color:"white"}}>Ufuk Yağmur</li><br/>
        <li style={{fontSize:"24px",textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 1px black",color:"white"}}>Mustafa Gilli</li><br/>
        <li style={{fontSize:"24px",textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 1px black",color:"white"}}>Başar Özsaraç</li><br/>
        <li style={{fontSize:"24px",textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 1px black",color:"white"}}>Baki Depe</li><br/>
        <li style={{fontSize:"24px",textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 1px black",color:"white"}}>Cenk Arda Yılmaz</li><br/>
        </ol>
      </div>
      <Lessons />
      <Footer />
    </div>
  )
}
}
export default Seat
