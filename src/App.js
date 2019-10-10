import React from "react";
import "./App.css";
import PhotoList from './PhotoList';
import axios from 'axios';
import styled, {keyframes} from 'styled-components';

export const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;
export const Rocket = styled.div`
  margin: 2%;
  animation: ${rotate} 10s linear infinite;
`;

// export const morph = keyframes`
//   0% {border-radius: 5px;}
//   50% {border-radius: 5px;}
//   100% {border-radius: 5px;}
// `;
export const Star = styled.div`
  animation: ${rotate} 5s linear infinite;
  margin: 2%;
`;

export const move = keyframes`
  0%   {left:0px; top:0px;}
  25%  {left:200px; top:0px;}
  50%  {left:200px; top:200px;}
  75%  {left:0px; top:200px;}
  100% {left:0px; top:0px;}
`;
export const Launch = styled.div`
  animation: ${move} 5s linear infinite;
`

// ⭐

function App() {
  return (
    <div className="App">
      <p className='page-title'>
        Astronomy Picture of the Day!<a href="https://www.nasa.gov/multimedia/imagegallery/iotd.html"><Rocket>🚀</Rocket></a>
      </p>
      <div className='photo-container'>
        <PhotoList />
      </div>
    </div>
  );
}

export default App;
