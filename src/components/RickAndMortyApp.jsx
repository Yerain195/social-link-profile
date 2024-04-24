import Character from "./Character";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const RickAndMortyApp = () => {
  const [character, setCharacter] = useState(null); 
  const [episodes, setEpisodes] = useState([]);
  const [searchParams] = useSearchParams(); 
  const characterId = searchParams.get("id");

  useEffect(() => {
    const fetchCharacter = async (id) => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        setCharacter(data);
        fetchRelatedEpisodes(data.episode.slice(0, 5)); 
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    if (characterId) {
      fetchCharacter(characterId);
    }
  }, [characterId]); 

  const fetchRelatedEpisodes = async (episodeUrls) => {
    try {
      const episodeData = await Promise.all(
        episodeUrls.map((url) => fetch(url).then((res) => res.json()))
      );
      setEpisodes(episodeData);
    } catch (error) {
      console.error("Error fetching episodes:", error);
    }
  };

  return (
    <div>
      {character ? ( 
        <Character character={character} episodes={episodes} /> 
      ) : (
        <p>Loading...</p> 
      )}
    </div>
  );
};

export default RickAndMortyApp;
