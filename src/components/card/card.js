import React from "react";
import "./card.css";

function Card(props) {
  return (
  <div className="projectCard">
    <a href={props.link} target="_blank" rel="noreferrer noopener" ><img src={props.img} alt={props.name} className="projImg"/><br />
    {props.name}</a>
  </div>);
}

export default Card;
