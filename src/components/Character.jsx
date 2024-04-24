import React from "react";
import "./Character.css";
import { NavLink } from "react-router-dom";

const CharacterCard = ({ character, episodes }) => {

  const getStatusClassName = () => {
    switch (character.status) {
      case "Alive":
        return "status-alive";
      case "Dead":
        return "status-dead";
      default:
        return "status-unknown";
    }
  };

  return (
    <div className="character-card">
      <div className="card-main">
        <img
          src={character.image}
          alt={`Avatar of ${character.name}`}
          className="character-avatar" 
        />
        <div className="character-status"> 
          <div className={`status-dot ${getStatusClassName()}`}></div> 
          <p>
            {character.status} - {character.species} 
          </p>
        </div>
        <p className="character-name">{character.name}</p> 
      </div>

      <div className="card-secondary">
        <p className="episode-title">Episodes:</p> 
        <div className="episode-list"> 
          {episodes.map((episode) => (
            <div key={episode.id} className="episode-item"> 
              <p>
                {episode.name} ({episode.episode}) 
              </p>
              <p>{new Date(episode.created).toLocaleDateString()}</p> 
            </div>
          ))}
        </div>
      </div>

      <NavLink to="/">
        <button className="button-home">Home</button>
      </NavLink>
    </div>
  );
};

export default CharacterCard;
