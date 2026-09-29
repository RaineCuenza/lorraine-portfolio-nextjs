import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RevealController from '@/components/RevealController';

export const metadata: Metadata = {
  title: {
    default: 'Lorraine Anne O. Cuenza | Front-End Developer & Student Leader',
    template: '%s | Lorraine Cuenza',
  },
  description: 'Personal portfolio of Lorraine Anne O. Cuenza, showcasing front-end development, leadership, pageant experiences, events, culture, and creative work.',
  themeColor: '#75628F',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <RevealController />
      </body>
    </html>
  );
}
