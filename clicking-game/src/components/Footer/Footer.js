import React from "react";
import "./Footer.css";

var style = {
    backgroundColor: "rgb(80, 111, 223)",
    borderTop: "5px solid rgb(19, 19, 130)",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "80px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            <div className="title"></div>
            <div style={phantom} />
            <div style={style}>&#169; by Ismael Rivera
                { children }
            </div>
        </div>
    )
}

export default Footer