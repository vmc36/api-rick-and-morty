import React, { useState, useEffect } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState();

  const url = `https://rickandmortyapi.com/api/character?page=${count}`;
  console.log(url);

  useEffect(() => {
    let currentCount = parseInt(localStorage.getItem("count")) || 0;

    currentCount >= 42 ? (currentCount = 0) : "";

    const newCount = currentCount + 1;
    setCount(newCount);
    localStorage.setItem("count", newCount.toString());
  }, []);

  useEffect(() => {
    async function fetchData() {
      const charactersData = await fetch(url);
      const { results } = await charactersData.json();
      setCharacters(results);
    }

    fetchData();
  }, [count]);

  return (
    <div className="grid h-full grid-cols-4 gap-2 p-10">
      {characters.map(({ id, name, image, status, species, origin }) => (
        <div key={id}>
          <img src={image} alt={name} />
          <h1>Name: {name}</h1>
          <h2>Life Status:{status}</h2>
          <p>Species: {species}</p>
          <p>Origin: {origin.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
