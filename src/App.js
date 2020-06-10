import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Stdid from './Stdid.js';
import Stdname from './Stdname.js';



function App() {
  return (
    <div className="App">

    <h1 className="h1m">Welcome To Students Data</h1> 
    <hr className="l1"/>

      <Stdid stdid="1" ></  Stdid>
      <Stdname stname="Aamir pinger" ></  Stdname>

      <hr className="l2"/>
      <Stdid stdid="2" ></  Stdid>
      <Stdname stname="Muhammad Mohsin " ></  Stdname>
     
      <hr className="l2"/>
      <Stdid stdid="3" ></  Stdid>
      <Stdname stname="Bashir Aziz" ></  Stdname>

      <hr className="l2"/>
      <Stdid stdid="4" ></  Stdid>
      <Stdname stname="Sheikh Ameen" ></  Stdname>
      
      
      <hr className="l2"/>
      <Stdid stdid="5" ></  Stdid>
      <Stdname stname="Muhammad Zubair Minhas" ></  Stdname>
      
     
      
  
     


      
      
    </div>
  );
}

export default App;
