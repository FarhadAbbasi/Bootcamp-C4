import React, { useState } from "react";
//import './Room.css';


function Room() {
  let state = useState(false) ;
  let isLit = state[0] ;
 // let setLit = state[1] ;

  function UpdateLit() {
    console.log ("Button Clicked");
    isLit = !isLit ; 
  }

 // console.log("State f = ", state) ;  

  return (
    <div> 
        THis Room is  {isLit? "Lit" : "Dark" } <br/>
        <button onClick={UpdateLit}>Toggle Light </button>
    </div>
  );
}

export default Room;
