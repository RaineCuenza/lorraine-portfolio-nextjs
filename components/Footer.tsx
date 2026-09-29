import Link from 'next/link';
import { site } from '@/data/content';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark">LC</span>
            <span className="brand-name">Lorraine Cuenza</span>
          </Link>
          <p className="footer-note">Technology, leadership, creativity, and meaningful experiences.</p>
        </div>
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/work">Work</Link>
          <Link href="/leadership">Leadership</Link>
          <Link href="/journey">Journey</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-socials">
          <a href={site.linkedin} aria-label="LinkedIn">in</a>
          <a href={site.github} aria-label="GitHub">GH</a>
          <a href={site.instagram} aria-label="Instagram">IG</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Lorraine Anne O. Cuenza. All rights reserved.</span>
        <span>Built with React, Next.js, TypeScript & CSS.</span>
      </div>
    </footer>
  );
}
