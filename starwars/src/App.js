import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './App.css';
import Character from './components/Character.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const starwarsURL = "https://swapi.py4e.com/api/people/"
  const [characters, setCharacters] = useState([])

  useEffect(()=>{
    axios.get(starwarsURL)
      .then(res =>{
        // console.log(res.data)
        setCharacters(res.data.results)
      })
      .catch(err =>{
        console.log(err)
      })

  }, [])

  const StyledCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledCard>
      {
        characters.map((character, index) =>{
          console.log(character)
          return <Character key={index} spec={character}/> 
        })
      }
      </StyledCard>
    </div>
  );
}

export default App;
