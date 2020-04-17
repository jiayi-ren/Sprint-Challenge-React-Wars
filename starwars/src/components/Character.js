// Write your Character component here
import React, {useState} from 'react';
import styled from 'styled-components';

const Character = props =>{

    console.log(props.spec)

    const StyledCharacter = styled.div`
        background-color: white;
        border: 2px solid black;
        margin: 10px 30px;
        width: 30%;
    `;

    return (
        <StyledCharacter>
            <p>Name: {props.spec.name}</p>
            <p>Height: {props.spec.height}</p>
            <p>Mass: {props.spec.mass}</p>
            <p>Birth Year: {props.spec.birth_year}</p>
            <p>Gender: {props.spec.gender}</p>
        </StyledCharacter>
    )
};

export default Character;