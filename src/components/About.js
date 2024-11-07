import React from 'react';
import './About.css'

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container py-5 d-flex flex-column align-items-center text-center">
        <small className="text-uppercase who-i-am">Who AM I</small>
        <h1 className="about-title my-3">(HE/HIM)</h1>
        <p className="about-subtitle">
          I am a Full Stack Developer who's passionate about helping people achieve their health and fitness goals.
        </p>
        <p className="about-description mt-4">
          I'm a full-stack developer who loves turning ideas into fully functional websites and applications. 
          Whether it's building a sleek front-end or ensuring the back-end runs like a well-oiled machine,
          I thrive on bringing concepts to life online. When I'm not coding, you'll probably find me playing music—
          it's my favorite way to unwind and fuel my creativity. From tech to tunes, I like to keep things dynamic.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;