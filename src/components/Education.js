import React, { useEffect, useRef } from 'react';
import './Educations.css';

const CERTIFICATIONS = [
  {
    id: 'azure-ai',
    name: 'Azure AI Fundamentals',
    issuer: 'Microsoft',
    detail: 'Fundamentals of AI workloads, machine learning and deep learning.',
  },
];

const Educations = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const heading = entry.target.querySelector('.education-heading');
            if (heading) {
              heading.classList.add('animate-fade-up');
            }

            const blocks = entry.target.querySelectorAll('.education-block');
            blocks.forEach((block, index) => {
              setTimeout(() => {
                block.classList.add('animate-fade-up');
              }, 200 * (index + 1));
            });
          } else {
            const elements = entry.target.querySelectorAll('.education-heading, .education-block');
            elements.forEach((element) => {
              element.classList.remove('animate-fade-up');
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container educations" ref={educationRef}>
      <div className="row">
        <div className="col-12 col-lg-5">
          <header className="education-heading">
            <span className="section-eyebrow">Background</span>
            <h2>Education</h2>
          </header>
        </div>

        <div className="col-12 col-lg-7">
          <div className="education-block degree-block">
            <p className="degree-period">May 2024</p>
            <h3 className="degree-school">Silver Oak University</h3>
            <p className="degree-name">Bachelor of Technology, Information Technology</p>
            <p className="degree-location">Ahmedabad, Gujarat</p>

            <dl className="degree-stat">
              <dt>CGPA</dt>
              <dd>
                9.54<span className="degree-stat-max"> / 10.00</span>
              </dd>
            </dl>
          </div>

          <div className="education-block certifications-block">
            <h4 className="certifications-title">Certifications</h4>
            <ul className="certification-list">
              {CERTIFICATIONS.map((cert) => (
                <li className="certification" key={cert.id}>
                  <p className="certification-name">{cert.name}</p>
                  <p className="certification-issuer">{cert.issuer}</p>
                  <p className="certification-detail">{cert.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educations;
