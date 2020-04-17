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
  const starwarsInitURL = "https://swapi.py4e.com/api/people/"

  const [starwarsURL, setStarwarsURL] = useState("")
  const [page, setPage] = useState(1)
  const [characters, setCharacters] = useState([])

  const pageAlert = document.createElement("p")
  pageAlert.style.color = "white"

  useEffect(()=>{
    axios.get(starwarsInitURL)
      .then(res =>{
        // console.log(res.data)
        setCharacters(res.data.results)
      })
      .catch(err =>{
        console.log(err)
      })

  }, [])

  useEffect(()=>{
    axios.get(starwarsURL)
    .then(res =>{
      console.log("changed")
      console.log(starwarsURL)
      console.log(res.data.results)
      if(starwarsURL !=""){
        console.log("not empty")
        setCharacters(res.data.results)
      }
    })
    .catch(err =>{
      console.log(err)
    })
  },[starwarsURL])

  const Previous = event =>{
    // console.log("prev")
    // console.log(page)
    if(page > 1){
      setPage(page-1)
      setStarwarsURL(`${starwarsInitURL}?page=${page-1}`)
      pageAlert.style.display = "none"
    }else{
      prevAlert()
    }
  }

  const Next = event =>{
    // console.log("next")
    // console.log(page)
    if(page < 9){
      setPage(page+1)
      setStarwarsURL(`${starwarsInitURL}?page=${page+1}`)
      pageAlert.style.display = "none"
    }else{
      nextAlert()
    }
  }

  function prevAlert(){

    const card = document.querySelector(".card")

    card.insertAdjacentElement('beforebegin', pageAlert)

    pageAlert.textContent = "This is the first page!"
    return card
  }

  function nextAlert(){

    const card = document.querySelector(".card")

    card.insertAdjacentElement('beforebegin', pageAlert)

    pageAlert.textContent = "This is the last page!"
    return card
  }

  const StyledCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-family: 'Poller One', cursive;
  `;

  const StyledApp = styled.div`
    button{
      margin: auto 10px;
    }

    .pagenumber{
      color: white;
    }
  `;

  return (
    <StyledApp className="App">
      <h1 className="Header">Characters</h1>
      <button onClick={Previous}>Previous Page</button>
      <button onClick={Next}>Next Page</button>
      <p className="pagenumber">Page: {page}</p>
      <StyledCard className="card">
      {
        characters.map((character, index) =>
          <Character key={index} spec={character}/> 
        )
      }
      </StyledCard>
    </StyledApp>
  );
}

export default App;
