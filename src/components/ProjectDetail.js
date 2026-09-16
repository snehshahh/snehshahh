import React, { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getProject } from '../data/projects';
import './ProjectDetail.css';

const ProjectMedia = ({ project }) => {
  const [failed, setFailed] = React.useState(false);

  // On a full-width detail page an empty 16:10 placeholder dominates the
  // layout, so a missing recording drops the media block entirely.
  if (failed) return null;

  return (
    <figure className="detail-media">
      <img
        src={`${process.env.PUBLIC_URL}/projects/${project.gif}`}
        alt={project.alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    </figure>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!project) return;
    const previous = document.title;
    document.title = `${project.title} — Sneh Shah`;
    return () => {
      document.title = previous;
    };
  }, [project]);

  // Unknown slug, or a project that is card-only, goes back to the list.
  if (!project || !project.detail) {
    return <Navigate to="/" replace />;
  }

  const { detail } = project;

  return (
    <div className="project-detail">
      <div className="container detail-container">
        <Link to="/" className="detail-back">
          ← Back to portfolio
        </Link>

        <header className="detail-header">
          <p className="detail-meta">
            {project.role}
            {project.period && <span className="detail-meta-period">{project.period}</span>}
          </p>
          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-tagline">{detail.tagline}</p>

          {project.link && (
            <a
              className="detail-cta"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.linkLabel || 'Visit project'} →
            </a>
          )}
        </header>

        <ProjectMedia project={project} />

        {project.metrics && (
          <dl className="detail-metrics">
            {project.metrics.map((metric) => (
              <div className="detail-metric" key={metric.label}>
                <dt>{metric.value}</dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </dl>
        )}

        <section className="detail-section">
          <h2 className="detail-section-title">Overview</h2>
          {detail.overview.map((paragraph, i) => (
            <p className="detail-prose" key={i}>
              {paragraph}
            </p>
          ))}
        </section>

        <section className="detail-section">
          <h2 className="detail-section-title">What it does</h2>
          <ul className="detail-highlights">
            {detail.highlights.map((item) => (
              <li className="detail-highlight" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h2 className="detail-section-title">My part in it</h2>
          <ul className="detail-contributions">
            {detail.contributions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h2 className="detail-section-title">Built with</h2>
          <div className="detail-stack">
            {detail.stack.map((group) => (
              <div className="detail-stack-group" key={group.group}>
                <h3>{group.group}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li className="detail-chip" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {detail.note && <p className="detail-note">{detail.note}</p>}

        {detail.links && detail.links.length > 0 && (
          <section className="detail-section detail-links-section">
            <h2 className="detail-section-title">Links</h2>
            <ul className="detail-links">
              {detail.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label} →
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <Link to="/" className="detail-back detail-back-bottom">
          ← Back to portfolio
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
