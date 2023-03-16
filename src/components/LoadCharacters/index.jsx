import React, { useState, useEffect } from "react";
import { CharactersCard } from "../Characters";

export const LoadCharacters = ({ count, setCount }) => {
  const [characters, setCharacters] = useState([]);

  const url = `https://rickandmortyapi.com/api/character?page=${count}`;

  useEffect(() => {
    async function fetchData() {
      const charactersData = await fetch(url);
      const { results } = await charactersData.json();
      setCharacters(results);
    }

    fetchData();
  }, [count]);

  useEffect(() => {
    let currentCount = parseInt(localStorage.getItem("count")) || 0;

    currentCount >= 42 ? (currentCount = 0) : "";

    const newCount = currentCount + 1;
    setCount(newCount);
    localStorage.setItem("count", newCount.toString());
  }, []);
  return <CharactersCard characters={characters} />;
};
