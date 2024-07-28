import React from "react";
import "./packages.css";
import image1 from "../../Assets/Images/Image (1).png";
import image2 from "../../Assets/Images/Image (2).png";
import image3 from "../../Assets/Images/Image (3).svg";
import image4 from "../../Assets/Images/Image (4).svg";
import image5 from "../../Assets/Images/Image (5).svg";
import image6 from "../../Assets/Images/Image (6).svg";
import image7 from "../../Assets/Images/Image (1).png";
import image8 from "../../Assets/Images/Image (1).svg";
import image9 from "../../Assets/Images/2nd.svg";

const PackageCard = ({ image, location, rating, name, duration, price }) => (
  <div className="package-card">
    <img src={image} alt={name} className="package-image" />
    <div className="package-info">
      <div className="location-rating">
        <span className="location">📍 {location}</span>
        <span className="rating">⭐ {rating}</span>
      </div>
      <h3>{name}</h3>
      <p>{duration}</p>
      <div className="price-book">
        <span className="price">{price}$</span>
        <button className="book-now">BOOK NOW →</button>
      </div>
    </div>
  </div>
);

const Packages = () => {
  const packages = [
    {
      image: image8,
      location: "Maldives",
      rating: 4.7,
      name: "Hurawalhi Island",
      duration: "7 Days Tour on 2 person",
      price: 620,
    },
    {
      image: image9,
      location: "Indonesia",
      rating: 4.7,
      name: "Bali Province",
      duration: "4 days 2 person",
      price: 780,
    },
    {
      image: image7,
      location: "Spain",
      rating: 4.7,
      name: "Barcelona city beach",
      duration: "4 days 4 person",
      price: 850,
    },
    {
      image: image2,
      location: "Maldives",
      rating: 4.7,
      name: "Hurawalhi Island",
      duration: "7 Days Tour on 2 person",
      price: 620,
    },
    {
      image: image3,
      location: "Canada",
      rating: 4.7,
      name: "St. John's",
      duration: "7 Days Tour on 2 person",
      price: 620,
    },
    {
      image: image4,
      location: "Maldives",
      rating: 4.7,
      name: "Machu Picchu",
      duration: "7 Days Tour on 2 person",
      price: 820,
    },
    {
      image: image5,
      location: "French",
      rating: 4.7,
      name: "Bora Bora Island",
      duration: "7 Days Tour on 2 person",
      price: 550,
    },
    {
      image: image6,
      location: "Australia",
      rating: 4.7,
      name: "Sydney Opera House",
      duration: "7 Days Tour on 2 person",
      price: 310,
    },
  ];

  return (
    <section className="packages">
      <h4>PACKAGES</h4>
      <h2>Unforgettable Journeys Await:</h2>
      <h2>Explore Our Curated Travel Packages</h2>
      <p>Discover the world with our expertly designed getaways.</p>
      <p>From beach bliss to cultural adventures, find your perfect escape.</p>
      <p>Browse or customize - let's make it happen!</p>
      <div className="package-grid">
        {packages.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
    </section>
  );
};

export default Packages;
