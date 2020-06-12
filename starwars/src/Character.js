import React from 'react';
import styled, {css} from 'styled-components';


const CharacterContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 30px;
  border-radius: 5px;
  margin: 20px 0;
  color: white;
`;

const CharacterName = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 30px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: .8rem;
  font-weight: 600;
  color: white;
  letter-spacing: 1.5px;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 5px;
`;

const CharacterInfo = styled.div`

`;

const Hr = styled.hr`
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const CharacterP = styled.p`
  font-size: 1.2rem;
  font-family: 'Source Code Pro', monospace;
`;


const Character = ({ info }) => {

  return (
    <CharacterContainer>
      <CharacterName>
        <h1>{info.name}</h1>
        <Button>Info</Button>
      </CharacterName>

      <CharacterInfo>
        <Hr />
        <CharacterP>Birth Year: {info.birth_year}</CharacterP>
        <CharacterP>Height: {info.height}</CharacterP>
        <CharacterP>Mass: {info.mass}</CharacterP>
        <CharacterP>Hair Color: {info.hair_color}</CharacterP>
        <CharacterP>Skin Color: {info.skin_color}</CharacterP>
        <CharacterP>Eye Color: {info.eye_color}</CharacterP>
        <CharacterP>Gender: {info.gender}</CharacterP>
      </CharacterInfo>
    </CharacterContainer>
  );
}


export default Character;