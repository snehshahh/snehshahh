import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background on scroll
      setIsScrolled(window.scrollY > 50);

      // Detect active section based on scroll position
      const sections = document.querySelectorAll('.section');
      let currentSection = 'home';
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);

      // Add animation class to the active section
      sections.forEach(section => {
        if (section.id === currentSection) {
          section.classList.add('active-section');
        } else {
          section.classList.remove('active-section');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    // Scroll to the selected section
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Add animation class immediately to trigger animation
    element.classList.add('active-section');
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
            {['home', 'About', 'Skills', 'Experience', 'Education', 'Reviews', 'Connect'].map((sectionId) => (
              <li className="nav-item" key={sectionId}>
                <a 
                  className={`nav-link ${activeSection === sectionId ? 'active' : ''}`}
                  onClick={() => scrollToSection(sectionId)}
                  href={`#${sectionId}`}
                >
                  {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
