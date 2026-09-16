// Projects.js
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PROJECTS from '../data/projects';
import './Projects.css';


const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const ProjectMedia = ({ project }) => {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(prefersReducedMotion);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;

    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (event) => setReduceMotion(event.matches);

    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  if (failed) {
    return (
      <div className="project-media project-media-empty" aria-hidden="true">
        <span className="project-media-empty-label">Demo coming soon</span>
      </div>
    );
  }

  const src = `${process.env.PUBLIC_URL}/projects/${project.gif}`;

  return (
    <figure className="project-media">
      {!loaded && <span className="project-media-skeleton" aria-hidden="true" />}
      <img
        src={src}
        alt={project.alt}
        className={`project-gif ${loaded ? 'is-loaded' : ''}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
      />
      {reduceMotion && (
        <figcaption className="project-media-note">
          Animation reduced by your system settings — open the project link for the full demo.
        </figcaption>
      )}
    </figure>
  );
};

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const title = entry.target.querySelector('.pagetitle');
            if (title) {
              title.classList.add('animate-fade-up');
            }

            const cards = entry.target.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-up');
              }, 200 * (index + 1));
            });
          } else {
            const elements = entry.target.querySelectorAll('.pagetitle, .project-card');
            elements.forEach((element) => {
              element.classList.remove('animate-fade-up');
            });
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container projects-section" ref={projectsRef}>
      <div className="pagetitle">
        <div></div>
        <div>
          <h2>Selected <br />Projects</h2>
        </div>
        <div></div>
      </div>

      <div className="projects-list">
        {PROJECTS.map((project) => (
          <article className="project-card row align-items-center" key={project.id}>
            <div className="col-12 col-lg-6 project-media-col">
              <ProjectMedia project={project} />
            </div>

            <div className="col-12 col-lg-6 project-content">
              {project.period && <h4 className="project-period">{project.period}</h4>}
              <h3 className="project-title">
                {project.title}
                {project.badge && <span className="project-badge">{project.badge}</span>}
              </h3>
              <h5 className="project-role">{project.role}</h5>
              <p className="project-description">{project.description}</p>

              {project.metrics && (
                <dl className="project-metrics">
                  {project.metrics.map((metric) => (
                    <div className="project-metric" key={metric.label}>
                      <dt className="project-metric-value">{metric.value}</dt>
                      <dd className="project-metric-label">{metric.label}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <ul className="project-tags">
                {project.tags.map((tag) => (
                  <li className="project-tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="project-actions">
                {project.detail && (
                  <Link className="project-link" to={`/projects/${project.slug}`}>
                    Read the case study →
                  </Link>
                )}
                {project.link && (
                  <a
                    className="project-link project-link-external"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkLabel || 'View project'} →
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
