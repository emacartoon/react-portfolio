import React from "react";
import "./knowledge.css";

function Know(props) {
  return (
    <div className="know">
      <h3>{props.abbrv}</h3>
      <div>{props.name}</div>
    </div>
  );
}

export default Know;
