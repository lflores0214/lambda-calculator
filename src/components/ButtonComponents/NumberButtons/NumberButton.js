  
import React from "react";

const NumberButtons = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      
      
      <button className="numberButton" > 
      <span>
        {props.numbers}
      </span>
      </button>
      
      
    </>
  );
};
export default NumberButtons