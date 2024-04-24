import React, { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
  const [characters, setCharacters] = useState([]); 

  useEffect(() => {
    const fetchCharacters = async () => {
      const allCharacters = [];
      let currentUrl = "https://rickandmortyapi.com/api/character";

      try {
        while (currentUrl) {
          const response = await fetch(currentUrl);
          const data = await response.json();

          allCharacters.push(...data.results);
          currentUrl = data.info.next; 
        }

        for (let i = allCharacters.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [allCharacters[i], allCharacters[j]] = [allCharacters[j], allCharacters[i]];
        }

        const tenRandomCharacters = allCharacters.slice(0, 10); 
        setCharacters(tenRandomCharacters); 
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []); 

  return (
    <div className="home-container"> 
      {characters.length > 0 ? (
        characters.map((char) => (
          <Card key={char.id} character={char} />
        ))
      ) : (
        <p>Loading characters...</p>
      )}
    </div>
  );
};

export default Home;
