import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const imageUrl = 'https://photos.bringfido.com/resources/8/3/4/39438/39438_137633.jpg?size=tile&density=2x';

  return (
    <div style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', height: '100vh', position: 'relative' }}>
      <h1
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          color: '#fff',
          textShadow: '1px 1px 2px #000',
          fontSize: '3rem',
          margin: '0',
        }}
      >
        Welcome To Doggy Daycare!
      </h1>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#fff',
          fontSize: '1.5rem',
        }}
      >
        <Link to="/home" style={{ textDecoration: 'none', color: '#000000' }}>
          
            <h5>
           &rarr; Press the button and check if dog is at daycare!
           </h5>
        
         
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
