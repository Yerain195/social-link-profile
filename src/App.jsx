import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

function generateRandomNumbers() {
  const numbers = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 857));
  }
  return numbers;
}

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const randomCharacterIds = generateRandomNumbers();
        const promises = randomCharacterIds.map(async (id) => {
          const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
          const data = await response.json();
          return data;
        });
        const charactersData = await Promise.all(promises);
        setCharacters(charactersData);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="container">
      <h1>Rick and Morty Characters</h1>
      <div className="card-container">
        {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default App;



