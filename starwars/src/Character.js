import React from 'react';
import styled from 'styled-components';


const Character = ({ info }) => {

  return (
    <div>
      <h1>{info.name}</h1>
      <p>Height: {info.height}</p>
    </div>
  );
}


export default Character;