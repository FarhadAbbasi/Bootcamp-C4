import React, { useState } from "react";
//import './Room.css';


function Room() {
  let state = useState(false) ;
  let isLit = state[0] ;
  let setLit = state[1] ;

  function UpdateLit() {
    console.log ("Button Clicked");
    setLit(!isLit) ; 
  }

 // console.log("State f = ", state) ;  

  return (
    <div> 
          This Room is  {isLit? "Lit" : "Dark" } <br/> 
        <button onClick={UpdateLit} color ="#DDD">Toggle Light </button>
    </div>
  );
}

export default Room;
