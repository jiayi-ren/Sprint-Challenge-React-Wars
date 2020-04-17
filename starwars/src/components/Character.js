// Write your Character component here
import React, {useState} from 'react';
import styled from 'styled-components';

const Character = props =>{

    const StyledCharacter = styled.div`
        background-color: white;
        margin: 10px 15%;
        padding: 2px;
        width: 300px;

        div{
            border:10px solid grey;
        }

        p{
            margin:5px;
        }
    `;

    return (
        <StyledCharacter>
            <div>
            <p>Name: {props.spec.name}</p>
            <p>Height: {props.spec.height}</p>
            <p>Mass: {props.spec.mass}</p>
            <p>Birth Year: {props.spec.birth_year}</p>
            <p>Gender: {props.spec.gender}</p>
            </div>
        </StyledCharacter>
    )
};

export default Character;