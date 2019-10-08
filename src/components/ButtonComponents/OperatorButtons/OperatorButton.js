import React from "react";

const OperatorButtons = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="operatorButtons"> 
      <span>
        {props.operators.char}
      </span>
      </button>

    </>
  );
};
export default OperatorButtons
