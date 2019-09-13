import React from "react"; 
import styled from "styled-components";

const Container = styled.div`
    box-sizing: border-box;
    background: black;
    color: yellow
    width: 220px;
    text-align: left;
    font-size: 1.15rem;
    height: 350px;
    padding: 10px 20px;
    margin: 20px;
    border: 3px navy solid;
    border-radius: 20px;
`

function StarWarsCard(props){
    const {name, height, weight, hair, skin, eye} = props;

    return(
        <div>
            <Container>
                <h2>{name}</h2>
                <p><span>Height: </span>{height}cm</p>
                <p><span>Weight: </span>{weight}kg</p>
                <p><span>Hair: </span>{hair}</p>
                <p><span>Skin: </span>{skin}</p>
                <p><span>Eye: </span>{eye}</p>
            </Container>
        </div>
    )
}

export default StarWarsCard; 