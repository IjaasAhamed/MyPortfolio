import './NotFound.css';
import errorImg from './img/astronaut.png';
import TargetCursor from './TargetCursor.js';

const NotFound = () => {
  return (
    <>
      <TargetCursor
        spinDuration={0}
        hideDefaultCursor={true}
      />
      <div className="not-found-container">
        <div className="not-found-content">
          <img src={errorImg} className='astronaut-image' alt="Lost Astronaut" />
          <h1>Oops! 404 Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <p>The project is currently offline, and its live version is temporarily unavailable.</p>
          <a href="/">
            <button className="btntrans mt-4 cursor-target">← Back to Portfolio</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
