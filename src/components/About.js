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
            elements.forEach((element, index) => {
              const delay = index * 200;
              setTimeout(() => {
                element.classList.add('animate-fade-up');
              }, delay);
            });
          } else {
            elements.forEach(element => {
              element.classList.remove('animate-fade-up');
            });
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 text-center">
            <small className="who-i-am text-uppercase d-block">Who AM I</small>
            <h1 className="about-title">(HE/HIM)</h1>
            <p className="about-subtitle mx-auto">
              I'm a Full Stack Developer dedicated to empowering others to turn their tech dreams into reality.
            </p>
            <p className="about-description mx-auto mt-4">
              I'm a full-stack developer who loves turning ideas into fully functional websites and applications.
              Whether it's building a sleek front-end or ensuring the back-end runs like a well-oiled machine,
              I thrive on bringing concepts to life online. When I'm not coding, you'll probably find me playing music—
              it's my favorite way to unwind and fuel my creativity. From tech to tunes, I like to keep things dynamic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;