import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import About from './components/About.js';
import ProfileCard from './components/ProfileCard.js';
import Skills from './components/Skills.js';
import Experience from './components/Experince.js';
import Reviews from './components/Reviews';
import ConnectWithMe from './components/ConnectWithMe';
import Education from './components/Education';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsNavOpen(false);
    }
  };

  if (loading) {
    return (
      <div className="loader">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`navbar-collapse ${isNavOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button onClick={() => scrollToSection('profile')} className="nav-link">
                  Profile
                </button>
              </li>
              <li className="nav-item">
                <button onClick={() => scrollToSection('about')} className="nav-link">
                  About
                </button>
              </li>
              <li className="nav-item">
                <button onClick={() => scrollToSection('skills')} className="nav-link">
                  Skills
                </button>
              </li>
              <li className="nav-item">
                <button onClick={() => scrollToSection('experience')} className="nav-link">
                  Experience
                </button>
              </li>
              <li className="nav-item">
                <button onClick={() => scrollToSection('education')} className="nav-link">
                  Education
                </button>
              </li>
              <li className="nav-item">
                <button onClick={() => scrollToSection('reviews')} className="nav-link">
                  Reviews
                </button>
              </li>
              <li className="nav-item">
                <button onClick={() => scrollToSection('connect')} className="nav-link">
                  Connect
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <section id="profile" className="min-vh-100">
          <ProfileCard />
        </section>
        
        <section id="about" className="min-vh-100">
          <About />
        </section>
        
        <section id="skills" className="min-vh-100">
          <Skills />
        </section>
        
        <section id="experience" className="min-vh-100">
          <Experience />
        </section>
        
        <section id="education" className="min-vh-100">
          <Education />
        </section>
        
        <section id="reviews" className="min-vh-100">
          <Reviews />
        </section>
        
        <section id="connect" className="min-vh-100">
          <ConnectWithMe />
        </section>
      </main>
    </div>
  );
};

export default App;