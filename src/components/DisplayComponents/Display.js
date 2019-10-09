import React, {useState} from "react";


const Display = (props) => {


  return <div className="display">
  {/* Display any props data here */}
  <span className="displayContent" >{props.displayNum}</span>
  </div>;
};
export default Display