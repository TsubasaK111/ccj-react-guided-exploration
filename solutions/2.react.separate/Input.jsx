import React from "react";

function Input(props) {
  return (
    <input 
      type="text" 
      placeholder={props.placeHolder} 
      onChange={(e) => {
        props.update(e.target.value);
      }}
    ></input>
  )
}

export default Input;