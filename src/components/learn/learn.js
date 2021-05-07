import React from "react";
import "./learn.css";

function Learn(props) {
  return (
    <div className="learn">
      <h3>{props.abbrv}</h3>
      <div>{props.name}</div>
    </div>
  );
}

export default Learn;
