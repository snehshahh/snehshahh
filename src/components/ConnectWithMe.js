import React, { useState } from 'react';
import './Connect.css';
import Github from '../assets/github.svg';
import Twitter from '../assets/twitter.svg';
import Linkedin from '../assets/linkedin.svg';
import Resume from '../assets/SnehResume.pdf';

const ConnectWithMe = () => {
  const [downloadStatus, setDownloadStatus] = useState('');

  const handleResumeDownload = () => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Sneh Shah.pdf'; // Name the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message
    setDownloadStatus('Resume Downloaded!');
    
    // Clear the message after 3 seconds
    setTimeout(() => {
      setDownloadStatus('');
    }, 3000);
  };

  return (
    <div className="connectwithme d-flex flex-column align-items-center justify-content-center text-white min-vh-100">
      <h1 className="font-weight-bold mb-4 connecttitle mb-2">CONNECT WITH ME</h1>
      <h1 className="font-weight-bold mb-4">SNEH SHAH</h1>
      <div className="d-flex flex-column align-items-center mb-4">
        <a href="mailto:snehshahhh@gmail.com" className="text-decoration-none mails">
          snehshahhh@gmail.com
        </a>
        <a href="tel:+91-70412 60207" className="text-decoration-none mails">
          +91-70412 60207
        </a>
      </div>
      
      <div className="mb-5 d-flex flex-column align-items-center">
        <span className="mb-2">
          Find my resume
          <button 
            onClick={handleResumeDownload}
            className="bg-transparent border-0 text-white text-decoration-underline cursor-pointer"
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

      <div className="d-flex flex-column align-items-center gap-3">
        <span>Let's Get Social</span>
        <div className="social-icons-container d-flex gap-3">
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