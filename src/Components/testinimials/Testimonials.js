import React from 'react';
import './testimonials.css';
import profile1 from '../../Assets/Images/profile1.svg'
import profile2 from '../../Assets/Images/profile2.svg'
import profile3 from '../../Assets/Images/profile3.svg'
import profile4 from '../../Assets/Images/profile4.svg'




const testimonialsData = [
  {
    name: "Prateek Gupta",
    rating: 5,
    comment: "Stress-free travel thanks to Travlog. They took care of everything and I had a blast. 5 stars!",
    image: profile1
  },
  {
    name: "Vikit Varma",
    rating: 5,
    comment: "Amazing experience! They helped plan my dream vacation and everything went smoothly. Highly recommend!",
    image: profile2
  },
  {
    name: "Annette Black",
    rating: 5,
    comment: "It's an amazing experience to be able to vacation to a new place, thank you Odesceo",
    image: profile3
  },
  {
    name: "Kathryn Murphy",
    rating: 5,
    comment: "At first I was lazy but that thought disappeared after being accompanied by a pleasant guide",
    image: profile4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h4>TESTIMONIALS</h4>
        <h2>Contact Us To Review Your Experience With Us</h2>
        <p>Give us feedback and let us know what experiences you had while on vacation with us</p>
      </div>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-comment">{testimonial.comment}</p>
            <div className="testimonial-footer">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <div className="testimonial-info">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonials-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default TestimonialsSection;