import React from 'react';
import './NotFound.css'; 
import errorImg from './img/astronaut.png';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <img src={errorImg} className='astronaut-image' alt="Lost Astronaut" />
        <h1>Oops! 404 Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>The project is offline, currently the project is not hosted in online.</p>
      </div>
    </div>
  );
};

export default NotFound;
