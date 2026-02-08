import { useState, useCallback, useRef, useEffect } from 'react';
import { GALLERY_IMAGES } from '../../constants';
import styles from './PhotoGallery.module.css';

export interface PhotoGalleryProps {
  visible?: boolean;
}

export default function PhotoGallery({ visible = true }: PhotoGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  }, []);
  const goNext = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % GALLERY_IMAGES.length
    );
  }, []);

  // Drag to scroll functionality
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      track.style.cursor = 'grabbing';
      startX.current = e.pageX - track.offsetLeft;
      scrollLeft.current = track.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
      track.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      track.style.cursor = 'grab';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX.current) * 2; // Scroll speed multiplier
      track.scrollLeft = scrollLeft.current - walk;
    };

    track.addEventListener('mousedown', handleMouseDown);
    track.addEventListener('mouseleave', handleMouseLeave);
    track.addEventListener('mouseup', handleMouseUp);
    track.addEventListener('mousemove', handleMouseMove);

    return () => {
      track.removeEventListener('mousedown', handleMouseDown);
      track.removeEventListener('mouseleave', handleMouseLeave);
      track.removeEventListener('mouseup', handleMouseUp);
      track.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <section className={styles.section} data-section="gallery" aria-labelledby="gallery-heading">
        <div
          className={styles.inner}
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <h2 id="gallery-heading" className={styles.title}>Our Moments</h2>
          <p className={styles.summary}>A few precious memories we've shared together</p>
          <div className={styles.track} ref={trackRef} role="list">
            {GALLERY_IMAGES.map((src, index) => (
              <div key={index} className={styles.slide} role="listitem">
                <button
                  type="button"
                  className={styles.thumb}
                  onClick={() => openLightbox(index)}
                  aria-label={`View photo ${index + 1}`}
                >
                  <img src={src} alt={`Gallery ${index + 1}`} loading="lazy" decoding="async" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button type="button" className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close">×</button>
          <button type="button" className={styles.lightboxPrev} onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Previous">‹</button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img src={GALLERY_IMAGES[lightboxIndex].replace('w=800', 'w=1200')} alt={`Gallery ${lightboxIndex + 1}`} />
          </div>
          <button type="button" className={styles.lightboxNext} onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Next">›</button>
        </div>
      )}
    </>
  );
}
