// App.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Loader from './components/Loader';
import Navbar from './components/Navbar.js';
import About from './components/About.js'
import ProfileCard from './components/ProfileCard';
import Skills from './components/Skills.js'
import Experience from './components/Experince.js'
import Reviews from './components/Reviews.js';
import ConnectWithMe from './components/ConnectWithMe.js';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <div className="main-content">
        <section id="home" className="section">
          <ProfileCard />
        </section>
        <section id="About" className="section">
          <About />
        </section>
        <section id="Skills" className="section">
          <Skills />
        </section>
        <section id="Experience" className="section">
          <Experience />
        </section>
        <section id="Reviews" className="section">
          <Reviews />
        </section>
        <section id="Connect" className="section">
          <ConnectWithMe />
        </section>
      </div>
    </div>
  );
}

export default App;