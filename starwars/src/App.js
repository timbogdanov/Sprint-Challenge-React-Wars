import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './Character';
import axios from 'axios';

const App = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(response => {
      const data = (response.data.results);
      setCharacters(data)
    })
  }, [])



  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(character => {
          return <Character key={Math.random()} info={character} />
        })
      }
    </div>
  );
}

export default App;
