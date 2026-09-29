'use client';

import { useEffect, useState } from 'react';
import { gallery, galleryCategories } from '@/data/content';

type GalleryItem = (typeof gallery)[number];

export default function GalleryClient() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>('All');
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', Boolean(selected));
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('no-scroll');
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [selected]);

  const visibleItems = gallery.filter((item) => filter === 'All' || item.category === filter);

  return (
    <>
      <div className="filter-row reveal" role="group" aria-label="Gallery filters">
        {galleryCategories.map((category) => (
          <button
            key={category}
            className={`filter-btn${filter === category ? ' active' : ''}`}
            onClick={() => setFilter(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid" id="galleryGrid">
        {visibleItems.map((item) => (
          <button key={`${item.category}-${item.title}`} className="gallery-item reveal visible" onClick={() => setSelected(item)} type="button">
            <img src={item.image} alt={`${item.title} placeholder`} />
            <span className="gallery-caption"><b>{item.title}</b><small>{item.category}</small></span>
          </button>
        ))}
      </div>

      <div
        className={`lightbox${selected ? ' open' : ''}`}
        aria-hidden={!selected}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightboxTitle"
        onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}
      >
        <button className="lightbox-close" aria-label="Close image" onClick={() => setSelected(null)} type="button">×</button>
        {selected && (
          <div className="lightbox-inner">
            <img src={selected.image} alt={selected.title} />
            <div>
              <p className="mini-label">{selected.category}</p>
              <h2 id="lightboxTitle">{selected.title}</h2>
              <p>{selected.caption}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
