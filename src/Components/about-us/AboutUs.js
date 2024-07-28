import React from 'react';
import './aboutUs.css';
import travel from "../../Assets/Images/travel.png";
import img1 from '../../Assets/Images/img1.svg';
import img2 from '../../Assets/Images/img2.svg';
import img3 from '../../Assets/Images/img3.svg';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-content">
        <div className="content-left">
          <h4>ABOUT US</h4>
          <h2>Craft Your Dream Vacation With Us</h2>
          <p>We excel in curating remarkable journeys, specializing in outdoor destinations around the globe. With a wealth of experience, we bring adventures to life and invite you to embark on your own. The call of nature awaits—begin your adventure today!</p>
          <div className="stats">
            <div className="stat-item">
              <h3>100+</h3>
              <p>Outdoor Destinations</p>
            </div>
            <div className="stat-item">
              <h3>99%</h3>
              <p>Customer Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="">
            <img src={travel} alt="Excited traveler" />
            <div className="customer-count">
              <span className="icon">📶</span>
              <span>5000+ Customers</span>
            </div>
            <div className="tag best-fun">Best Fun</div>
            <div className="tag best-adventures">Best Adventures</div>
          </div>
        </div>
      </div>

      <div className="trusted-partner">
        <div className="partner-content">
          <div className="image-gallery">
            <div className="image-container main">
              <img src={img1} alt="Traveler overlooking a white city" />
            </div>
            <div className="image-container secondary">
              <img src={img2} alt="Rock formation in the sea" />
            </div>
            <div className="image-container tertiary">
              <img src={img3} alt="Group of travelers" />
            </div>
          </div>
          <div className="content-right">
            <h4>WHAT WE ARE</h4>
            <h2>Your Trusted Partner For Curating Unforgettable Experiences</h2>
            <ul>
              <li>Traviag is a boutique travel agency specializing in crafting bespoke itineraries for winter enthusiasts. We take pride in our in-depth knowledge of premier winter destinations around the globe, from renowned ski resorts to hidden-gem villages.</li>
              <li>Our team of experienced travel consultants possesses a deep passion for winter travel. They leverage their expertise to meticulously plan every aspect of your journey, ensuring seamless execution and exceptional service. Whether you envision exhilarating Alpine adventures or charming escapes nestled amongst snowy landscapes, Traviag caters to your specific desires.</li>
              <li>Let us transform your winter dreams into reality. Contact Traviag today and embark on an unforgettable journey filled with the magic of winter.</li>
            </ul>
            <button className="cta-button">LET'S CREATE MEMORIES</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;