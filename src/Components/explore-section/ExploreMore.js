import React from 'react';
import './explore.css';
import { FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';

const ExploreSection = () => {
  return (
    <div className="explore-container">
      <h2>Let's Explore! Start Building Your Trip Now.</h2>
      <p>
        Discover curated adventures for every taste and budget.<br />
        Connect with a travel expert and plan your perfect escape.
      </p>
      <div className="email-input">
        <input type="email" placeholder="Enter Your email address" />
        <button type="submit">
          <FaPaperPlane />
        </button>
      </div>
      <div className="decorative-elements">
        <FaPaperPlane className="plane-icon" />
        <div className="dotted-line"></div>
        <FaMapMarkerAlt className="marker-icon" />
      </div>
    </div>
  );
}

export default ExploreSection;