import React from "react";
import "./UserDetails.css";

const UserDetails = (props) => {
  const character = props.character;

  return (
    <article className="Container">
      <div className="ImageContainer">
        <img
          className="Image"
          src={character.image}
          alt={`avatar de ${character.name}`}
        />
      </div>
      <header>
        <h1 className="Name">{character.name}</h1>
        <p className="Location">{character.location.name}</p>
      </header>
      <section>
        <p className="Description">
          {character.species}, STATUS: {character.status}
        </p>
      </section>
    </article>
  );
};

export default UserDetails;


