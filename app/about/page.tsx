import type { Metadata } from 'next';
import { skills } from '@/data/content';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container two-col align-center">
          <div className="reveal">
            <p className="eyebrow"><span></span> About me</p>
            <h1>A little about <em>who I am.</em></h1>
            <p className="lead">I’m a BS Information Technology student with a strong interest in front-end development, design, leadership, events, and creative work.</p>
            <p>I enjoy building digital experiences, collaborating with people, and taking part in opportunities that challenge me to communicate, organize, create, and grow.</p>
          </div>
          <div className="about-photo reveal"><img src="/assets/images/floral-attire.png" alt="Placeholder for an about photo" /></div>
        </div>
      </section>

      <section className="section-pad surface-soft">
        <div className="container">
          <div className="section-heading reveal"><div><p className="eyebrow"><span></span> My timeline</p><h2>Growing through every chapter</h2></div><p>A simple timeline you can update as your story continues.</p></div>
          <div className="timeline">
            <article className="timeline-item reveal"><span>2022</span><div><h3>Started my BS Information Technology journey</h3><p>Built my foundation in technology, programming, and digital problem-solving.</p></div></article>
            <article className="timeline-item reveal"><span>2024–2025</span><div><h3>Leadership and academic growth</h3><p>Expanded my involvement in school activities, projects, and student leadership experiences.</p></div></article>
            <article className="timeline-item reveal"><span>2026</span><div><h3>A year of new roles and experiences</h3><p>Balanced front-end projects, student leadership, events, pageant experiences, and personal growth.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-heading reveal"><div><p className="eyebrow"><span></span> Skills</p><h2>Tools I work with</h2></div><p>Technical tools and creative skills I continue to develop.</p></div>
          <div className="skills-grid">
            {Object.entries(skills).map(([group, items]) => (
              <article className="skill-group reveal" key={group}>
                <h3>{group}</h3>
                <div className="tag-row large">{items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
