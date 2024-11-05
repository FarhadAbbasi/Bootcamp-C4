import React, { useState } from "react";
//import './Room.css';


function Room() {
  let state = useState(false) ;
  let isLit = state[0] ;
  let setLit = state[1] ;
  // console.log("State = ", state) ;  

  function UpdateLit() {
    console.log ("Lit Button Clicked");
    setLit(!isLit) ; 
  }

  let [age, setage] = useState(25) ;
  const UpdateAge = ()=> ( setage(--age + 2) )  //use curly bracket for multiple lines as usual

  let [level, setLevel] = useState(1) ;

  return (
    <div> 
          This Room is  {isLit? "Lit" : "Dark" } <br/>Age = {age} <br/>Level  = {level} <br/>
        <button onClick={UpdateLit} > Toggle Light </button> <span/>
        <button onClick={UpdateAge} > Increment Age </button> <span/>
        <button onClick={ ()=> setLevel(++level) }> Increment Level </button> <span/>
    </div>
  );
}

export default Room;
