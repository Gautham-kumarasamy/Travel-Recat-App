import React from 'react';
import './tour-gallery.css';
import figure1 from '../../Assets/Images/Figure1.svg'
import figure2 from '../../Assets/Images/Figure2.svg'
import figure3 from '../../Assets/Images/Figure3.svg'

const TourGallery = () => {
  return (
    <section className="tour-gallery">
      <h4 className="gallery-heading">OUR TOUR GALLERY</h4>
      <div className="gallery-content">
        <div className="gallery-left">
          <div className="gallery-text">
            <h2>Best Traveler's Shared Photos</h2>
            <p>
              Dreaming of a wonderland?<br />
              Dive into our gallery and discover the magic of Travlog.<br />
              Sparkling sculptures, charming towns, and endless fun - it's all<br />
              here! Get inspired for your next adventure.
            </p>
          </div>
          <img src={figure2} alt="Glacier climbing" className="bottom-left-image" />
        </div>
        <div className="gallery-grid">
          <img src={figure1} alt="Snowboarder" className="large-image" />
          <img src={figure3} alt="Glacier climbing" className="medium-image" />
          <img src={figure3} alt="Winter couple" className="small-image" />
          <div className="more-photos">
            <span>50+</span>
            <span>MORE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourGallery;