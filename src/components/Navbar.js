// components/Navbar.js
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('.section');
      let currentSection = 'home';
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => scrollToSection('home')}
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'About' ? 'active' : ''}`}
                onClick={() => scrollToSection('About')}
                href="#About"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'Skills' ? 'active' : ''}`}
                onClick={() => scrollToSection('Skills')}
                href="#Skills"
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'Experience' ? 'active' : ''}`}
                onClick={() => scrollToSection('Experience')}
                href="#Experience"
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'Reviews' ? 'active' : ''}`}
                onClick={() => scrollToSection('Reviews')}
                href="#Reviews"
              >
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'Connect' ? 'active' : ''}`}
                onClick={() => scrollToSection('Connect')}
                href="#Connect"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;