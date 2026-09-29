import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { site } from '@/data/content';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <>
      <section className="page-hero section-pad center">
        <div className="container narrow reveal">
          <p className="eyebrow centered"><span></span> Let’s connect <span></span></p>
          <h1>Let’s create something <em>meaningful.</em></h1>
          <p className="lead">Whether it’s technology, design, leadership, or creative collaboration, I’m always open to opportunities to learn, build, and connect.</p>
        </div>
      </section>
      <section className="section-pad compact-top">
        <div className="container contact-grid">
          <div className="contact-copy reveal">
            <h2>Start a conversation.</h2>
            <p>Update the links and email address in <code>data/content.ts</code> with your real contact details.</p>
            <div className="contact-list">
              <a href={`mailto:${site.email}`}><span>Email</span><b>{site.email}</b></a>
              <a href={site.linkedin}><span>LinkedIn</span><b>Connect ↗</b></a>
              <a href={site.github}><span>GitHub</span><b>View profile ↗</b></a>
              <a href={site.instagram}><span>Instagram</span><b>Follow ↗</b></a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
