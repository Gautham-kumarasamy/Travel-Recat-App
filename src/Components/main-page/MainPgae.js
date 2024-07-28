// import React from 'react';
// import "./main.css"


// const Hero = () => {
//   return (
//     <div className='app'>
//             <div className="overlay">

//     <div className="hero">
//       <h1>TRAVELLING AROUND THE WORLD</h1>
//       <p>
//         Turn frosty fantasies into reality with Travlog. Our curated itineraries or custom escapes
//         let you experience everything from charming snow lodges to awe-inspiring glaciers.
//         Let's craft your perfect winter adventure!
//       </p>
//     </div>
//     </div>

//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import './main.css';

const Hero = () => {
  return (
    <header className="header">
      <div className="overlay">
        <nav className="navbar">
          <div className="logo">Travlog</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
          <button className="contact-btn">CONTACT US</button>
        </nav>
        <div className="hero">
          <h1>TRAVELLING AROUND THE WORLD</h1>
          <p>
            Turn frosty fantasies into reality with Travlog. Our curated itineraries or custom escapes
            let you experience everything from charming snow lodges to awe-inspiring glaciers.
            Let's craft your perfect winter adventure!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;