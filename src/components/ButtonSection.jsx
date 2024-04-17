import React from "react";
import "./ButtonSection.css";

const ButtonSection = ({ links }) => {
  console.log(links);
  return (
    <div className="ButtonSectionContainer">
      <div className="ButtonContainer">
        {links.map((link) => (
          <button key={link.name}>{link.name}</button>
        ))}
      </div>
    </div>
  );
};

export default ButtonSection;
