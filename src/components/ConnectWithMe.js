// ConnectWithMe.js
import React from 'react';
import './Connect.css'


const ConnectWithMe = () => {
  return (
    <div className="connectwithme d-flex flex-column align-items-center justify-content-center text-white min-vh-100">
      <h1 className="font-weight-bold mb-4 connecttitle mb-2">CONNECT WITH ME</h1>
      <h1 className="font-weight-bold mb-4">Sneh Shah</h1>
      <div className="d-flex flex-column align-items-center mb-4">
        <a href="mailto:snehshahhh@gmail.com" className="text-decoration-none mails">
          snehshahhh@gmail.com
        </a>
        <a href="tel:+91-70412 60207" className="text-decoration-none mails">
          +91-70412 60207
        </a>
      </div>
      <span className="mb-5">
        Find my resume <a href="resume-link-here" className="white-underline">here</a>
      </span>

      <div className="d-flex flex-column align-items-center gap-3">
        <span href="resume-link-here">
          Let's Get Social
        </span>
        <a href="https://github.com/snehshahh" className="text-secondary text-decoration-none">
        </a>
        <a href="https://www.linkedin.com/snehshahh" className="text-secondary text-decoration-none">
        </a>
        <a href="https://twitter.com/snehshahh" className="text-secondary text-decoration-none">
        </a>
      </div>
    </div>
  );
};

export default ConnectWithMe;