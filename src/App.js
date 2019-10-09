import React from "react";
import "./App.css";
import PhotoList from './PhotoList';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <p className='page-title'>
        Astronomy Picture of the Day <span role="img" aria-label="rocketship"><a href="https://www.nasa.gov/multimedia/imagegallery/iotd.html">🚀</a></span>!
      </p>
      <div className='photo-container'>
        <PhotoList />
      </div>
    </div>
  );
}

export default App;
