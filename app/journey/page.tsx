import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Journey' };

const chapters = [
  ['01', 'The Beginning', 'The decision to step forward and embrace a new challenge.'],
  ['02', 'Preparation', 'Rehearsals, fittings, practice, and learning to become more confident.'],
  ['03', 'Behind the Scenes', 'The candid moments, support systems, and memories beyond the stage.'],
  ['04', 'Pageant Night', 'The experience of finally bringing everything together on stage.'],
  ['05', 'The Recognition', 'A meaningful milestone and a reminder of how far the journey had come.'],
] as const;

export default function JourneyPage() {
  return (
    <>
      <section className="page-hero section-pad center">
        <div className="container narrow reveal">
          <p className="eyebrow centered"><span></span> Personal journey <span></span></p>
          <h1>Moments that helped me <em>grow into myself.</em></h1>
          <p className="lead">Pageantry, culture, confidence, creativity, and the memories behind each experience.</p>
        </div>
      </section>

      <section className="section-pad" id="miss-dwcc">
        <div className="container">
          <div className="journey-feature reveal">
            <img src="/assets/images/CasualAttire2.jpg" alt="Miss DWCC journey photo placeholder" />
            <div className="journey-feature-copy"><p className="eyebrow"><span></span> Beyond the crown</p><h2>My Miss DWCC 2026 Journey</h2><p className="award-line">Miss DWCC 2026 — <strong>1st Runner-Up</strong></p><p>A journey of preparation, confidence, self-expression, and growth — from the first step to pageant night.</p></div>
          </div>
          <div className="chapter-grid">
            {chapters.map(([number, title, description]) => <article className="chapter reveal" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
          <blockquote className="journey-quote reveal">“Confidence is built through preparation, growth, and the courage to step forward.”</blockquote>
        </div>
      </section>

      <section className="section-pad surface-soft" id="buwan">
        <div className="container story-grid">
          <div className="story-collage reveal"><img className="large" src="/assets/images/Crowned_BW.jpg" alt="Buwan ng Wika photo placeholder" /><img className="small" src="/assets/images/Buwan_Wika_Solo.jpg " alt="Filipiniana photo placeholder" /></div>
          <div className="story-copy reveal"><p className="eyebrow"><span></span> Celebrating Filipino culture</p><h2>My Buwan ng Wika Journey</h2><p className="lead">A celebration of Filipino culture, identity, creativity, and the beauty of meaningful traditions.</p><p>My Buwan ng Wika journey was extra special because it was my very first time joining a pageant—an experience that pushed me outside my comfort zone and became one of my most memorable college moments.</p></div>
        </div>
      </section>
    </>
  );
}
