import React, { useEffect, useRef } from 'react';
import './About.css';

const AboutSection = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const elements = entry.target.querySelectorAll(
            '.who-i-am, .about-title, .pronouns, .about-subtitle, .about-description'
          );

          if (entry.isIntersecting) {
            // Add animation classes with delays when entering viewport
            elements.forEach((element, index) => {
              const delay = index * 200;
              setTimeout(() => {
                element.classList.add('animate-fade-up');
              }, delay);
            });
          } else {
            // Remove animation classes when leaving viewport
            elements.forEach(element => {
              element.classList.remove('animate-fade-up');
            });
          }
        });
      },
      {
        threshold: 0.2 // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
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