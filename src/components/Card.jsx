import React from "react";
import UserDetails from "./UserDetails";
import "./Card.css";

function Card(props) {
  const character = props.character;

  return (
    <div className="CardContainer">
      <UserDetails character={character} />
    </div>
  );
}

export default Card;
