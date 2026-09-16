// Experience.js
import React, { useEffect, useRef } from 'react';
import './Experience.css';

const ROLES = [
  {
    id: 'bmv',
    company: 'BMV System Integration',
    role: 'Software Engineer 1',
    period: 'Dec 2024 — Present',
    current: true,
    points: [
      'Architected a full production pipeline tracking video content operations end to end, from scripting through to social posting, surfacing the process stats that let management pinpoint bottlenecks and lift team productivity by 30%.',
      "Engineered a proof of concept enabling ad creation through TikTok Ads Manager despite India's platform ban, integrating the TikTok Business API and Developer API across multiple platforms. Client approval of the POC led directly to the withblip.com engagement.",
      'Overhauled warehouse downtime recording by designing and deploying an integrated tracking system, reaching 90% accuracy in shift-level downtime capture.',
      'Identified and engineered workarounds for platform constraints, delivering solutions that operated beyond the limits of the existing environment.',
    ],
  },
  {
    id: 'sapphire',
    company: 'Sapphire Software Solutions',
    role: 'Software Engineer Trainee',
    period: 'Aug 2022 — Sep 2024',
    current: false,
    points: [
      'Redesigned the timetable generation system from the ground up, cutting scheduling time by 50% across schools sharing teachers organization-wide.',
      'Tracked down and resolved critical workflow bottlenecks, saving the team roughly 25 hours of rework per sprint.',
      'Streamlined document handling by rebuilding the PDF generation pipeline, meaningfully reducing turnaround on document-heavy workflows.',
      'Partnered in an agile team of three to deliver a specialized module end to end, owning frontend integration and a cohesive user experience.',
    ],
  },
];

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const heading = entry.target.querySelector('.experience-heading');
            if (heading) {
              heading.classList.add('animate-fade-up');
            }

            const roles = entry.target.querySelectorAll('.role');
            roles.forEach((role, index) => {
              setTimeout(() => {
                role.classList.add('animate-fade-up');
              }, 200 * (index + 1));
            });
          } else {
            const elements = entry.target.querySelectorAll('.experience-heading, .role');
            elements.forEach((element) => {
              element.classList.remove('animate-fade-up');
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container experience-section" ref={experienceRef}>
      <header className="experience-heading">
        <span className="section-eyebrow">Career</span>
        <h2>Experience</h2>
      </header>

      <ol className="role-timeline">
        {ROLES.map((role) => (
          <li className="role" key={role.id}>
            <div className="role-marker" aria-hidden="true" />

            <div className="role-body">
              <div className="role-meta">
                <p className="role-period">
                  {role.period}
                  {role.current && <span className="role-badge">Current</span>}
                </p>
                <h3 className="role-company">{role.company}</h3>
                <p className="role-title">{role.role}</p>
              </div>

              <ul className="role-points">
                {role.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Experience;
