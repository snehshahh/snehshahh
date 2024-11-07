import React, { useEffect } from 'react';
import './Skills.css';

// Import SVG icons
import ReactLogo from '../assets/react.svg';
import DotNetLogo from '../assets/dotnet.svg';
import ExpressLogo from '../assets/node.svg';
import SqlLogo from '../assets/database.svg';
import DocumentLogo from '../assets/documents.svg';
import CodeLogo from '../assets/languages.svg';
import ToolsLogo from '../assets/tools.svg';

const Skills = () => {
  useEffect(() => {
    // Add animation when the component mounts
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((item, index) => {
      item.style.animation = `fadeIn 0.5s ease-in-out ${index * 0.1}s both`;
    });
  }, []);

  return (
    <div className="container skills">
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
                {/* Add additional technologies here */}
              </div>

              <div className="tech-column">
                <div className="tech-item">
                  <div className="tech-icon-circle">
                    <img src={ReactLogo} className="technology-logo" alt="React Logo" />
                  </div>
                  Angular
                </div>
                <div className="tech-item">
                  <div className="tech-icon-circle">
                    <img src={DotNetLogo} className="technology-logo" alt=".NET Logo" />
                  </div>
                  Node.js
                </div>
                {/* Add additional technologies here */}
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <h4 className="section-title">Databases</h4>
            <div className="tech-list">
              <div className="tech-column">
                <div className="tech-item">
                  <div className="tech-icon-circle">
                    <img src={SqlLogo} className="technology-logo" alt="SQL Logo" />
                  </div>
                  SQL Databases<span className="line"></span>
                </div>
                <div className="tech-item">
                  <div className="tech-icon-circle">
                    <img src={DocumentLogo} className="technology-logo" alt="NoSQL Logo" />
                  </div>
                  NoSQL<span className="line"></span>
                </div>
                {/* Add additional technologies here */}
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <h4 className="section-title">Details</h4>
            <div className="tech-list">
              <div className="tech-column">
                <div className="tech-item">
                  <div className="tech-icon-circle">
                    <img src={CodeLogo} className="technology-logo" alt="Languages Logo" />
                  </div>
                  Languages<span className="line"></span>
                </div>
                <div className="tech-item">
                  <div className="tech-icon-circle">
                    <img src={ToolsLogo} className="technology-logo" alt="Tools Logo" />
                  </div>
                  Tools<span className="line"></span>
                </div>
                {/* Add additional technologies here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;