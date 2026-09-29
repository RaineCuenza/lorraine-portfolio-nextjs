import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Leadership' };

export default function LeadershipPage() {
  return (
    <>
      <section className="page-hero section-pad center">
        <div className="container narrow reveal">
          <p className="eyebrow centered"><span></span> Beyond the screen <span></span></p>
          <h1>Leadership, collaboration, and <em>meaningful service.</em></h1>
          <p className="lead">Experiences that strengthened how I communicate, organize, work with others, and lead with purpose.</p>
        </div>
      </section>

      <section className="story-section section-pad" id="mdo">
        <div className="container story-grid">
          <div className="story-collage reveal"><img className="large" src="/assets/images/mdo_event.png" alt="MDO event photo placeholder" /><img className="small" src="/assets/images/mdo_leaders.jpg" alt="MDO behind-the-scenes placeholder" /></div>
          <div className="story-copy reveal">
            <p className="eyebrow"><span></span> MDO Journey</p>
            <h2>Leading through connection.</h2>
            <p className="lead">As an MDO officer, I have been part of planning, coordination, student engagement, and event execution.</p>
            <div className="story-note"><span>Featured Event</span><h3>Speak, Lead, Connect</h3><p>Public Speaking and Leadership Capacity-Building Workshop</p></div>
            <p>This experience strengthened my confidence in leadership, communication, teamwork, and event management.</p>
          </div>
        </div>
      </section>

      <section className="story-section section-pad surface-soft" id="sit">
        <div className="container story-grid reverse-layout">
          <div className="story-copy reveal">
            <p className="eyebrow"><span></span> SIT Journey</p>
            <h2>Growing with my tech community.</h2>
            <p className="lead">My SIT journey brings together technology, teamwork, student organization responsibilities, and shared experiences.</p>
            <ul className="clean-list"><li>SIT events and activities</li><li>Student organization responsibilities</li><li>Event preparation and teamwork</li><li>Leadership and community involvement</li></ul>
          </div>
          <div className="story-collage reveal"><img className="large" src="/assets/images/7th_mimaropa.jpg" alt="SIT event photo placeholder" /><img className="small" src="/assets/images/Sit_leaders.jpg" alt="SIT teamwork photo placeholder" /></div>
        </div>
      </section>
    </>
  );
}
