import React from "react";
import "./Wrapper.css";

// const Wrapper = props => <div className="Wrapper">{props.children}</div>;


function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}
export default Wrapper;