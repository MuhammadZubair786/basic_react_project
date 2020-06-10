import React from 'react';


function Dinner(props) {
  return (
      <div>
      {/* <h1>Today we are serving {props.dishName}</h1> */}
      <input type="button" value="Submit" onClick="abc()"></input>
      <script>  
        function abc(){
          document.write("good")
        }
      </script>
    
      
    </div>
  )
}

export default Dinner;
