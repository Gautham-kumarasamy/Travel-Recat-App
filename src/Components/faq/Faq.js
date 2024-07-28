import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "How to pay an online travel reservation ?", answer: "Will specify the damages..." },
    { question: "Which currency do we accept in your agency ?", answer: "We accept various currencies..." },
    { question: "How can you become your external partner ?", answer: "To become an external partner..." },
    { question: "How to become a VIP customer in your agency ?", answer: "To become a VIP customer..." },
    { question: "How can I change my money for my next holiday ?", answer: "To change your money..." },
    { question: "Do you have any affiliate program for children ?", answer: "We do have an affiliate program..." }
  ];

  return (
    <div className="faq-container">
      <div className="faq-left">
        <div className="faq-title">
          <span className="blue-line"></span>FAQ's
        </div>
        <h3>Frequently Asked Questions</h3>
        <p>Since 2018, we've helped more than 500,000 people of all ages enjoy the best outdoor experience of their lives....</p>
        <button className="contact-button">Contact Us</button>
      </div>
      <div className="faq-right">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div 
              className={`faq-question ${activeIndex === index ? 'active' : ''}`} 
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? '▲' : '▼'}</span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
