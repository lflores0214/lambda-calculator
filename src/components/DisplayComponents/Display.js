import React, {useState} from "react";

const Display = (props) => {
const displayContent = useState(0)

  return <div className="display">
  {/* Display any props data here */}
  <span className="displayContent" >{displayContent}</span>
  </div>;
};
export default Display