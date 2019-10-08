import React from "react";

const SpecialButtons = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="specialButtons"> 
      <span>
        {props.specials}
      </span>
      </button>

    </>
  );
};
export default SpecialButtons