import Link from 'next/link';
import { journeyCards, projects, site } from '@/data/content';

export default function HomePage() {
  return (
    <>
      <section className="hero section-pad">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span></span> Hello, I’m</p>
            <h1>Lorraine Anne O.<br /><em>Cuenza</em></h1>
            <p className="hero-role">{site.title}</p>
            <p className="hero-text">{site.intro}</p>
            <div className="hero-actions">
              <Link className="btn btn-dark" href="/work">Explore My Work <span aria-hidden="true">↗</span></Link>
              <Link className="btn btn-light" href="/journey">My Journey <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className="hero-visual reveal">
            <div className="hero-orb orb-purple"></div>
            <div className="hero-orb orb-mint"></div>
            <figure className="portrait-frame">
              <img src="/assets/images/Professional_image.png" alt="Placeholder for Lorraine's portrait" />
            </figure>
            <div className="hero-quote">
              <span className="script">Technology with heart.</span>
              <p>“I believe in using technology, creativity, and purpose to make a meaningful impact.”</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad compact-top">
        <div className="container">
          <div className="section-heading reveal">
            <div><p className="eyebrow"><span></span> At a glance</p><h2>Highlights</h2></div>
            <p>A journey shaped by technology, leadership, creativity, and meaningful experiences.</p>
          </div>
          <div className="highlights-grid">
            <article className="highlight-item reveal"><span className="icon-bubble purple">✦</span><h3>MDO Officer</h3><p>Leadership, event organization, student engagement, and collaboration.</p></article>
            <article className="highlight-item reveal"><span className="icon-bubble mint">⌘</span><h3>SIT Officer</h3><p>Technology-focused student leadership and organizational involvement.</p></article>
            <article className="highlight-item reveal"><span className="icon-bubble purple">♔</span><h3>Miss DWCC</h3><p>1st Runner-Up — a journey of confidence, preparation, and growth.</p></article>
            <article className="highlight-item reveal"><span className="icon-bubble mint">❋</span><h3>Buwan ng Wika</h3><p>Celebrating Filipino culture, identity, creativity, and tradition.</p></article>
          </div>
        </div>
      </section>

      <section className="section-pad surface-soft">
        <div className="container">
          <div className="section-heading reveal">
            <div><p className="eyebrow"><span></span> Featured projects</p><h2>Selected Work</h2></div>
            <div className="heading-side"><p>A collection of digital experiences built through creativity, problem-solving, and thoughtful design.</p><Link className="text-link" href="/work">View all projects ↗</Link></div>
          </div>
          <div className="project-stack">
            {projects.map((project, index) => (
              <article className={`project-row reveal${index % 2 ? ' reverse' : ''}`} key={project.title}>
                <div className="project-media"><img src={project.image} alt={`${project.title} project placeholder`} /></div>
                <div className="project-copy">
                  <span className="project-number">0{index + 1}</span>
                  <p className="mini-label">{project.subtitle}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <Link className="text-link" href="/work">View project ↗</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-heading reveal">
            <div><p className="eyebrow"><span></span> People · Experiences · Growth</p><h2>Leadership & Journey</h2></div>
            <p>Moments that shaped me through leadership, service, competition, culture, and community.</p>
          </div>
          <div className="journey-grid">
            {journeyCards.map((card) => (
              <Link className="journey-card reveal" href={card.link} key={card.title}>
                <img src={card.image} alt={`${card.title} placeholder`} />
                <span className="journey-overlay"></span>
                <div className="journey-card-copy"><span>{card.eyebrow}</span><h3>{card.title}</h3><p>{card.description}</p><b aria-hidden="true">↗</b></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-section section-pad reveal">
        <div className="container narrow">
          <p className="eyebrow light"><span></span> My perspective</p>
          <blockquote>“Technology taught me how to create. Leadership taught me how to connect. Every experience continues to shape who I am becoming.”</blockquote>
        </div>
      </section>

      <section className="section-pad">
        <div className="container cta-panel reveal">
          <div><p className="eyebrow"><span></span> Let’s connect</p><h2>Let’s create something meaningful.</h2><p>Always open to opportunities, collaborations, and conversations.</p></div>
          <Link className="btn btn-dark" href="/contact">Let’s Connect ↗</Link>
        </div>
      </section>
    </>
  );
}
