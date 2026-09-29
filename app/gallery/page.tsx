import type { Metadata } from 'next';
import GalleryClient from '@/components/GalleryClient';

export const metadata: Metadata = { title: 'Gallery' };

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero section-pad center">
        <div className="container narrow reveal">
          <p className="eyebrow centered"><span></span> Moments along the journey <span></span></p>
          <h1>A visual archive of <em>people, places, and memories.</em></h1>
          <p className="lead">Replace the placeholders below with your real event, pageant, leadership, and behind-the-scenes photos.</p>
        </div>
      </section>
      <section className="section-pad compact-top"><div className="container"><GalleryClient /></div></section>
    </>
  );
}
