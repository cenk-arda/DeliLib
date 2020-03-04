import React, { Component } from 'react';
import '../App.css';
import Lessons from './lessons';
import Footer from './footer';
import Header from './header';
class Seat extends Component {
render(){
  return(
    <div>
      <Header />
      <div id = "leaderboard">
        <ol> <h1 style={{fontSize:"20px",textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"}}>Leaderboard</h1>
        <li>Ufuk Yağmur</li>
        <li>Mustafa Gilli</li>
        <li>Başar Özsaraç</li>
        <li>Baki Depe</li>
        <li>Cenk Arda Yılmaz</li>
        </ol>
      </div>
      <Lessons />
      <Footer />
    </div>
  )
}
}
export default Seat
