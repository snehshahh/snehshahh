// Experience.js
import React, { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate the title first
            const title = entry.target.querySelector('.pagetitle');
            if (title) {
              title.classList.add('animate-fade-up');
            }

            // Animate experience rows with a slight delay
            const rows = entry.target.querySelectorAll('.experience-row');
            rows.forEach((row, index) => {
              setTimeout(() => {
                row.classList.add('animate-fade-up');
              }, 200 * (index + 1));
            });

            // Animate individual experience elements
            const elements = entry.target.querySelectorAll('.experience-col');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('animate-fade-up');
              }, 300 + (index * 100));
            });
          } else {
            // Remove animation classes when section is out of view
            const elements = entry.target.querySelectorAll(
              '.pagetitle, .experience-row, .experience-col'
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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container experience-section" ref={experienceRef}>
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