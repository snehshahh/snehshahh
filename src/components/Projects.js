// Projects.js
import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

const PROJECTS = [
  {
    id: 'crisscross',
    title: 'Crisscross',
    role: 'Personal Product · Design & Build',
    period: '2026',
    gif: 'crisscross.gif',
    alt: 'Screen recording of Crisscross: two players join a room with a shared code and play a two-player game side by side with a live video call running.',
    description:
      'Twelve two-player games behind one room code, with a video call built into the same tab so people who are apart can play and talk without juggling apps. No signup and no download — one player starts a room, the other joins with the code. Room and game state sync live through Firebase, and the call connects the two browsers directly over WebRTC with a TURN relay for the networks that cannot be reached any other way.',
    tags: ['Next.js', 'React', 'TypeScript', 'Firebase', 'WebRTC', 'Tailwind CSS'],
    metrics: [
      { value: '250+', label: 'Players in week one' },
      { value: '1,000+', label: 'Rooms created' },
    ],
    link: 'https://crisscross-arena.vercel.app',
    linkLabel: 'Play Crisscross',
  },
  {
    id: 'hiking-alert',
    title: 'Hiking Alert Platform',
    role: 'Freelance · Full Stack Developer',
    period: 'Since 2023',
    gif: 'hiking-alert.gif',
    alt: 'Screen recording of the Hiking Alert platform: a trekker sets an expected return time and emergency contacts are notified over WhatsApp if the check-in never arrives.',
    description:
      "A safety net for trekkers. A hiker registers a trip with an expected return time; if they don't check in before it lapses, the platform automatically escalates to their emergency contacts over WhatsApp. I built the React front end, the Firebase data layer, and the Node.js webhook that parses replies and resolves alerts in two-way conversations.",
    tags: ['React', 'Firebase', 'Node.js', 'Meta WhatsApp Cloud API', 'Webhooks'],
    link: 'https://manav.in/blog/launching-alerts',
    linkLabel: 'Read the launch post',
  },
  {
    id: 'blip',
    title: 'Blip — TikTok Ads Integration',
    role: 'Client Engagement · via BMV System Integration',
    period: '',
    gif: 'blip.gif',
    alt: "Screen recording of Blip's bulk ad launcher: authorizing a TikTok ad account, then watching per-ad launch progress stream in live.",
    description:
      "Built the end-to-end TikTok Ads integration for Blip's bulk ad-launching product — the OAuth 2.0 login flow, account authorization, and the backend and frontend connectivity to the TikTok Ads API. Launch jobs keep their state in Redis and stream progress to the browser over Server-Sent Events, so a bulk run reports live per-ad status instead of being polled for it.",
    tags: ['React.js', 'Node.js', 'Redis', 'Server-Sent Events', 'OAuth 2.0', 'TikTok Ads API'],
    link: 'https://withblip.com',
    linkLabel: 'Visit Blip',
  },
  {
    id: 'linkers-db',
    title: "Linker's DB",
    role: 'Personal Project',
    period: '2024',
    gif: 'linkers-db.gif',
    alt: "Screen recording of Linker's DB: saving and organising links from the web app and the companion Chrome extension.",
    description:
      'A dedicated URL management platform — save, tag and retrieve links from a React web app or straight from the browser through a companion Chrome extension, with everything kept in sync behind one account.',
    tags: ['React', 'Chrome Extension', 'Firebase'],
    link: '',
    linkLabel: '',
  },
];

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
              <h3 className="project-title">{project.title}</h3>
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

              {project.link && (
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.linkLabel || 'View project'} →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
