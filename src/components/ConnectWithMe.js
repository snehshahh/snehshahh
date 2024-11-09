import React, { useState, useEffect, useRef } from 'react';
import './Connect.css';
import Github from '../assets/github.svg';
import Twitter from '../assets/twitter.svg';
import Linkedin from '../assets/linkedin.svg';
import Resume from '../assets/SnehResume.pdf';

const ConnectWithMe = () => {
  const [downloadStatus, setDownloadStatus] = useState('');
  const connectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate the main container
            const container = entry.target;
            container.classList.add('animate-fade-up');

            // Animate title
            const title = container.querySelector('.connecttitle');
            setTimeout(() => {
              title.classList.add('animate-fade-up');
            }, 200);

            // Animate name
            const name = container.querySelector('h1:not(.connecttitle)');
            setTimeout(() => {
              name.classList.add('animate-fade-up');
            }, 400);

            // Animate contact info
            const contactInfo = container.querySelector('.contact-info');
            setTimeout(() => {
              contactInfo.classList.add('animate-fade-up');
            }, 600);

            // Animate resume section
            const resumeSection = container.querySelector('.resume-section');
            setTimeout(() => {
              resumeSection.classList.add('animate-fade-up');
            }, 800);

            // Animate social section container
            const socialContainer = container.querySelector('.social-icons-container');
            setTimeout(() => {
              socialContainer.classList.add('animate-fade-up');
            }, 1000);

            // Animate individual social icons with delay
            const socialIcons = container.querySelectorAll('.social-icon');
            socialIcons.forEach((icon, index) => {
              setTimeout(() => {
                icon.classList.add('animate-scale-up');
              }, 1200 + (index * 200));
            });
          } else {
            // Remove animation classes when out of view
            const elements = entry.target.querySelectorAll(
              '.connectwithme, .connecttitle, h1, .contact-info, .resume-section, .social-icons-container, .social-icon'
            );
            elements.forEach(element => {
              element.classList.remove('animate-fade-up', 'animate-scale-up');
            });
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    if (connectRef.current) {
      observer.observe(connectRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Sneh Shah.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setDownloadStatus('Resume Downloaded!');
    
    setTimeout(() => {
      setDownloadStatus('');
    }, 3000);
  };

  return (
    <div className="connectwithme" ref={connectRef}>
      <span className="connecttitle text-white">CONNECT WITH ME</span>
      <h1 className="font-weight-bold mb-4 text-white">SNEH SHAH</h1>
      
      <div className="contact-info d-flex flex-column align-items-center mb-4">
        <a href="mailto:snehshahhh@gmail.com" className="text-decoration-none mails">
          snehshahhh@gmail.com
        </a>
        <a href="tel:+91-70412 60207" className="text-decoration-none mails">
          +91-70412 60207
        </a>
      </div>
      
      <div className="resume-section mb-5 d-flex flex-column align-items-center">
        <span className="mb-2 text-white">
          Find my resume
          <button 
            onClick={handleResumeDownload}
            className="bg-transparent border-0 text-white text-decoration-underline"
            style={{ cursor: 'pointer' }}
          >
            here
          </button>
        </span>
        {downloadStatus && (
          <span className="text-success mt-2 fade-out">
            {downloadStatus}
          </span>
        )}
      </div>

      <div className="d-flex flex-column align-items-center gap-3 links">
        <span className='text-white'>Let's Get Social</span>
        <div className="social-icons-container">
          <a href="https://github.com/snehshahh" className="social-icon" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/snehshahh" className="social-icon" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/snehshahh" className="social-icon" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithMe;