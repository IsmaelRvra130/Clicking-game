import React from "react";
import "./Wrapper.css";

// Function creating the Wrapper.


function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}
export default Wrapper;