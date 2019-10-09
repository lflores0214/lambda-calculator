  
import React from "react";
import { numbers } from "../../../data"

const NumberButtons = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      
      
      <button className="numberButton"
      onClick={() => props.displayNums(props.numbers)}> 
      <span>
        {props.numbers}
      </span>
      </button>
      
      
    </>
  );
};
export default NumberButtons