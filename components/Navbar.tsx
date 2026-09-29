'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Work', '/work'],
  ['Leadership', '/leadership'],
  ['Journey', '/journey'],
  ['Gallery', '/gallery'],
  ['Contact', '/contact'],
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="siteHeader">
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="Lorraine Cuenza home">
          <span className="brand-mark">LC</span>
          <span className="brand-name">Lorraine Cuenza</span>
        </Link>

        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primaryNav"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={`primary-nav${open ? ' open' : ''}`} id="primaryNav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} className={pathname === href ? 'active' : ''} href={href}>{label}</Link>
          ))}
        </nav>

        <Link className="btn btn-small btn-dark nav-cta" href="/contact">Let’s Connect <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}
