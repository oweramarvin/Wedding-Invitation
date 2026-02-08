import { useEffect, useRef } from 'react';
import { COUPLE, DATE_LABEL, CEREMONY, RECEPTION } from '../../constants';
import styles from './Hero.module.css';

export interface HeroProps {
  visible?: boolean;
  children?: React.ReactNode;
}

function imageDriveLink(id: string) {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w800-h600`;
}

export default function Hero({ visible = true, children }: HeroProps) {
  const bgRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on scroll (luxury feel)
  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY;
      bgRef.current.style.transform = `translateY(${y * 0.08}px) scale(1.05)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.hero} aria-label="Wedding invitation hero">
      {/* Background */}
      <div className={styles.background} ref={bgRef}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url("${imageDriveLink("1WtiQMBhEVnMRHNErXvhCEgwKIVeQw20D")}")`
          }}
          aria-hidden
        />
        <div className={styles.overlay} aria-hidden />
      </div>

      {/* Content */}
      <div className={styles.content} data-visible={visible}>
        <p className={styles.prelude}>Together with their families and friends</p>

        <h1 className={styles.names}>
          <span className={styles.name}>{COUPLE.groom}</span>
          <span className={styles.amp}>&</span>
          <span className={styles.name}>{COUPLE.bride}</span>
        </h1>

        <p className={styles.location}>♥ Ceremony: {CEREMONY.name}</p>
        <p className={styles.reception}>♥ Reception: {RECEPTION.name}</p>
        <p className={styles.date}>{DATE_LABEL}</p>

        {children}
      </div>
    </section>
  );
}
