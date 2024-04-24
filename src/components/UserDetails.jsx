import React from 'react';
import './UserDetails.css';

const UserDetails = ({ character }) => {
  const getStatusClass = (status) => {
    const statusMap = {
      Alive: 'status-alive',
      Dead: 'status-dead',
      unknown: 'status-unknown'
    };
    return statusMap[status] || 'status-default';
  };

  return (
    <div className="user-details">
      <div className="user-avatar">
        <img
          src={character.image}
          alt={`Avatar of ${character.name}`}
          className="avatar-image"
        />
      </div>
      <div className="user-info">
        <h1 className="user-name">{character.name}</h1>
        <div className={`status-indicator ${getStatusClass(character.status)}`}>
          <span className="status-dot"></span>
          <span className="status-text">
            {character.status} - {character.species}
          </span>
        </div>
        <div className="additional-info">
          <h3 className="info-title">Location:</h3>
          <p className="location-name">{character.location.name}</p>
          <h3 className="info-title">First appearance:</h3>
          <p className="first-appearance">{character.type}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

