import React, { useEffect, useRef } from 'react';
import './Skills.css';

const SKILL_GROUPS = [
  {
    id: 'languages',
    title: 'Languages',
    items: ['Python', 'C#', 'JavaScript', 'SQL', 'HTML/CSS'],
  },
  {
    id: 'technologies',
    title: 'Technologies',
    items: [
      'React.js',
      'Next.js',
      '.NET 6',
      'Node.js',
      'Express.js',
      'Flask',
      'Google Apps Script',
      'Firebase',
      'MS SQL Server',
      'PostgreSQL',
      'MongoDB',
      'Redis',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Concepts',
    items: [
      'RESTful APIs',
      'Microservices Architecture',
      'CI/CD Pipelines',
      'GitHub Actions',
      'Docker',
      'Version Control (Git)',
      'Database Design',
      'Agile Methodology',
      'Test-Driven Development',
    ],
  },
];

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const heading = entry.target.querySelector('.skills-heading');
            if (heading) {
              heading.classList.add('animate-fade-up');
            }

            const groups = entry.target.querySelectorAll('.skill-group');
            groups.forEach((group, index) => {
              setTimeout(() => {
                group.classList.add('animate-fade-up');
              }, 200 * (index + 1));
            });
          } else {
            const elements = entry.target.querySelectorAll('.skills-heading, .skill-group');
            elements.forEach((element) => {
              element.classList.remove('animate-fade-up');
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container skills" ref={skillsRef}>
      <div className="row">
        <div className="col-12 col-lg-5">
          <header className="skills-heading">
            <span className="section-eyebrow">Toolkit</span>
            <h2>Skills</h2>
          </header>
        </div>

        <div className="col-12 col-lg-7">
          {SKILL_GROUPS.map((group) => (
            <section className="skill-group" key={group.id}>
              <h3 className="skill-group-title">{group.title}</h3>
              <ul className="skill-chips">
                {group.items.map((item) => (
                  <li className="skill-chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
