import React from "react";
import "./ButtonSection.css";

const ButtonSection = ({ socialLinks }) => {
  if (!socialLinks || socialLinks.length === 0) { 
    return <div className="no-links">No social links available</div>; 
  }

  return (
    <div className="button-section"> 
      {socialLinks.map((socialLink) => (
        <button
          className="social-button" 
          key={socialLink.name}
          onClick={() => window.open(socialLink.url, "_blank")} 
        >
          {socialLink.icon && ( 
            <img 
              src={socialLink.icon} 
              alt={`${socialLink.name} icon`} 
              className="icon"
            />
          )}
          {socialLink.name} 
        </button>
      ))}
    </div>
  );
};

export default ButtonSection;
