import React, {useState, useEffect} from 'react';
import axios from "axios";
import StarWarsCard from "./components/LetsMakeAStarCard";
import styled from "styled-components";
import './App.css';

const Header = styled.h1`
  font-size: 4rem;
  // background: none;
  color: yellow;
  text-shadow: 1px 1px 5px black;
`
const StarWarsCardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`

const App = () => {
  const [char, setChar] = useState([])

  useEffect(()=> {
    axios
    .get('https://swapi.co/api/people/')
      .then(response =>{
        console.log(response);
        setChar(response.data.results);
      })

      .catch(err =>{
        console.log(err)
      })

  },[])

  return (
    <div className="App">
      <Header>React Wars</Header>
      <StarWarsCardDiv>
        {char.map(chars=>(
          <StarWarsCard name={chars.name} height={chars.height} weight={chars.mass} hair={chars.hair_color}  skin={chars.skin_color} eye={chars.eye_color}/>
        ))}
      </StarWarsCardDiv>
    </div>
  );
}

export default App;
