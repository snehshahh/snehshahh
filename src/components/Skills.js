import React, { useEffect, useRef } from 'react';
import './Skills.css';

// Import SVG icons
import ReactLogo from '../assets/react.svg';
import DotNetLogo from '../assets/dotnet.svg';
import ExpressLogo from '../assets/node.svg';
import SqlLogo from '../assets/database.svg';
import DocumentLogo from '../assets/documents.svg';
import CodeLogo from '../assets/languages.svg';
import ToolsLogo from '../assets/tools.svg';
import Python from '../assets/python.svg';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate the skills title first
            const title = entry.target.querySelector('.skills-title');
            if (title) {
              title.classList.add('animate-fade-up');
            }

            // Animate section titles with a slight delay
            const sectionTitles = entry.target.querySelectorAll('.section-title');
            sectionTitles.forEach((title, index) => {
              setTimeout(() => {
                title.classList.add('animate-fade-up');
              }, 200 * (index + 1));
            });

            // Animate tech items with cascading delay
            const techItems = entry.target.querySelectorAll('.tech-item');
            techItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-fade-up');
              }, 300 + (index * 100)); // Start after section titles, 100ms delay between items
            });
          } else {
            // Remove animation classes when section is out of view
            const elements = entry.target.querySelectorAll(
              '.skills-title, .section-title, .tech-item'
            );
            elements.forEach(element => {
              element.classList.remove('animate-fade-up');
            });
          }
        });
      },
      {
        threshold: 0.2 // Trigger when 20% of the section is visible
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container skills" ref={skillsRef}>
      <div className="row">
        {/* Skills Title (Left side) */}
        <div className="col-md-6">
          <h2 className="skills-title">Skills & Proficiencies</h2>
        </div>

        {/* Div for Technologies, Databases, and Details (Right side) */}
        <div className="col-md-6">
          {/* Technologies Section */}
          <div className="col-md-12">
            <h4 className="section-title">Technologies</h4>
            <div className="tech-list">
              <div className="tech-column">
                <div className="tech-item">
                  <div className="tech-icon-circle">
                    <img src={ReactLogo} className="technology-logo" alt="React Logo" />
                  </div>
                  React
                </div>
                <div className="tech-item">
                  <div className="tech-icon-circle">
                    <img src={DotNetLogo} className="technology-logo" alt=".NET Logo" />
                  </div>
                  .NET
                </div>
                <div className="tech-item">
                  <div className="tech-icon-circle">
                    <img src={ExpressLogo} className="technology-logo" alt="Express Logo" />
                  </div>
                  Express
                </div>
              </div>

              <div className="tech-column">
                <div className="tech-item">
                  <div className="tech-icon-circle">
                    <img src={Python} className="technology-logo" alt="React Logo" />
                  </div>
                  Flask
                </div>
                <div className="tech-item">
                  <div className="tech-icon-circle">
                    <img src={ReactLogo} className="technology-logo" alt=".NET Logo" />
                  </div>
                  React Native
                </div>
              </div>
            </div>
          </div>

          {/* Databases Section */}
          <div className="col-md-12">
            <h4 className="section-title">Databases</h4>
            <div className="tech-list">
              <div className="tech-column">
                <div className="tech-item">
                  <div className="tech-icon-circle">
                    <img src={SqlLogo} className="technology-logo" alt="SQL Logo" />
                  </div>
                  <div>
                    SQL Databases
                    <br />
                    <span className="tagline">MS SQL Server 2014 & PostgreSQL</span>
                  </div>
                </div>
                <div className="tech-item">
                  <div className="tech-icon-circle">
                    <img src={DocumentLogo} className="technology-logo" alt="NoSQL Logo" />
                  </div>
                  <div>
                    NoSQL
                    <br />
                    <span className="tagline">Firebase & MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="col-md-12">
            <h4 className="section-title">Details</h4>
            <div className="tech-list">
              <div className="tech-column">
                <div className="tech-item">
                  <div className="tech-icon-circle">
                    <img src={CodeLogo} className="technology-logo" alt="Languages Logo" />
                  </div>
                  <div>
                    Languages
                    <br />
                    <span className="tagline">JavaScript, TypeScript, C#, Python</span>
                  </div>
                </div>
                <div className="tech-item">
                  <div className="tech-icon-circle">
                    <img src={ToolsLogo} className="technology-logo" alt="Tools Logo" />
                  </div>
                  <div>
                    Tools
                    <br />
                    <span className="tagline">Git, Docker, Visual Studio Code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;