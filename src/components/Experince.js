import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="container experience-section">
      <div className="pagetitle">
        <div></div>
        <div>
          <h2 className='pagetitle'>Relevant Experience</h2>
        </div>
        <div></div>
      </div>
      <div className="experience-row d-flex">
        <div className="row">
          <div className="col-md-1">
            <div className="experience-col">
              <h4>AUG 2022 - SEP 2024</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="experience-col">
              <h3>Sapphire Software Solutions</h3>
              <h5>Software Engineer I</h5>
              <p>I helped people ages 18 to 45 from Monday to Friday...</p>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-1">
          <div className="experience-col">
              <h4>2023</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="experience-col">
              <h3>Freelancing</h3>
              <h5>Software Developer</h5>
              <p>I helped clients develop a healthy workout regimen...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
