import React, { Component } from 'react';
import '../App.css';

import { Link } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import axios from 'axios';
import MainStore from "./store";
import {observer} from "mobx-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import deliBuilding from './building.jpg'

const Libraries = observer(class Libraries extends Component {

    constructor(props){
      super(props);

      this.state = {
        chosen:{},
        show: 0,
        group: 1,
        date: null

      };

    }

    getUser = () => {
      let body = {
         email: localStorage.getItem('email')
      }
      axios.post(MainStore.uri+ "user/me", body, {
        headers: {
          token : MainStore.token
        }
      })
      .then(res=> {
        MainStore.user = res.data
      })
      .catch(err => {
        alert(JSON.stringify(err.response.data));
        alert("libraries component, getuser ")
      })
    }

    getLibraries = () => {
      axios.get(MainStore.uri + "library/all", {
        headers: {
          token: MainStore.token
        }
      })
      .then( res => {
        console.log(res.data[0].libName)
        MainStore.libraries = res.data
        console.log(MainStore.libraries)
      })
      .catch(err => {
        alert(JSON.stringify(err))
      })
    }




    componentDidMount(){
      MainStore.token =  localStorage.getItem('token');
      MainStore.email = localStorage.getItem('email');
      console.log("libraries didmount email: ",MainStore.email)
      console.log(MainStore.token)
      this.getUser()
      localStorage.setItem("email",MainStore.email)
      this.getLibraries()
      console.log(MainStore.libraries)
    }



getLibrary(library){
      let body = {
        group: library.groupNames[0],
        seatCollectionName: library.seatCollectionName

      }
      axios.post(MainStore.uri+"seat/all" ,body, {
        headers:{
          token: MainStore.token
        }
      })
      .then(res=>{

        MainStore.desks= res.data//lost
        MainStore.title = library.libName//lost

        localStorage.setItem('group',res.data)
        localStorage.setItem('title',library.libname)
        console.log(MainStore.desks,MainStore.title)
        console.log(MainStore.library)
        window.location.href = "/study"

      })
      .catch(err=>{
        alert(JSON.stringify(err.response.data))
      })
}



renderlibraries(){

  let showLibraries = MainStore.libraries.map(item => {
  if(1){
    return ((
      <div>
              <div  style = {{
            marginTop: '25px',
            maxWidth: '%50',
            borderRadius: 30}}
             >
                <div style={{objectFit:'contain',display:'block',position:'relative',textAlign:'center'}} >
                  <img src = {require("./building.jpg")} alt="logo" style = {{ margin:'auto',maxHeight:'50%',maxWidth:'50%', objectFit: 'cover'}}></img>
                  <div style={{margin:'auto',textAlign:'center'}}><FontAwesomeIcon icon={faUser} size = "2x" color = "green" />Sıra Sayısı:{item.seatCount}</div>

                {/*//push.state error:  <Link to={{ pathname:"/study", state: { library: item } }}>Click me</Link>*/}

                        <button type="submit" className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick = {() =>{
                             MainStore.library = item
                             localStorage.setItem('groupnames',JSON.stringify(item.groupNames))
                             alert(item.seatCollectionName)
                             localStorage.setItem('library', JSON.stringify(item));
                             alert(item.groupNames[0])
                             window.location.href = "/study"
                            //  this.getLibrary(item)

                            }} style= {{outline:"none", backgroundColor: "red"}}>Giriş</button>
               </div>

             </div>

             <p style={{textAlign:'center'}}>{item.libName}</p>
      </div>

    ))
  }

  else {
    alert(item);
    return ((<div><p>othing</p></div>))
  }

})
return showLibraries;
}


render(){

      return<div>{this.renderlibraries()}</div>
}
});


  export default Libraries;
