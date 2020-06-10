import React from 'react';
import './std.css';
import Batch from './Batch.js'


function Stdname(props) {
  return (
    
      <div>
      {/* <h1>Today we are serving {props.dishName}</h1> */}

  <h1 id="sname">Students Name :  {props.stname}</h1>
  <Batch btch="2k18"></Batch>
  
      
        
        
    
      
    </div>
  )
}

export default Stdname;
