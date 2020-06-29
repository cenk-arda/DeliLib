import React, { Component } from 'react';
import Avatar from 'react-avatar';
import Personal from './personal';
import School from './school';
import LeftDiv from './leftdiv';
import Header from './header';
import Footer from './footer';

class User extends Component{
constructor(props){
  super(props);
 this.state = {
   view : true
 }
 this.switchSchool = this.switchSchool.bind(this);
 this.switchPersonal = this.switchPersonal.bind(this);

}

switchSchool(){
  this.setState({ view: false })
}

switchPersonal(){
  this.setState({ view: true })
}
  render(){

       if(this.state.view) {
       return(

        <div className = "frame">
          <Header />

             <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style ={{ marginTop:"22%", margin:"auto",outline:"none"}} onClick = {this.switchPersonal}>
             Personal
             </button>
           <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style ={{ margin:"auto", marginTop:"22%",outline:"none" }} onClick = {this.switchSchool}>
             School Info
             </button>

        <div className ="font-bold text-xl mb-2" style = {{
          width: "35%",
          margin:"auto",
          background : "white",
      }}>

           <Personal/>
          </div>
        <Footer/>
        </div>

      );
      }


       else{
        return(

    <div className = "frame">
                <Header />

                   <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"style ={{ marginTop:"22%", margin:"auto",outline:"none"}}onClick = {this.switchPersonal}>
                   Personal
                   </button>
                   <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" style ={{ marginTop:"22%", margin:"auto",outline:"none"}} onClick = {this.switchSchool}>
                   School Info
                   </button>

              <div className ="font-bold text-xl mb-2" style = {{
                     margin:"auto",
                     top:"30%",
                     width: "35%",
                     height: "30%",
                   background : "white",
                 }}>
                 <School/>
             </div>

               <Footer/>
       </div>

       );
      }
  }


}
export default User;
