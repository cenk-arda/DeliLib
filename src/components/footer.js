import React, { Component } from 'react';
import '../App.css';


class Footer extends Component {
render(){
  return(
    <footer className = "text-center text-gray-200 text-sm" style={{position:"absolute",
    left:"0",
    bottom:"0", 
    right:"0"}}>
     &copy; Delilib & Udago. All rights reserved.
    </footer>
  )
}
}
export default Footer
