import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="container experience-section">
      <div className="pagetitle">
        <div></div>
        <div>
          <h2>Relevant <br />Experience</h2>
        </div>
        <div></div>
      </div>
      <div className="experience-row d-flex ml-3">
        <div className="row">
          <div className="col-md-1 mr-1">
            <div className="experience-col mt-2">
              <h4>Since 2023</h4>
            </div>
          </div>
          <div className="col-md-5">
            <div className="experience-col">
              <h3>Freelancing</h3>
              <h5>Software Developer</h5>
              <p className='desc'>I managed community-focused projects serving over 45,000 users, working on public data displays and implementing robust safety systems. My freelance work emphasizes effective data presentation and secure, user-centered solutions.</p>
            </div>
          </div>
          <div className="col-md-1">
            <div className="experience-col mt-2">
              <h4>AUG 2022-SEP 2024</h4>
            </div>
          </div>
          <div className="col-md-5">
            <div className="experience-col">
              <h3>Sapphire Software Solutions</h3>
              <h5>Software Engineer I</h5>
              <p className='desc'>I led the adoption of new technologies, managed CRM project development, and built custom functions such as automated timetable generation. I also resolved complex technical challenges, enhancing system efficiency and supporting the company's project goals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;