import type { Metadata } from 'next';
import { projects } from '@/data/content';

export const metadata: Metadata = { title: 'Work' };

export default function WorkPage() {
  return (
    <>
      <section className="page-hero section-pad center">
        <div className="container narrow reveal">
          <p className="eyebrow centered"><span></span> Selected work <span></span></p>
          <h1>Digital experiences built with <em>care and curiosity.</em></h1>
          <p className="lead">A growing collection of web interfaces, systems, and design-to-code projects.</p>
        </div>
      </section>
      <section className="section-pad compact-top">
        <div className="container project-stack detailed">
          {projects.map((project, index) => (
            <article className={`project-row reveal${index % 2 ? ' reverse' : ''}`} key={project.title}>
              <div className="project-media"><img src={project.image} alt={`${project.title} placeholder`} /></div>
              <div className="project-copy">
                <span className="project-number">0{index + 1}</span>
                <p className="mini-label">{project.subtitle}</p>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-meta"><span><b>Role</b> Front-End / UI</span><span><b>Status</b> Portfolio-ready</span></div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
